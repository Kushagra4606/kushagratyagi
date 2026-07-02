import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  // Intersection Observer for fade-in animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.style.opacity = 1;
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-on-scroll').forEach(el => {
      el.style.opacity = 0;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
    </div>
  )
}

export default App
