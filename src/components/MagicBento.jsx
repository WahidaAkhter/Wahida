import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import './MagicBento.css';

const MagicBento = ({
  children,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  spotlightRadius = 400,
  particleCount = 12,
  glowColor = "132, 0, 255",
  disableAnimations = false,
  className = ""
}) => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlightBg = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(${spotlightRadius}px circle at ${x}px ${y}px, rgba(${glowColor}, 0.15), transparent 80%)`
  );

  const borderBg = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(${spotlightRadius / 2}px circle at ${x}px ${y}px, rgba(${glowColor}, 0.5), transparent 80%)`
  );

  // Stars/Particles Implementation - Use lazy initializer to avoid effect warning
  const [particles, setParticles] = useState(() => {
    if (!enableStars) return [];
    return Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
  });

  // Keep particles in sync only if count changes
  useEffect(() => {
    if (enableStars && particles.length !== particleCount) {
      setParticles(Array.from({ length: particleCount }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2
      })));
    }
  }, [enableStars, particleCount, particles.length]);

  return (
    <div 
      ref={containerRef}
      className={`magic-bento-container ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Border Glow */}
      {enableBorderGlow && (
        <motion.div 
          className="magic-bento-border"
          style={{ background: borderBg }}
        />
      )}

      {/* Spotlight effect */}
      {enableSpotlight && (
        <motion.div 
          className="magic-bento-spotlight"
          style={{ background: spotlightBg }}
        />
      )}

      {/* Stars/Particles Background */}
      {enableStars && !disableAnimations && (
        <div className="magic-bento-stars">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="star"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.8, 0],
                y: [0, -20, 0]
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "easeInOut"
              }}
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                background: `rgba(${glowColor}, 0.6)`,
                boxShadow: `0 0 10px rgba(${glowColor}, 0.4)`
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="magic-bento-content">
        {children}
      </div>
    </div>
  );
};

export default MagicBento;
