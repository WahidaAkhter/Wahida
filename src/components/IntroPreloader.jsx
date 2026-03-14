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
      }, 900);
    }, 2600);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const words = ['Wahida', 'Akhter'];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <div style={{ overflow: 'hidden' }}>
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                fontWeight: 700,
                color: '#1A1A1B',
                letterSpacing: '-0.03em',
                display: 'flex',
                gap: '0.4em',
              }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 + i * 0.12 }}
                  style={{ display: 'inline-block', color: i === 1 ? '#00FF85' : '#1A1A1B' }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            style={{ color: '#717172', fontSize: '1rem', letterSpacing: '0.2em' }}
          >
            Portfolio ✦ 2025
          </motion.p>
          {/* Loading bar */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              height: '3px',
              background: 'linear-gradient(90deg, #00FF85, #052B24)',
              originX: 0,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.4, ease: 'linear' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
