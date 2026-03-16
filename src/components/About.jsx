import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

const timeline = [
  { 
    year: '2025–Present', 
    role: 'Master of Information Technology (MIT)', 
    company: 'Dhaka University', 
    desc: 'Institute of Information Technology (IIT). Focusing on advanced software engineering and information systems.' 
  },
  { 
    year: 'July 2025 – Sep 2025', 
    role: 'Software Developer Intern', 
    company: 'Alwaysblue', 
    desc: 'Engineered 10+ responsive UI components and developed RESTful APIs in an agile team environment.' 
  },
  { 
    year: 'Completed 2025', 
    role: 'BSc in Computer Science & Engineering', 
    company: 'National University', 
    desc: 'Graduated with a CGPA of 3.47/4.00, building a strong foundation in core computer science concepts.' 
  },
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
            <h2 className="section-title">Bridging Code<br />&amp; Innovation</h2>
            <p className="section-subtitle" style={{ marginBottom: 20 }}>
              I'm a Master's student at the Institute of Information Technology, <strong>Dhaka University</strong>. 
              With a background in Computer Science & Engineering, I have hands-on experience in 
              full-stack web development, Android development, and AI-powered applications.
            </p>
            <p className="section-subtitle">
              I'm proficient in React.js, Node.js, and Java, always striving to build impactful solutions 
              that solve real-world problems through clean code and intuitive design.
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
