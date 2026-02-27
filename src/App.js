import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Freelancing from './components/Freelancing';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import "./App.css";
function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Intersection Observer for fade animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ThemeProvider>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Freelancing />
      <Footer />
    </ThemeProvider>
  );
}

export default App;