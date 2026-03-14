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

  const firstName = "Wahida";
  const lastName = "Akhter";
  
  const containerVars = {
    exit: {
      opacity: 0,
      filter: 'blur(30px)',
      scale: 1.1,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const letterVars = {
    initial: { opacity: 0, y: 15, filter: 'blur(10px)' },
    animate: i => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        delay: 0.4 + i * 0.08,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={containerVars}
          initial={{ opacity: 1 }}
          exit="exit"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#052B24', // Dark background (Forest Night) for intro
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div style={{ display: 'flex', gap: '0.3em' }}>
              {firstName.split("").map((char, i) => (
                <motion.span
                  key={`first-${i}`}
                  custom={i}
                  variants={letterVars}
                  initial="initial"
                  animate="animate"
                  style={{
                    fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    display: 'inline-block',
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '0.3em' }}>
              {lastName.split("").map((char, i) => (
                <motion.span
                  key={`last-${i}`}
                  custom={i + firstName.length}
                  variants={letterVars}
                  initial="initial"
                  animate="animate"
                  style={{
                    fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                    fontWeight: 800,
                    color: '#00FF85', // Accent color for last name
                    display: 'inline-block',
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
