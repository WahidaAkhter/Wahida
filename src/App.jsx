import { useState } from 'react';
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
