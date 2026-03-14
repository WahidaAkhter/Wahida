import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, FolderOpen, Wrench, Briefcase, PenLine, Mail } from 'lucide-react';
import './Navbar.css';

const links = [
  { id: 'hero',     icon: Home,        label: 'Home' },
  { id: 'projects', icon: FolderOpen,  label: 'Projects' },
  { id: 'skills',   icon: Wrench,      label: 'Skills' },
  { id: 'about',    icon: Briefcase,   label: 'About' },
  { id: 'contact',  icon: Mail,        label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('hero');
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.45 }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
  };

  return (
    <motion.nav
      className="navbar-dock"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {links.map(({ id, icon: Icon, label }) => (
        <div key={id} className="dock-item-wrap">
          <button
            onClick={() => scrollTo(id)}
            onMouseEnter={() => setTooltip(id)}
            onMouseLeave={() => setTooltip(null)}
            className={`dock-btn ${active === id ? 'active' : ''}`}
            aria-label={label}
          >
            {active === id && (
              <motion.div
                className="dock-active-bg"
                layoutId="dock-active-bg"
                transition={{ type: 'spring', stiffness: 400, damping: 34 }}
              />
            )}
            <Icon size={20} strokeWidth={1.8} />
          </button>

          <AnimatePresence>
            {tooltip === id && (
              <motion.div
                className="dock-tooltip"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.15 }}
              >
                {label}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.nav>
  );
}
