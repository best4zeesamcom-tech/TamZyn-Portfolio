import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { RiArrowRightSFill } from 'react-icons/ri';
import './About.css';

const About = () => {
  const { isDark } = useTheme();

  const tools = [
    { img: '/assets/images/vscode.png', alt: 'VS Code' },
    { img: '/assets/images/firebase.png', alt: 'Firebase' },
    { img: '/assets/images/mongodb.png', alt: 'MongoDB' },
    { img: '/assets/images/figma.png', alt: 'Figma' },
    { img: '/assets/images/git.png', alt: 'Git' }
  ];

  return (
    <section className="about" id="about">
      <div className="container about__container">
        <div className="header-text about-header fade-up">
          <div className="small-card">Introduction</div>
          <h3 className="title">About Me</h3>
        </div>
        
        <div className="about__main-container">
          <div className="about__row">
            <div className="about-col left fade-up">
              <div className="about-image">
                <img src="/assets/images/about-img.png" alt="About Tamzyn" />
              </div>
            </div>
            
            <div className="about-col right fade-up">
              <p>
                I am an experienced Frontend Developer with over a decade of professional expertise 
                in the field. Throughout my career, I have had the privilege of collaborating with 
                prestigious organizations, contributing to their success and growth.
              </p>

              <div className="about__cards">
                <div className="about-card">
                  <img 
                    src="/assets/images/code-icon-dark.png" 
                    alt="" 
                    style={{ display: isDark ? 'none' : 'block' }} 
                  />
                  <img 
                    src="/assets/images/code-icon.png" 
                    alt="" 
                    style={{ display: isDark ? 'block' : 'none' }} 
                  />
                  <h4>Languages</h4>
                  <p>HTML, CSS, JavaScript, React JS and Next JS</p>
                </div>
                
                <div className="about-card">
                  <img 
                    src="/assets/images/edu-icon-dark.png" 
                    alt="" 
                    style={{ display: isDark ? 'none' : 'block' }} 
                  />
                  <img 
                    src="/assets/images/edu-icon.png" 
                    alt="" 
                    style={{ display: isDark ? 'block' : 'none' }} 
                  />
                  <h4>Education</h4>
                  <p>B.Tech in Computer Science</p>
                </div>
                
                <div className="about-card">
                  <img 
                    src="/assets/images/project-icon-dark.png" 
                    alt="" 
                    style={{ display: isDark ? 'none' : 'block' }} 
                  />
                  <img 
                    src="/assets/images/project-icon.png" 
                    alt="" 
                    style={{ display: isDark ? 'block' : 'none' }} 
                  />
                  <h4>Projects</h4>
                  <p>Built more than 100 projects</p>
                </div>
              </div>

              <div className="most-use">
                <h4>Tools I Use</h4>
                <ul className="tools">
                  {tools.map((tool, index) => (
                    <li key={index} className="fade-up">
                      <img src={tool.img} alt={tool.alt} />
                    </li>
                  ))}
                  <a href="/about.html" className="more-about hide-mobile-screen fade-up">
                    More about <RiArrowRightSFill />
                  </a>
                </ul>
                <a href="/about.html" className="more-about show-mobile-screen fade-up">
                  More about <RiArrowRightSFill />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;