import { motion } from 'framer-motion';
import { MapPin, Github, Linkedin, Twitter, ArrowRight, MessageCircle } from 'lucide-react';
import './Hero.css';

const stats = [
  { value: '+3', label: 'Years Experience' },
  { value: '+15', label: 'Projects Done' },
  { value: '+10', label: 'Happy Clients' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-glow" />
      <div className="hero-inner">

        {/* Left — Profile Card */}
        <motion.div className="profile-card" {...fadeUp(0.1)}>
          <div className="avatar-ring">
            <img src="/profile.png" alt="Wahida Akhter" className="avatar-img" />
            <span className="available-dot" title="Available for work" />
          </div>
          <h2 className="profile-name">Wahida Akhter</h2>
          <p className="profile-role">Full-Stack Developer</p>
          <div className="profile-location">
            <MapPin size={14} />
            <span>Dhaka, Bangladesh</span>
          </div>
          <div className="profile-divider" />
          <div className="profile-stats">
            {stats.map(({ value, label }) => (
              <div key={label} className="profile-stat">
                <span className="stat-value">{value}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
          <div className="profile-socials">
            {[
              { Icon: Github,   href: 'https://github.com' },
              { Icon: Linkedin, href: 'https://linkedin.com' },
              { Icon: Twitter,  href: 'https://twitter.com' },
            ].map(({ Icon, href }) => (
              <a key={href} href={href} target="_blank" rel="noreferrer" className="social-icon">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right — Headline */}
        <div className="hero-copy">
          <motion.span className="section-tag" {...fadeUp(0.15)}>
            ✦ Available for Projects
          </motion.span>
          <motion.h1 className="hero-heading" {...fadeUp(0.22)}>
            Transforming Your Ideas<br /> into{' '}
            <span className="hero-accent">Reality</span>
          </motion.h1>
          <motion.p className="hero-sub" {...fadeUp(0.3)}>
            I craft beautiful, performant digital experiences — from elegant front-ends to
            robust back-end systems. Passionate about design and clean code.
          </motion.p>
          <motion.div className="hero-ctas" {...fadeUp(0.38)}>
            <a href="#contact" className="btn-primary">
              <MessageCircle size={17} /> Let's Talk
            </a>
            <a href="#projects" className="btn-outline">
              My Work <ArrowRight size={17} />
            </a>
          </motion.div>

          {/* Decorative skill tags */}
          <motion.div className="hero-tags" {...fadeUp(0.46)}>
            {['React', 'Node.js', 'TypeScript', 'Figma', 'Python', 'MongoDB'].map((t) => (
              <span key={t} className="hero-tag">{t}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
