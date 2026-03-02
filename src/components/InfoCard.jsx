import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InfoCard = ({ state, onStartTrip, onClose }) => {
  const [index, setIndex] = useState(0);
  const [showFacts, setShowFacts] = useState(false);

  useEffect(() => {
    setIndex(0);
    setShowFacts(false);
  }, [state?.id]);

  if (!state) return null;

  const nextCard = () => setIndex((prev) => (prev + 1) % state.places.length);
  const prevCard = () => setIndex((prev) => (prev - 1 + state.places.length) % state.places.length);

  // Animation variants for the facts list
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <motion.div 
      className="info-card glass-panel" 
      initial={{ x: 400, opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 400, opacity: 0 }}
    >
      <button className="close-btn" onClick={onClose}>×</button>
      <h2 className="state-title">{state.name}</h2>
      
      {!showFacts ? (
        <>
          <div className="slider-container">
            <AnimatePresence mode="wait">
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 1.1 }}
                className="place-slide"
              >
                <div className="img-wrapper">
                  <img src={state.places[index].img} alt={state.places[index].name} />
                  <div className="img-overlay"></div>
                </div>
                <h3>{state.places[index].name}</h3>
                <p className="place-desc">{state.places[index].desc}</p>
              </motion.div>
            </AnimatePresence>
            <div className="slider-controls">
              <button className="nav-btn" onClick={prevCard}>←</button>
              <span className="counter">{index + 1} / {state.places.length}</span>
              <button className="nav-btn" onClick={nextCard}>→</button>
            </div>
          </div>
          <button className="action-btn secondary" onClick={() => setShowFacts(true)}>
            Discover More Facts ✨
          </button>
        </>
      ) : (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible" 
          className="facts-section"
        >
          <h3>Did You Know?</h3>
          <ul>
            {state.moreFacts.map((f, i) => (
              <motion.li key={i} variants={itemVariants}>{f}</motion.li>
            ))}
          </ul>
          <button className="action-btn secondary" onClick={() => setShowFacts(false)}>
            View Gallery ⬅️
          </button>
        </motion.div>
      )}

      <button className="action-btn primary trip-trigger" onClick={onStartTrip}>
        Start Car Journey 🚗
      </button>
    </motion.div>
  );
};

export default InfoCard;