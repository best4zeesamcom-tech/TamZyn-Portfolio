import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const scrollDownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollDownRef.current) {
        if (window.scrollY > 60) {
          scrollDownRef.current.classList.add('hide');
        } else {
          scrollDownRef.current.classList.remove('hide');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHireClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="home" id="home">
      <div className="container hero__container">
        <div className="hero__row">
          <div className="hero__col first fade-up">
            <span className="small-card hero-small-card">Hey, your welcome!</span>
            <h1 className="heading" id="hide-small-devices">Hello, I'm Tamzyn Helfe,</h1>
            <h1 className="heading" id="show-small-device">
              <span>Hello, I'm</span><br />Tamzyn Helfe,
            </h1>
            <h1 className="sub-heading">frontend developer</h1>
            <p className="hero__description">
              Turning ideas into stylish, responsive web experiences with expertise. 
              Let's create a standout digital presence that leaves a lasting impression.
            </p>
            <div className="hero-btns">
              <a href="/assets/images/TamZyn CV.pdf" className="btn btn-primary hero__btn" download>
                Download CV
              </a>
              <a href="#contact" className="secondary-btn" onClick={handleHireClick}>Hire Me</a>
            </div>
          </div>
          <div className="hero__col second fade-up">
            <div className="hero-right-image">
              <img src="/assets/images/profile-hero.png" alt="Tamzyn Helfe" />
            </div>
            <div className="hero-ring"></div>
            <div className="triangle"></div>
          </div>
        </div>
        <a href="#about" className="scroll-down" title="Scroll down" ref={scrollDownRef}></a>
      </div>
    </section>
  );
};

export default Hero;