import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const contactList = [
    { label: 'Email', value: 'wahidacse280@gmail.com', href: 'mailto:wahidacse280@gmail.com' },
    { label: 'Location', value: 'Dhaka, Bangladesh', href: null },
    { label: 'LinkedIn', value: 'linkedin.com/in/wahida-akhter', href: 'https://linkedin.com/in/wahida-akhter' },
    { label: 'Github', value: 'github.com/WahidaAkhter', href: 'https://github.com/WahidaAkhter' },
    { label: 'Past Role', value: 'Software Developer Intern · Alwaysblue (2025)', href: null },
  ];

  return (
    <section id="contact" className="baku-contact-wrapper">
      <div className="section">
        <div className="baku-grid">
          {/* Left Column */}
          <motion.div 
            className="baku-left"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            ref={ref}
          >
            <span className="section-tag"><span className="star-spin">✦</span> Contact</span>
            <h2 className="baku-title">Let's <span>connect.</span></h2>
            <p className="baku-desc">
              Open to new engineering roles, research collaborations, and exciting 
              opportunities in software development. Whether you're hiring, 
              researching, or just want to talk tech — I'd love to hear from you.
            </p>
            <a href="mailto:wahidacse280@gmail.com" className="baku-btn">
              SEND AN EMAIL <ArrowUpRight size={18} />
            </a>
          </motion.div>

          {/* Right Column */}
          <div className="baku-right">
            {contactList.map((item, index) => (
              <motion.div 
                key={item.label}
                className="baku-item"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <span className="baku-label">{item.label}</span>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer" className="baku-value link">
                    {item.value} <ArrowUpRight size={14} className="baku-mini-arrow" />
                  </a>
                ) : (
                  <span className="baku-value">{item.value}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Watermark */}
        <div className="baku-watermark">HELLO</div>
      </div>
    </section>
  );
}
