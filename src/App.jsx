import React, { useState, useRef } from 'react';
import IndianMap from './components/IndianMap';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // play() returns a promise; we catch errors if the browser blocks it
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.log("Playback blocked: ", err));
      }
    }
  };

  return (
    <div className="App">
      {/* 1. Add the missing Audio Element here */}
      <audio ref={audioRef} loop src="/audio/india-bgm.mp3" />

      <div className="bg-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="glow-sphere"></div>
      </div>

      <header>
        <div className="header-content">
          <h1 className="shimmer-text">Incredible India <span>IN</span></h1>
          <p>The Digital Heritage Explorer</p>
        </div>
      </header>
      
      <main>
        <IndianMap />

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
              <p>📍 Karnataka | Oct 2026</p>
              <p>Experience the "Nada Habba" with grand processions and a lit-up palace.</p>
            </div>
            <div className="event-card">
              <h3>Hampi Utsav</h3>
              <p>📍 Karnataka | Nov 2026</p>
              <p>A mega cultural extravaganza amidst the ruins of the Vijayanagara Empire.</p>
            </div>
          </section>

          <section className="glass-section">
            <h2>Recommended Itineraries</h2>
            <div className="plan-card">
              <h3>The Heritage Triangle</h3>
              <p>7 Days | Hampi - Badami - Pattadakal</p>
              <p>A deep dive into Chalukyan and Vijayanagara architectural marvels.</p>
            </div>
            <div className="plan-card">
              <h3>Southern Coast Explorer</h3>
              <p>5 Days | Gokarna - Murudeshwar - Mangalore</p>
              <p>Perfect blend of pristine beaches and spiritual monuments.</p>
            </div>
          </section>
        </motion.div>
      </main>

      {/* Music Toggle Button */}
      <button className="music-toggle" onClick={toggleMusic}>
        {isPlaying ? '🎵' : '🔇'}
      </button>
    </div>
  );
}

export default App;