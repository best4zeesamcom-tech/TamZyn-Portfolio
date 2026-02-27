import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { RiSunFill, RiMoonFill, RiLinkedinBoxFill, RiFacebookCircleFill, RiInstagramFill, RiMenuLine, RiCloseLine } from 'react-icons/ri';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'technologies', label: 'Technologies', href: '/about.html' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (id, href) => {
    if (href) {
      window.location.href = href;
      return;
    }
    setActiveLink(id);
    setIsMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.filter(link => !link.href).map(link => link.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveLink(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>
        <h3>Tam<span>ZYN.</span></h3>
      </a>
      
      <ul className={`nav__lists ${isMenuOpen ? 'open-menu' : ''}`}>
        {navLinks.map(link => (
          <li className="nav__links" key={link.id}>
            <a 
              href={link.href || `#${link.id}`}
              id={activeLink === link.id && !link.href ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.id, link.href);
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav__socials-icons">
        {isDark ? (
          <RiMoonFill onClick={toggleTheme} title="Toggle dark or light" />
        ) : (
          <RiSunFill onClick={toggleTheme} title="Toggle dark or light" />
        )}
        <a href="javascript:void()" className="hide-mobile-screen"><RiLinkedinBoxFill /></a>
        <a href="javascript:void()" className="hide-mobile-screen"><RiFacebookCircleFill /></a>
        <a href="javascript:void()" className="hide-mobile-screen"><RiInstagramFill /></a>
      </div>

      <button id="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <RiCloseLine /> : <RiMenuLine />}
      </button>
    </nav>
  );
};

export default Navbar;