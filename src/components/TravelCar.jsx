import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

/**
 * TravelCar
 * Props:
 *   itinerary – array of { day, name, img, pos: { x, y } }
 *
 * Features:
 *  • Smooth physics-based movement via Framer Motion useMotionValue
 *  • Car SVG rotates to face the direction of travel
 *  • Dotted route path drawn across all waypoints
 *  • Glowing waypoint markers; active one pulses orange
 *  • Rich info-bubble pops up at each stop (thumbnail + name + day)
 *  • Animated speed lines while the car is moving
 */
const TravelCar = ({ itinerary }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [angle, setAngle]         = useState(0);
  const [moving, setMoving]       = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [trail, setTrail]         = useState([]);

  const cx = useMotionValue(itinerary[0]?.pos.x ?? 0);
  const cy = useMotionValue(itinerary[0]?.pos.y ?? 0);

  /* Build the dotted path for the full route */
  const routeD = itinerary
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${p.pos.x},${p.pos.y}`)
    .join(' ');

  useEffect(() => {
    if (!itinerary || itinerary.length < 2) return;
    let cancelled = false;

    const journey = async () => {
      /* Show popup at start */
      setActiveIdx(0);
      setShowBubble(true);
      await sleep(1000);
      setShowBubble(false);

      for (let i = 1; i < itinerary.length; i++) {
        if (cancelled) return;

        const from = itinerary[i - 1];
        const to   = itinerary[i];

        /* Compute bearing */
        const dx = to.pos.x - from.pos.x;
        const dy = to.pos.y - from.pos.y;
        setAngle(Math.atan2(dy, dx) * (180 / Math.PI));
        setMoving(true);

        /* Animate car */
        await Promise.all([
          animate(cx, to.pos.x, { duration: 2.4, ease: [0.42, 0, 0.58, 1] }),
          animate(cy, to.pos.y, { duration: 2.4, ease: [0.42, 0, 0.58, 1] }),
        ]);

        if (cancelled) return;
        setMoving(false);

        /* Update trail */
        setTrail(t => [...t, { x: to.pos.x, y: to.pos.y }]);

        /* Show popup at destination */
        setActiveIdx(i);
        setShowBubble(true);
        await sleep(1400);
        if (cancelled) return;
        setShowBubble(false);
        await sleep(300);
      }
    };

    journey();
    return () => { cancelled = true; };
  }, [itinerary]); // eslint-disable-line

  const current = itinerary[activeIdx] ?? itinerary[0];

  return (
    <g>
      {/* ── Dotted route line ── */}
      <path
        d={routeD}
        fill="none"
        stroke="rgba(255,153,51,0.28)"
        strokeWidth="2"
        strokeDasharray="6 5"
        strokeLinecap="round"
      />

      {/* ── Visited trail glow ── */}
      {trail.map((pt, i) => (
        <circle
          key={i}
          cx={pt.x} cy={pt.y} r="3.5"
          fill="rgba(255,153,51,0.55)"
          style={{ filter: 'drop-shadow(0 0 4px #ff9933)' }}
        />
      ))}

      {/* ── Waypoint markers ── */}
      {itinerary.map((stop, i) => {
        const isActive = i === activeIdx;
        return (
          <g key={i}>
            {/* Pulse ring for active */}
            {isActive && (
              <circle
                cx={stop.pos.x} cy={stop.pos.y}
                r="12"
                fill="none"
                stroke="rgba(255,153,51,0.35)"
                strokeWidth="1.5"
              >
                <animate
                  attributeName="r" values="8;16;8"
                  dur="2s" repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity" values="0.6;0;0.6"
                  dur="2s" repeatCount="indefinite"
                />
              </circle>
            )}
            <circle
              cx={stop.pos.x} cy={stop.pos.y}
              r={isActive ? 7 : 5}
              fill={isActive ? '#ff9933' : 'rgba(255,255,255,0.15)'}
              stroke={isActive ? '#fff' : 'rgba(255,153,51,0.5)'}
              strokeWidth="1.5"
              style={{
                filter: isActive ? 'drop-shadow(0 0 6px #ff9933)' : 'none',
                transition: 'all 0.35s ease',
              }}
            />
            <text
              x={stop.pos.x + 10} y={stop.pos.y + 4}
              fontSize="7" fill="rgba(255,255,255,0.7)"
              fontFamily="DM Sans, sans-serif" fontWeight="600"
            >
              {stop.name?.split(' ')[0]}
            </text>
          </g>
        );
      })}

      {/* ── Car (moves with motion values) ── */}
      <motion.g style={{ x: cx, y: cy }}>

        {/* Car rotates toward destination */}
        <motion.g
          animate={{ rotate: angle + 90 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ originX: '0px', originY: '0px' }}
        >
          {/* Shadow ellipse */}
          <ellipse cx="0" cy="5" rx="10" ry="4" fill="rgba(0,0,0,0.4)" />

          {/* Car body */}
          <g transform="translate(-8,-14)">
            {/* Main body */}
            <rect x="2" y="3" width="12" height="22" rx="4" fill="#d62828" />
            {/* Cabin */}
            <rect x="3.5" y="7" width="9" height="10" rx="2.5" fill="#b01e1e" />
            {/* Front windshield */}
            <rect x="4" y="7.5" width="8" height="5" rx="1.5" fill="rgba(170,220,255,0.82)" />
            {/* Rear windshield */}
            <rect x="4" y="14" width="8" height="4" rx="1.5" fill="rgba(170,220,255,0.55)" />
            {/* Front headlights */}
            <circle cx="4.5" cy="4" r="1.8" fill="#ffe066" opacity="0.95" />
            <circle cx="11.5" cy="4" r="1.8" fill="#ffe066" opacity="0.95" />
            {/* Rear lights */}
            <circle cx="4.5" cy="24" r="1.5" fill="#ff4444" opacity="0.85" />
            <circle cx="11.5" cy="24" r="1.5" fill="#ff4444" opacity="0.85" />
            {/* Wheels */}
            <rect x="-1" y="5"  width="3.5" height="6" rx="1.5" fill="#1a1a1a" />
            <rect x="-1" y="17" width="3.5" height="6" rx="1.5" fill="#1a1a1a" />
            <rect x="13.5" y="5"  width="3.5" height="6" rx="1.5" fill="#1a1a1a" />
            <rect x="13.5" y="17" width="3.5" height="6" rx="1.5" fill="#1a1a1a" />
          </g>

          {/* Speed lines (only while moving) */}
          {moving && (
            <g>
              <motion.line
                x1="-12" y1="8" x2="-20" y2="12"
                stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" strokeLinecap="round"
                animate={{ opacity: [0.5, 0, 0.5], x1: [-10, -14, -10] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
              <motion.line
                x1="-9" y1="14" x2="-18" y2="17"
                stroke="rgba(255,255,255,0.28)" strokeWidth="1" strokeLinecap="round"
                animate={{ opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
              />
              <motion.line
                x1="12" y1="8" x2="20" y2="12"
                stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" strokeLinecap="round"
                animate={{ opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            </g>
          )}
        </motion.g>

        {/* ── Info bubble (always upright — NOT inside the rotating group) ── */}
        {showBubble && current && (
          <motion.g
            initial={{ opacity: 0, y: 12, scale: 0.75 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
            transition={{ type: 'spring', stiffness: 320, damping: 24 }}
          >
            {/* Drop shadow */}
            <rect x="14" y="-82" width="128" height="62" rx="10"
              fill="rgba(0,0,0,0.3)" transform="translate(2,3)" />
            {/* Bubble */}
            <rect x="14" y="-82" width="128" height="62" rx="10"
              fill="rgba(10,12,24,0.93)"
              stroke="rgba(255,153,51,0.55)" strokeWidth="1.2" />
            {/* Tail */}
            <polygon points="24,-20 34,-20 29,-13"
              fill="rgba(10,12,24,0.93)" />

            {/* Thumbnail */}
            <defs>
              <clipPath id={`tc-${activeIdx}`}>
                <rect x="20" y="-76" width="36" height="50" rx="6" />
              </clipPath>
            </defs>
            {current.img && (
              <image
                href={current.img}
                x="20" y="-76" width="36" height="50"
                preserveAspectRatio="xMidYMid slice"
                clipPath={`url(#tc-${activeIdx})`}
              />
            )}

            {/* Orange accent bar */}
            <rect x="64" y="-72" width="28" height="2" rx="1" fill="#ff9933" />

            {/* Name */}
            <text x="64" y="-62" fontSize="9.5" fontWeight="700"
              fill="#f0f0f6" fontFamily="DM Sans, sans-serif">
              {current.name}
            </text>

            {/* Day label */}
            <text x="64" y="-50" fontSize="8.5" fill="#ff9933"
              fontFamily="DM Sans, sans-serif" fontWeight="600">
              {current.day}
            </text>

            {/* Short description */}
            {current.desc && (
              <text x="64" y="-38" fontSize="7.2" fill="rgba(200,200,220,0.8)"
                fontFamily="DM Sans, sans-serif">
                {current.desc.slice(0, 30)}{current.desc.length > 30 ? '…' : ''}
              </text>
            )}
          </motion.g>
        )}

      </motion.g>
    </g>
  );
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

export default TravelCar;