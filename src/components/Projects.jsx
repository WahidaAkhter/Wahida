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

const columns = [
  [projectsList[0], projectsList[3], projectsList[6], projectsList[9]],
  [projectsList[1], projectsList[4], projectsList[7]],
  [projectsList[2], projectsList[5], projectsList[8]],
];

const MasonryColumn = ({ projects, reverse }) => {
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
