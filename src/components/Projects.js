import React from 'react';
import { RiMore2Fill, RiBookmark3Fill, RiGithubFill, RiArrowRightDoubleFill } from 'react-icons/ri';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Crypto Portfolio Design',
      description: 'A responsive and user-friendly crypto portfolio design with features like real-time market data, portfolio tracking, and more.',
      image: '/assets/images/project-1.png',
      preview: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'AI Telehealth & Telemedicine',
      description: 'A platform that helps doctors and patients to connect with each other, providing a seamless telehealth and telemedicine experience.',
      image: '/assets/images/project-2.png',
      preview: '#',
      github: '#',
      bookmark: true
    },
    {
      id: 3,
      title: 'FlowFunds a Mobile app',
      description: 'A mobile app that helps users find and book flow funds, ensuring they receive the funds they need when they need them.',
      image: '/assets/images/project-3.png',
      preview: '#',
      github: '#'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container projects__container">
        <div className="header-text projects-header fade-up">
          <div className="small-card">Some of my works</div>
          <h3 className="title">Our Projects</h3>
        </div>

        <div className="projects__main-container">
          <div className="projects__cards">
            {projects.map(project => (
              <div className="projects__card fade-up" key={project.id}>
                {project.bookmark && <RiBookmark3Fill />}
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="card-header">
                  <h3>{project.title}</h3>
                  <RiMore2Fill />
                </div>
                <p className="card-description">{project.description}</p>
                <div className="cards-btns">
                  <a href={project.preview}>
                    Preview <img src="/assets/images/paperclip-solid.svg" width="18" alt="" />
                  </a>
                  <a href={project.github}>
                    github <RiGithubFill />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="show-more">
            <a href="/projects.html" className="card-btn fade-up">
              Show More <RiArrowRightDoubleFill />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;