import React, { useState, useRef, useEffect } from 'react';
import IndianMap from './components/IndianMap';
import FeatureGrid from './components/FeatureGrid';
import ThemedTours from './components/ThemedTours';
import PromoBanner from './components/PromoBanner';
import { motion } from 'framer-motion';
import './App.css';

/* ── Floating Particles ── */
const Particles = () => {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const colors = ['#ff9933', '#138808', 'rgba(255,255,255,0.8)', '#ff9933', '#ff9933'];
    const particles = Array.from({ length: 20 }, () => {
      const el = document.createElement('div');
      el.className = 'particle';
      const size = Math.random() * 4 + 1.5;
      el.style.cssText = `
        width:${size}px; height:${size}px;
        left:${Math.random() * 100}%;
        background:${colors[Math.floor(Math.random() * colors.length)]};
        opacity:${Math.random() * 0.45 + 0.1};
        animation-duration:${Math.random() * 16 + 10}s;
        animation-delay:${Math.random() * 10}s;
      `;
      container.appendChild(el);
      return el;
    });
    return () => particles.forEach(p => p.remove());
  }, []);

  return <div ref={ref} style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }} />;
};

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log('Playback blocked:', err));
    }
  };

  return (
    <div className="App">
      <audio ref={audioRef} loop src="/audio/india-bgm.mp3" />

      {/* Background */}
      <div className="bg-container">
        <div className="glow-sphere" />
      </div>

      {/* Particles */}
      <Particles />

      {/* Header */}
      <header>
        <span className="header-flag">🇮🇳</span>
        <div className="header-content">
          <h1 className="shimmer-text">
            Incredible India <span>IN</span>
          </h1>
          <p className="header-subtitle">The Digital Heritage Explorer</p>
        </div>
        <div className="header-hint">
          <div className="hint-dot" />
          Click any state to explore
        </div>
      </header>

      <main>
        {/* Interactive Map */}
        <IndianMap />

        {/* Scroll content below map */}
        <motion.div
          className="content-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FeatureGrid />
          <ThemedTours />
          <PromoBanner />
        </motion.div>
      </main>

      {/* Music Toggle */}
      <button
        className={`music-toggle ${isPlaying ? 'playing' : ''}`}
        onClick={toggleMusic}
        title={isPlaying ? 'Pause music' : 'Play ambient music'}
      >
        {isPlaying ? '🎵' : '🔇'}
      </button>
    </div>
  );
}

export default App;