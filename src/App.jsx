import React, { useState, useRef, useEffect } from 'react';
import IndianMap from './components/IndianMap';
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
          <section className="glass-section">
            <h2>Upcoming Cultural Events</h2>
            <div className="event-card">
              <h3>Mysore Dasara</h3>
              <p>📍 Karnataka &nbsp;|&nbsp; Oct 2026</p>
              <p>Experience the "Nada Habba" with grand processions and a lit-up palace.</p>
            </div>
            <div className="event-card">
              <h3>Hampi Utsav</h3>
              <p>📍 Karnataka &nbsp;|&nbsp; Nov 2026</p>
              <p>A mega cultural extravaganza amidst the ruins of the Vijayanagara Empire.</p>
            </div>
            <div className="event-card">
              <h3>Hyderabad Biryani Festival</h3>
              <p>📍 Telangana &nbsp;|&nbsp; Dec 2026</p>
              <p>A culinary celebration of the iconic Hyderabadi dum biryani.</p>
            </div>
          </section>

          <section className="glass-section">
            <h2>Recommended Itineraries</h2>
            <div className="plan-card">
              <h3>The Heritage Triangle</h3>
              <p>7 Days &nbsp;|&nbsp; Hampi › Badami › Pattadakal</p>
              <p>A deep dive into Chalukyan and Vijayanagara architectural marvels.</p>
            </div>
            <div className="plan-card">
              <h3>Southern Coast Explorer</h3>
              <p>5 Days &nbsp;|&nbsp; Gokarna › Murudeshwar › Mangalore</p>
              <p>Perfect blend of pristine beaches and spiritual monuments.</p>
            </div>
            <div className="plan-card">
              <h3>Temple Trail of Tamil Nadu</h3>
              <p>6 Days &nbsp;|&nbsp; Chennai › Madurai › Rameshwaram</p>
              <p>Explore the grandeur of ancient Dravidian architecture.</p>
            </div>
          </section>
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