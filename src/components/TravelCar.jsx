import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TravelCar = ({ itinerary }) => {
  const [activeStep, setActiveStep] = useState(0);

  const xCoords = itinerary.map(p => p.pos.x);
  const yCoords = itinerary.map(p => p.pos.y);

  return (
    <motion.g
      initial={{ x: xCoords[0], y: yCoords[0] }}
      animate={{ x: xCoords, y: yCoords }}
      transition={{ 
        duration: 10, // Adjust this for faster/slower travel
        ease: "linear"
      }}
      onUpdate={(latest) => {
        // Detects which destination the car is currently "visiting"
        const currentIndex = itinerary.findIndex(step => 
          Math.abs(latest.x - step.pos.x) < 5 && Math.abs(latest.y - step.pos.y) < 5
        );
        if (currentIndex !== -1) {
          setActiveStep(currentIndex);
        }
      }}
    >
      {/* Car Emoji */}
      <text fontSize="25" y="10" x="-10">🚗</text>

      {/* Destination Pop-up (Text & Image) */}
      <motion.g
        key={activeStep}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Bubble Background */}
        <rect x="15" y="-65" width="115" height="55" rx="8" fill="white" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))" />
        
        {/* Tiny Destination Thumbnail */}
        <image 
          href={itinerary[activeStep]?.img} 
          x="20" y="-60" 
          height="35" width="35" 
          preserveAspectRatio="xMidYMid slice"
        />
        
        {/* Name and Day label */}
        <text x="60" y="-45" fontSize="10" fontWeight="bold" fill="#333">
          {itinerary[activeStep]?.name}
        </text>
        <text x="60" y="-32" fontSize="9" fill="#ff9933" fontWeight="bold">
          {itinerary[activeStep]?.day}
        </text>
      </motion.g>
    </motion.g>
  );
};

export default TravelCar;