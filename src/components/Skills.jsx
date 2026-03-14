import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Skills.css';

const skillGroups = [
  {
    category: 'Frontend',
    color: '#7c3aed',
    skills: ['React', 'Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'GSAP'],
  },
  {
    category: 'Backend',
    color: '#0ea5e9',
    skills: ['Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Database',
    color: '#10b981',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma', 'Supabase'],
  },
  {
    category: 'DevOps & Tools',
    color: '#f59e0b',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux', 'Figma'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="skills">
      <div className="section">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <span className="section-tag">✦ Skills</span>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-subtitle">
            Tools and technologies I work with on a daily basis.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, gi) => {
            const groupRef = useRef(null);
            const groupInView = useInView(groupRef, { once: true, margin: '-40px' });
            return (
              <motion.div
                key={group.category}
                ref={groupRef}
                className="skill-group"
                initial={{ opacity: 0, y: 30 }}
                animate={groupInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: gi * 0.1 }}
              >
                <div className="skill-group-header">
                  <span className="skill-dot" style={{ background: group.color }} />
                  <h3 className="skill-category">{group.category}</h3>
                </div>
                <div className="skill-tags">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={groupInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: gi * 0.1 + si * 0.05 }}
                      style={{ '--skill-color': group.color }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
