import { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import './index.css';
import IntroPreloader from './components/IntroPreloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Aurora from './components/Aurora';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Aurora />
      <IntroPreloader onComplete={() => setLoaded(true)} />
      {loaded && <Navbar />}
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
