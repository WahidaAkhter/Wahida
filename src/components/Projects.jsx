import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './Projects.css';

const rows = [
  [
    {
      title: 'FinTrack Dashboard',
      desc: 'Real-time financial tracking SaaS with interactive charts, CSV import, and multi-currency support.',
      tags: ['React', 'Node.js', 'MongoDB'],
      img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=400&h=700&auto=format&fit=crop',
      github: 'https://github.com/WahidaAkhter',
      live: 'https://example.com',
    },
    {
      title: 'StyleAI',
      desc: 'AI-powered fashion recommendation engine that analyses wardrobe images and suggests outfits.',
      tags: ['Python', 'FastAPI', 'TensorFlow'],
      img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=400&h=700&auto=format&fit=crop',
      github: 'https://github.com/WahidaAkhter',
      live: 'https://example.com',
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
  ]
];

function GalleryRow({ projects, rowId }) {
  const [expandedIdx, setExpandedIdx] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const handleClick = (idx) => {
    setExpandedIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <div ref={ref} className={`gallery-wrapper${expandedIdx !== null ? ' has-expanded' : ''}`}>
      {projects.map((p, i) => (
        <motion.div
          key={p.title}
          className={`gallery-column${expandedIdx === i ? ' expanded' : ''}`}
          onClick={() => handleClick(i)}
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
        >
          <div className="gallery-link">
            <img src={p.img} alt={p.title} loading="lazy" />
            <div className="gallery-overlay">
              <div className="gallery-tags">
                {p.tags.map((t) => <span key={t} className="gallery-tag">{t}</span>)}
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="gallery-actions">
                <a href={p.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="gallery-btn">
                  GitHub ↗
                </a>
                <a href={p.live} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="gallery-btn gallery-btn-live">
                  Live ↗
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

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
            Hover to explore · click to lock · 6 featured projects.
          </p>
        </motion.div>

        <motion.div
          className="gallery-rows"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {rows.map((rowProjects, i) => (
            <GalleryRow key={i} projects={rowProjects} rowId={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
