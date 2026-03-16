import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Projects.css';

const projectsList = [
  {
    title: 'Pantry Pal AI',
    desc: 'Smart recipe generator that helps you cook smarter and reduce food waste with what you already have.',
    tags: ['React', 'AI', 'Tailwind'],
    img: '/pantry_pal.png',
    github: 'https://github.com/WahidaAkhter/pantry-pal',
    live: 'https://pantry-pal-ai.netlify.app/',
  },
  {
    title: 'TurfMasterPro',
    desc: 'Comprehensive turf management application for booking, scheduling, and tracking sports field activities.',
    tags: ['React', 'Tailwind', 'Node.js'],
    img: '/turfmasterpro.png',
    github: 'https://github.com/WahidaAkhter/TurfMasterPro',
    live: 'https://github.com/WahidaAkhter/TurfMasterPro',
  },
  {
    title: 'DevBoard',
    desc: 'Integrated project management for developers with Kanban boards, CI metrics, and Slack alerting.',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL'],
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&h=700&auto=format&fit=crop',
    github: 'https://github.com/WahidaAkhter',
    live: 'https://example.com',
  },
  {
    title: 'EduStream',
    desc: 'Live classroom platform with video streaming, real-time chat, whiteboard, and quiz features.',
    tags: ['WebRTC', 'Socket.io', 'React'],
    img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=400&h=700&auto=format&fit=crop',
    github: 'https://github.com/WahidaAkhter',
    live: 'https://example.com',
  },
  {
    title: 'ShopSense',
    desc: 'E-commerce platform with AI search, personalised recommendations, and one-click checkout.',
    tags: ['Next.js', 'Stripe', 'Elasticsearch'],
    img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=400&h=700&auto=format&fit=crop',
    github: 'https://github.com/WahidaAkhter',
    live: 'https://example.com',
  },
  {
    title: 'NightOwl Blog',
    desc: 'SEO-optimised markdown blog with dark theme toggle, reading-time estimates, and a comment system.',
    tags: ['Astro', 'Tailwind', 'Sanity CMS'],
    img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=400&h=700&auto=format&fit=crop',
    github: 'https://github.com/WahidaAkhter',
    live: 'https://example.com',
  },
];

const columns = [
  [projectsList[0], projectsList[3]],
  [projectsList[1], projectsList[4]],
  [projectsList[2], projectsList[5]],
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
