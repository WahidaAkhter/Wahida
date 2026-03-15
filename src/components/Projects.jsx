import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: 'FinTrack Dashboard',
    desc: 'A real-time financial tracking SaaS with interactive charts, CSV import, and multi-currency support.',
    tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    color: '#7c3aed',
    github: 'https://github.com/WahidaAkhter',
    live: 'https://example.com',
  },
  {
    title: 'StyleAI',
    desc: 'AI-powered fashion recommendation engine that analyzes wardrobe images and suggests outfits.',
    tags: ['Python', 'FastAPI', 'TensorFlow', 'React'],
    color: '#0ea5e9',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'DevBoard',
    desc: 'An integrated project management tool for developers with Kanban boards, CI metrics, and Slack alerting.',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL', 'Redis'],
    color: '#f59e0b',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'EduStream',
    desc: 'Live classroom platform with video streaming, real-time chat, whiteboard, and quiz features.',
    tags: ['WebRTC', 'Socket.io', 'React', 'AWS'],
    color: '#10b981',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'ShopSense',
    desc: 'E-commerce platform with an AI search engine, personalized recommendations and one-click checkout.',
    tags: ['Next.js', 'Stripe', 'Elasticsearch', 'Redis'],
    color: '#ec4899',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'NightOwl Blog',
    desc: 'A fully SEO-optimized markdown blog with dark theme toggle, reading time, and comment system.',
    tags: ['Astro', 'Tailwind', 'Sanity CMS'],
    color: '#8b5cf6',
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
    >
      {/* Color bar */}
      <div className="project-bar" style={{ background: project.color }} />

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>

        <div className="project-tags">
          {project.tags.map((t) => (
            <span key={t} className="project-tag">{t}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer" className="proj-link">
            <Github size={15} /> Code
          </a>
          <a href={project.live} target="_blank" rel="noreferrer" className="proj-link proj-link-live">
            <ExternalLink size={15} /> Live
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="projects" style={{ background: 'rgba(255,255,255,0.012)' }}>
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
            A selection of things I've built — from SaaS products to open-source tools.
          </p>
        </motion.div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
