import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const destinations = [
  { id: 1, name: 'Jaipur', state: 'Rajasthan', img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80', desc: 'The Pink City' },
  { id: 2, name: 'Varanasi', state: 'Uttar Pradesh', img: 'https://images.unsplash.com/photo-1561361513248-9c01d1f0bb50?auto=format&fit=crop&w=800&q=80', desc: 'Spiritual Capital' },
  { id: 3, name: 'Munnar', state: 'Kerala', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0e0b69?auto=format&fit=crop&w=800&q=80', desc: 'Tea Gardens' },
  { id: 4, name: 'Leh', state: 'Ladakh', img: 'https://images.unsplash.com/photo-1623547053597-9092fc51bbd3?auto=format&fit=crop&w=800&q=80', desc: 'High Desert City' },
  { id: 5, name: 'Hampi', state: 'Karnataka', img: 'https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?auto=format&fit=crop&w=800&q=80', desc: 'Ancient Ruins' }
];

const FeatureGrid = () => {
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <motion.section 
      className="glass-section full-width-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="section-header">
        <h2>Destinations For You</h2>
        <div className="scroll-hint">Drag to explore →</div>
      </div>
      
      <div 
        className="feature-slider"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {destinations.map(dest => (
          <motion.div 
            key={dest.id} 
            className="destination-card"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="dest-img-wrapper">
              <img src={dest.img} alt={dest.name} draggable="false" />
              <div className="dest-overlay"></div>
            </div>
            <div className="dest-info">
              <h3>{dest.name}</h3>
              <p className="dest-state">📍 {dest.state}</p>
              <p className="dest-desc">{dest.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FeatureGrid;
