import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Github, Linkedin, Mail, ArrowRight, MessageCircle } from 'lucide-react';
import MagicBento from './MagicBento';
import LogoLoop from './LogoLoop';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiFigma, 
  SiPython, 
  SiMongodb 
} from 'react-icons/si';
import './Hero.css';

const techLogos = [
  { node: <SiReact color="#61DAFB" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs color="#ffffff" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript color="#3178C6" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss color="#06B6D4" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs color="#339933" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiFigma color="#F24E1E" />, title: "Figma", href: "https://figma.com" },
  { node: <SiPython color="#3776AB" />, title: "Python", href: "https://python.org" },
  { node: <SiMongodb color="#47A248" />, title: "MongoDB", href: "https://mongodb.com" },
];

const stats = [
  { value: '+3', label: 'Years Experience' },
  { value: '+15', label: 'Projects Done' },
  { value: '+10', label: 'Recent Projects' },
];

const words = ["Reality", "Impact", "Success", "Solutions", "Innovation"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const slideFromTopLeft = (delay = 0) => ({
  initial: { opacity: 0, x: "-100vw", y: "-100vh" },
  animate: { opacity: 1, x: 0, y: 0 },
  transition: { 
    type: "spring",
    damping: 25,
    stiffness: 80,
    delay 
  },
});

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-glow" />
      <div className="hero-inner">

        {/* Left — Profile Card */}
        <motion.div 
          variants={slideFromTopLeft(0.1)}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="profile-card"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          >
          <MagicBento 
            enableStars
            enableSpotlight
            enableBorderGlow
            glowColor="0, 255, 133"
            className="profile-card-magic"
          >
            <div className="profile-card-content">
              <div className="avatar-ring">
                <img src="/mee.jpg" alt="Wahida Akhter" className="avatar-img" />
                <span className="available-dot" title="Available for work" />
              </div>
              <h2 className="profile-name">Wahida Akhter</h2>
              <p className="profile-role">Software Developer Intern</p>
              <div className="profile-location">
                <MapPin size={14} />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="profile-divider" />
              <div className="profile-stats">
                {stats.map(({ value, label }) => (
                  <div key={label} className="profile-stat">
                    <span className="stat-value">{value}</span>
                    <span className="stat-label">{label}</span>
                  </div>
                ))}
              </div>
              <div className="profile-divider" />
              <MagicBento 
                textAutoHide={true}
                enableStars
                enableSpotlight
                enableBorderGlow={true}
                enableTilt={false}
                enableMagnetism={false}
                clickEffect
                spotlightRadius={400}
                particleCount={12}
                glowColor="0, 255, 133"
                disableAnimations={false}
                className="hire-magic-wrap"
              >
                <a href="#contact" className="btn-hire">
                  Let's Talk
                </a>
              </MagicBento>
              <div className="profile-socials">
                {[
                  { Icon: Github,   href: 'https://github.com/WahidaAkhter' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/wahida-akhter/' },
                  { Icon: Mail,     href: 'mailto:wahidacse280@gmail.com' },
                ].map(({ Icon, href }) => (
                  <a key={href} href={href} target="_blank" rel="noreferrer" className="social-icon">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </MagicBento>
          </motion.div>
        </motion.div>

        {/* Right — Headline */}
        <div className="hero-copy">
          <motion.span className="section-tag" {...fadeUp(0.15)}>
            <span className="star-spin">✦</span> Open to Opportunities
          </motion.span>
          <motion.h1 
            className="hero-heading" 
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            initial="hidden"
            animate="visible"
          >
            {"Transforming Your Ideas into".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="word"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
            <div style={{ position: 'relative', display: 'inline-flex', verticalAlign: 'middle' }}>
              <AnimatePresence mode="wait">
                <motion.div 
                  key={words[index]}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{ display: 'flex' }}
                >
                  {words[index].split("").map((char, i) => (
                    <motion.span
                      key={i}
                      className="hero-accent"
                      variants={{
                        hidden: { opacity: 0, y: 15, filter: 'blur(8px)' },
                        visible: { 
                          opacity: 1, 
                          y: 0, 
                          filter: 'blur(0px)',
                          transition: { delay: i * 0.03, duration: 0.4, ease: "easeOut" } 
                        },
                        exit: { 
                          opacity: 0, 
                          y: -15, 
                          filter: 'blur(8px)',
                          transition: { duration: 0.3 } 
                        }
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.h1>
          <motion.p className="hero-sub" {...fadeUp(0.3)}>
            Master's student at Dhaka University. Full-stack developer with hands-on experience in React.js, Node.js, and AI-powered applications.
          </motion.p>

          {/* Decorative Logo Loop */}
          <motion.div className="hero-logo-loop" {...fadeUp(0.46)}>
            <LogoLoop
              logos={techLogos}
              speed={40}
              direction="left"
              logoHeight={32}
              gap={50}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#080d14"
              ariaLabel="Technology stack"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
