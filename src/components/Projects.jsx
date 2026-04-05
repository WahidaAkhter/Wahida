import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import './Projects.css';

const projectsList = [
  {
    title: 'AI Agent Builder',
    desc: 'A dynamic, drag-and-drop interface engineered to build custom AI personalities, utilizing Zustand for scalable global state management and Framer Motion for highly fluid micro-interactions.',
    tags: ['React 18+', 'TypeScript', 'Zustand', 'dnd-kit'],
    img: '/ai_agent_builder.png',
    github: 'https://github.com/WahidaAkhter/ai-agent-builder',
    live: 'https://github.com/WahidaAkhter/ai-agent-builder',
  },
  {
    title: 'PantryPal AI',
    desc: 'AI-powered recipe app integrating Google Gemini 2.0 Flash for on-demand recipe generation and Spoonacular API for ingredient-based search.',
    tags: ['React 19', 'Vite', 'Gemini AI', 'Tailwind'],
    img: '/pantry_pal.png',
    github: 'https://github.com/WahidaAkhter/pantry-pal',
    live: 'https://pantry-pal-ai.netlify.app/',
  },
  {
    title: 'Bangalore Convention Center',
    desc: 'An elegant and fully responsive event venue landing page featuring clean layouts, beautiful imagery, and custom subscriptions built entirely with semantic HTML5 and vanilla CSS3.',
    tags: ['HTML5', 'CSS3', 'Responsive', 'Landing Page'],
    img: '/bangalore_convention_center.png',
    github: 'https://github.com/WahidaAkhter/bangalore-convention-center',
    live: 'https://wahidaakhter.github.io/bangalore-convention-center/',
  },
  {
    title: 'Rent A Bike',
    desc: 'A dynamic bike rental web application featuring an interactive dashboard, clean UI, and seamless booking capabilities built with React and styled for maximum engagement.',
    tags: ['React', 'JavaScript', 'Frontend', 'Web App'],
    img: '/rent_a_bike.png',
    github: 'https://github.com/WahidaAkhter/rent-a-bike',
    live: 'https://wahidaakhter.github.io/rent-a-bike/',
  },
  {
    title: 'TurfMasterPro',
    desc: 'Scalable workspace automation platform with an intuitive booking system, streamlining operations and optimizing resource allocation.',
    tags: ['React.js', 'Node.js', 'SQL', 'REST APIs'],
    img: '/turfmasterpro.png',
    github: 'https://github.com/WahidaAkhter/TurfMasterPro',
    live: 'https://github.com/WahidaAkhter/TurfMasterPro',
  },
  {
    title: 'Artificer At Your Door',
    desc: 'Service-oriented Android app connecting customers with home maintenance professionals, enabling real-time booking and management.',
    tags: ['Java', 'Android SDK', 'Android Studio'],
    img: '/artificer.png',
    github: 'https://github.com/WahidaAkhter/Artificeratyourdoor',
    live: 'https://github.com/WahidaAkhter/Artificeratyourdoor',
  },
  {
    title: 'Panda Commerce',
    desc: 'A vibrant e-commerce site featuring a product carousel, shopping cart, responsive design, trust signals, and testimonials — built with pure HTML, CSS & JS.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    img: '/panda_commerce.png',
    github: 'https://github.com/WahidaAkhter/Panda-Commerce-Site',
    live: 'https://wondrous-palmier-85c0bb.netlify.app/',
  },
  {
    title: 'Nike React',
    desc: 'A sleek Nike-inspired e-commerce storefront with product showcase, shopping cart, and fully responsive mobile-first design built with React & Bootstrap.',
    tags: ['React', 'Bootstrap 5', 'JavaScript', 'Netlify'],
    img: '/nike_react.png',
    github: 'https://github.com/WahidaAkhter/Nike-React',
    live: 'https://nike-react-infinity-fun.netlify.app/',
  },
  {
    title: 'Phone Arena',
    desc: 'A phone search app powered by a public API — search any phone model and instantly see specs, brand, and image details in a clean, mobile-first UI.',
    tags: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    img: '/phone_arena.png',
    github: 'https://github.com/WahidaAkhter/Phone-Arena',
    live: 'https://heroic-starship-0d62ee.netlify.app/',
  },
  {
    title: 'ToyBox',
    desc: 'A premium toy store web app with cart functionality, product collections, and a vibrant animated UI — designed for a delightful kids shopping experience.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    img: '/toybox.png',
    github: 'https://github.com/WahidaAkhter/add-to-cart-your-toy',
    live: 'https://kids-toystore.netlify.app/',
  },
  {
    title: 'Weattle',
    desc: 'An independent service provider platform offering specialized tour packages with secure authentication, private routing, and a responsive booking interface.',
    tags: ['React', 'Firebase Auth', 'React Router', 'Bootstrap'],
    img: '/weattle.png',
    github: 'https://github.com/WahidaAkhter/weattle',
    live: 'https://weattle.netlify.app/',
  },
  {
    title: 'G3 Architects',
    desc: 'An elegant landing page website designed for an architecture firm, featuring a sophisticated layout built with semantic HTML5 and clean CSS3.',
    tags: ['HTML5', 'CSS3', 'Responsive Design', 'Landing Page'],
    img: '/g3_architects.png',
    github: 'https://github.com/WahidaAkhter/G3-Architects',
    live: 'https://wahidaakhter.github.io/G3-Architects/',
  },
  {
    title: 'Flower Shop',
    desc: 'An elegant and vibrant flower shop landing page featuring promotional banners, clean layouts, and beautiful typography built with pure HTML5 and CSS3.',
    tags: ['HTML5', 'CSS3', 'Landing Page', 'Responsive'],
    img: '/flower_shop.png',
    github: 'https://github.com/WahidaAkhter/Flower-shop',
    live: 'https://wahidaakhter.github.io/Flower-shop/',
  },
];

const ProjectCard = ({ p }) => (
  <div className="diagonal-item" onClick={() => window.open(p.live, '_blank')}>
    <img src={p.img} alt={p.title} className="diagonal-img" />
    <div className="diagonal-overlay">
      <div className="diagonal-overlay-content">
        <div className="diagonal-tags">
          {p.tags.slice(0, 3).map((t) => <span key={t} className="diagonal-tag">{t}</span>)}
        </div>
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
        <div className="diagonal-actions">
          <a href={p.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="diagonal-btn">
            GitHub ↗
          </a>
          <a href={p.live} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="diagonal-btn diagonal-btn-live">
            Live ↗
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default function Projects() {
  const containerRef = useRef(null);
  
  // Diagonal animation on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Moves Left and Up during page down-scroll, simulating diagonal movement
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-15%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-15%"]);

  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: '-60px' });

  // Distribute projects among 3 rows so they don't repeat vertically
  const baseRow1 = [];
  const baseRow2 = [];
  const baseRow3 = [];

  projectsList.forEach((p, i) => {
    if (i % 3 === 0) baseRow1.push(p);
    else if (i % 3 === 1) baseRow2.push(p);
    else baseRow3.push(p);
  });

  // Multiply the rows to simulate infinite horizontal flow and fill the screen
  const row1 = [...baseRow1, ...baseRow1, ...baseRow1, ...baseRow1];
  const row2 = [...baseRow2, ...baseRow2, ...baseRow2, ...baseRow2];
  const row3 = [...baseRow3, ...baseRow3, ...baseRow3, ...baseRow3];

  return (
    <section id="projects" ref={containerRef} style={{ overflow: 'hidden' }}>
      <div className="section" style={{ position: 'relative' }}>
        <motion.div
          ref={headerRef}
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <span className="section-tag"><span className="star-spin">✦</span> My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Dive into a showcase of my latest digital creations! ✨ 
          </p>
        </motion.div>

        <div className="diagonal-gallery-wrapper">
          <motion.div className="diagonal-grid" style={{ x, y }}>
            <div className="diagonal-row">
              {row1.map((p, i) => <ProjectCard p={p} key={`r1-${i}`} />)}
            </div>
            <div className="diagonal-row" style={{ marginLeft: '-150px' }}>
              {row2.map((p, i) => <ProjectCard p={p} key={`r2-${i}`} />)}
            </div>
            <div className="diagonal-row" style={{ marginLeft: '-300px' }}>
              {row3.map((p, i) => <ProjectCard p={p} key={`r3-${i}`} />)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
