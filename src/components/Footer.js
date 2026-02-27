import React from 'react';
import { RiLinkedinBoxFill, RiBehanceFill, RiInstagramFill, RiPinterestFill, RiGithubFill } from 'react-icons/ri';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Privacy Policy', href: 'javascript:void()' },
    { label: 'Disclaimer', href: 'javascript:void()' }
  ];

  const socialIcons = [
    { icon: RiLinkedinBoxFill, href: '#' },
    { icon: RiBehanceFill, href: '#' },
    { icon: RiInstagramFill, href: '#' },
    { icon: RiPinterestFill, href: '#' },
    { icon: RiGithubFill, href: '#' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        const offset = 100;
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__main-container">
          <div className="foot-logo fade-up">
            <div className="img">
              <img src="/assets/images/profile-hero.png" alt="Tamzyn" />
            </div>
            <a href="#home" className="logo footlogo" onClick={(e) => handleLinkClick(e, '#home')}>
              <h3>Tam<span>ZYN.</span></h3>
            </a>
          </div>

          <ul className="nav__lists footer__lists fade-up">
            {footerLinks.map((link, index) => (
              <li className="nav__links" key={index}>
                <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav__socials-icons footer__social-icons fade-up">
            {socialIcons.map((social, index) => {
              const Icon = social.icon;
              return (
                <a href={social.href} key={index}>
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
        <div className="footer-text">
          <p>&copy; TamZYN. All rights reserved | {currentYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;