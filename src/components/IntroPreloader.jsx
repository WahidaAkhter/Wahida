import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroPreloader({ onComplete }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => {
        document.body.style.overflow = '';
        onComplete && onComplete();
      }, 1000); // Wait for exit animation
    }, 3200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const fullName = "Wahida Akhter";
  
  const containerVars = {
    exit: {
      y: "-100%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    }
  };

  const letterVars = {
    initial: { 
      opacity: 0, 
      scale: 1.1, 
      filter: 'blur(10px)' 
    },
    animate: i => ({
      opacity: 1, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: {
        delay: 0.5 + i * 0.05,
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1] // Custom springy cubic-bezier
      }
    }),
    exit: i => ({
      opacity: 0,
      scale: 0.9,
      filter: 'blur(10px)',
      transition: {
        delay: i * 0.02,
        duration: 0.4
      }
    })
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={containerVars}
          initial={{ y: 0 }}
          exit="exit"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#080d14',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ display: 'flex', gap: '0.1em' }}>
            {fullName.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVars}
                initial="initial"
                animate="animate"
                exit="exit"
                style={{
                  fontSize: 'clamp(2.5rem, 10vw, 5.5rem)',
                  fontWeight: 900,
                  color: char === ' ' ? 'transparent' : (i > 6 ? '#00FF85' : '#FFFFFF'),
                  display: 'inline-block',
                  whiteSpace: 'pre',
                  letterSpacing: '-0.02em',
                  fontFamily: "'Outfit', sans-serif"
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
