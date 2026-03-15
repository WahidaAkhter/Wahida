import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

const timeline = [
  { year: '2024–Present', role: 'Full-Stack Developer', company: 'Freelance', desc: 'Building custom web apps for clients across Europe and North America.' },
  { year: '2022–2024', role: 'Frontend Engineer', company: 'TechFusion Ltd', desc: 'Led UI development for a SaaS dashboard used by 10k+ users.' },
  { year: '2020–2022', role: 'Junior Developer', company: 'PixelBridge Agency', desc: 'Built responsive websites and e-commerce solutions for local businesses.' },
];

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      className="timeline-item"
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12 }}
    >
      <div className="timeline-dot" />
      <div className="timeline-content">
        <span className="timeline-year">{item.year}</span>
        <h3 className="timeline-role">{item.role}</h3>
        <span className="timeline-company">{item.company}</span>
        <p className="timeline-desc">{item.desc}</p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about">
      <div className="section">
        <div className="about-grid">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <span className="section-tag"><span className="star-spin">✦</span> About Me</span>
            <h2 className="section-title">Passionate about<br />Building &amp; Design</h2>
            <p className="section-subtitle" style={{ marginBottom: 20 }}>
              I'm a full-stack developer with a love for crafting beautiful digital experiences.
              I bridge the gap between design and engineering, ensuring every product I build
              is both visually polished and technically robust.
            </p>
            <p className="section-subtitle">
              When I'm not coding, you'll find me exploring UI trends, reading about machine
              learning, or enjoying a good cup of chai ☕.
            </p>
          </motion.div>

          <div className="timeline">
            {timeline.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
