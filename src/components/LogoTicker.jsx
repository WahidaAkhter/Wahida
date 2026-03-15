import React from 'react';
import { motion } from 'framer-motion';
import './LogoTicker.css';

const LogoTicker = ({ items }) => {
  // Duplicate items to ensure smooth infinite loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="ticker-wrap">
      <div className="ticker-header">
        <p className="ticker-label">Trusted Technologies</p>
      </div>
      
      <div className="ticker-container">
        {/* Cinematic Gradient Edges */}
        <div className="ticker-overlay-left" />
        <div className="ticker-overlay-right" />

        <motion.div 
          className="ticker-track"
          animate={{
            x: ["0%", "-50%"], 
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div key={index} className="ticker-item">
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoTicker;
