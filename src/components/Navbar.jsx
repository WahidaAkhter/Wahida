import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, FolderKanban, Cpu, Briefcase, Mail } from 'lucide-react';
import './Navbar.css';

const links = [
  { id: 'hero',     icon: Home,           label: 'Home' },
  { id: 'projects', icon: FolderKanban,   label: 'Projects' },
  { id: 'skills',   icon: Cpu,            label: 'Skills' },
  { id: 'about',    icon: Briefcase,      label: 'About' },
  { id: 'contact',  icon: Mail,           label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('hero');

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
  };

  return (
    <motion.nav
      className="navbar-dock"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {links.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={`dock-btn ${active === id ? 'active' : ''}`}
          title={label}
        >
          <Icon size={20} />
          <span className="dock-label">{label}</span>
          {active === id && (
            <motion.div
              className="dock-indicator"
              layoutId="indicator"
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            />
          )}
        </button>
      ))}
    </motion.nav>
  );
}
