import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Animated count-up number ── */
const CountUp = ({ end, suffix = '' }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let n = 0;
    const step = Math.ceil(end / 36);
    const id = setInterval(() => {
      n = Math.min(n + step, end);
      setVal(n);
      if (n >= end) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, [end]);
  return <>{val.toLocaleString()}{suffix}</>;
};

const TABS = ['Gallery', 'Facts', 'Itinerary'];

const InfoCard = ({ state, onStartTrip, onClose }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [tab, setTab]       = useState('Gallery');
  const [liked, setLiked]   = useState(false);
  const [likeN, setLikeN]   = useState(() => Math.floor(Math.random() * 600 + 200));

  useEffect(() => {
    setImgIdx(0);
    setTab('Gallery');
    setLiked(false);
  }, [state?.id]);

  if (!state) return null;

  const places    = state.places    ?? [];
  const moreFacts = state.moreFacts ?? [];
  const itinerary = state.itinerary ?? [];

  const next = () => setImgIdx(i => (i + 1) % places.length);
  const prev = () => setImgIdx(i => (i - 1 + places.length) % places.length);

  const toggleLike = () => {
    setLikeN(n => liked ? n - 1 : n + 1);
    setLiked(l => !l);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={state.id}
        className="info-card"
        initial={{ x: 400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 400, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
      >
        {/* ── Header ── */}
        <div className="card-header">
          <div className="state-badge">
            <span className="badge-dot" />
            Exploring
          </div>
          <div className="state-title">{state.name}</div>
          <div className="card-actions">
            <motion.button
              className={`icon-btn like-btn ${liked ? 'liked' : ''}`}
              onClick={toggleLike}
              whileTap={{ scale: 1.3 }}
            >
              {liked ? '❤️' : '🤍'} <span>{likeN}</span>
            </motion.button>
            <motion.button
              className="icon-btn"
              onClick={onClose}
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.18 }}
              aria-label="Close"
            >
              ✕
            </motion.button>
          </div>
        </div>

        {/* ── Stats Strip ── */}
        <div className="stats-strip">
          {[
            { icon: '🏛️', label: 'Places',   val: places.length, suffix: '' },
            { icon: '📍', label: 'Distance', val: state.stats?.distance ?? 380, suffix: ' km' },
            { icon: '☀️', label: 'Season',   text: state.stats?.season ?? 'Oct–Mar' },
          ].map((s, i) => (
            <div key={i} className="stat-chip">
              <span className="stat-icon">{s.icon}</span>
              <div>
                <div className="stat-val">
                  {s.text ? s.text : <CountUp end={s.val} suffix={s.suffix} />}
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Tabs ── */}
        <div className="tab-row">
          {TABS.map(t => (
            <button
              key={t}
              className={`tab-btn ${tab === t ? 'active' : ''}`}
              onClick={() => setTab(t)}
            >
              {t}
              {tab === t && (
                <motion.div
                  className="tab-underline"
                  layoutId="tab-underline"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* ── Tab Content ── */}
        <div className="tab-content">
          <AnimatePresence mode="wait">

            {/* GALLERY */}
            {tab === 'Gallery' && (
              <motion.div
                key="gallery"
                className="gallery-panel"
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -14 }}
                transition={{ duration: 0.2 }}
              >
                {/* Image frame */}
                <div className="img-frame">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={imgIdx}
                      className="img-container"
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.28 }}
                    >
                      {places[imgIdx]?.img && (
                        <img src={places[imgIdx].img} alt={places[imgIdx].name} />
                      )}
                      <div className="img-gradient" />
                      <div className="img-caption">
                        <h3>{places[imgIdx]?.name}</h3>
                        <p>{places[imgIdx]?.desc}</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Dot indicators */}
                  <div className="dot-indicators">
                    {places.map((_, i) => (
                      <button
                        key={i}
                        className={`dot-btn ${i === imgIdx ? 'active' : ''}`}
                        onClick={() => setImgIdx(i)}
                      />
                    ))}
                  </div>
                </div>

                {/* Prev / Next arrows — always visible */}
                <div className="slide-nav">
                  <motion.button
                    className="nav-arrow"
                    onClick={prev}
                    whileHover={{ x: -3 }}
                    whileTap={{ scale: 0.88 }}
                  >
                    ←
                  </motion.button>
                  <span className="nav-counter">{imgIdx + 1} / {places.length}</span>
                  <motion.button
                    className="nav-arrow"
                    onClick={next}
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.88 }}
                  >
                    →
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* FACTS */}
            {tab === 'Facts' && (
              <motion.div
                key="facts"
                className="facts-panel"
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -14 }}
                transition={{ duration: 0.2 }}
              >
                <ul className="facts-list">
                  {moreFacts.map((f, i) => (
                    <motion.li
                      key={i}
                      className="fact-item"
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <span className="fact-num">{String(i + 1).padStart(2, '0')}</span>
                      <span>{f}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* ITINERARY */}
            {tab === 'Itinerary' && (
              <motion.div
                key="itinerary"
                className="itinerary-panel"
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -14 }}
                transition={{ duration: 0.2 }}
              >
                <div className="timeline">
                  {itinerary.map((stop, i) => (
                    <motion.div
                      key={i}
                      className="timeline-item"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.09 }}
                    >
                      <div className="timeline-dot">{i + 1}</div>
                      <div className="timeline-connector" />
                      <div className="timeline-content">
                        <div className="timeline-day">{stop.day}</div>
                        <div className="timeline-place">{stop.name}</div>
                        {stop.img && (
                          <img src={stop.img} alt={stop.name} className="timeline-thumb" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* ── CTA ── */}
        <motion.button
          className="trip-btn"
          onClick={onStartTrip}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.5 }}
          >
            🚗
          </motion.span>
          &nbsp;Start Car Journey
          <span className="btn-shimmer" />
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

export default InfoCard;
