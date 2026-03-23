import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Projects.css';

const projectsList = [
  {
    title: 'PantryPal AI',
    desc: 'AI-powered recipe app integrating Google Gemini 2.0 Flash for on-demand recipe generation and Spoonacular API for ingredient-based search.',
    tags: ['React 19', 'Vite', 'Gemini AI', 'Tailwind'],
    img: '/pantry_pal.png',
    github: 'https://github.com/WahidaAkhter/pantry-pal',
    live: 'https://pantry-pal-ai.netlify.app/',
  },
  {
    title: 'TurfMasterPro',
    desc: 'Scalable workspace automation platform with an intuitive booking system, streamlining operations and optimizing resource allocation.',
    tags: ['React.js', 'Node.js', 'SQL', 'REST APIs'],
    img: 'https://raw.githubusercontent.com/WahidaAkhter/TurfMasterPro/main/TurfMasterPro-main/public/images/screenshot_home.png',
    github: 'https://github.com/WahidaAkhter/TurfMasterPro',
    live: 'https://github.com/WahidaAkhter/TurfMasterPro',
  },
  {
    title: 'Artificer At Your Door',
    desc: 'Service-oriented Android app connecting customers with home maintenance professionals, enabling real-time booking and management.',
    tags: ['Java', 'Android SDK', 'Android Studio'],
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&h=700&auto=format&fit=crop',
    github: 'https://github.com/WahidaAkhter/Artificeratyourdoor',
    live: 'https://github.com/WahidaAkhter/Artificeratyourdoor',
  },
  {
    title: 'Panda Commerce',
    desc: 'A vibrant e-commerce site featuring a product carousel, shopping cart, responsive design, trust signals, and testimonials — built with pure HTML, CSS & JS.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    img: 'https://raw.githubusercontent.com/WahidaAkhter/Panda-Commerce-Site/main/screenshots/products.png',
    github: 'https://github.com/WahidaAkhter/Panda-Commerce-Site',
    live: 'https://wondrous-palmier-85c0bb.netlify.app/',
  },
];

const columns = [
  [projectsList[0], projectsList[3]],
  [projectsList[1]],
  [projectsList[2]],
];

const MasonryColumn = ({ projects, reverse }) => {
  // Duplicate for seamless infinite scroll
  const items = [...projects, ...projects, ...projects, ...projects];

  return (
    <div 
      className="scroll-column" 
      style={{ 
        height: '100%', 
        overflow: 'hidden', 
        position: 'relative', 
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)', 
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)', 
        minWidth: 0 
      }}
    >
      <div className={`scroll-track ${reverse ? 'reverse' : ''}`} style={{ animationDuration: '40s' }}>
        {items.map((p, i) => (
          <div key={`${p.title}-${i}`} className="masonry-item" onClick={() => window.open(p.live, '_blank')}>
            <img 
              src={p.img} 
              alt={p.title} 
              className="masonry-img"
            />
            <div className="masonry-overlay-bg">
              <div className="masonry-overlay-content">
                <div className="masonry-tags">
                  {p.tags.map((t) => <span key={t} className="masonry-tag">{t}</span>)}
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="masonry-actions">
                  <a href={p.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="masonry-btn">
                    GitHub ↗
                  </a>
                  <a href={p.live} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="masonry-btn masonry-btn-live">
                    Live ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="projects">
      <div className="section">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <span className="section-tag"><span className="star-spin">✦</span> My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Hover over the columns to pause the scroll and explore recent projects.
          </p>
        </motion.div>

        <motion.div
          className="masonry-wrapper"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="masonry-grid">
            <MasonryColumn projects={columns[0]} />
            <MasonryColumn projects={columns[1]} reverse />
            <MasonryColumn projects={columns[2]} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
