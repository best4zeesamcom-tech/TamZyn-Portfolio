import React from 'react';
import './Freelancing.css';

const Freelancing = () => {
  const handleContactClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="freelancing">
      <div className="container freelancing__container">
        <div className="freelancing__row">
          <div className="freelancing__col left fade-up">
            <h2>We're <span>available</span> for freelancing</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Ipsa maiores corrupti quam, consectetur impedit assumenda?
            </p>
            <a href="#contact" className="btn-primary hire-btn" onClick={handleContactClick}>Contact Us</a>
          </div>
          <div className="freelancing__col right fade-up">
            <div className="freelancing-image">
              <img src="/assets/images/freelance.png" alt="Freelancing" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Freelancing;