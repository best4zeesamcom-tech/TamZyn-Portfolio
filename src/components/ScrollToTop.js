import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (link) {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const targetPosition = targetElement.offsetTop - 100;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
};

export default ScrollToTop;