import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show-animation');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    const hiddenElements = document.querySelectorAll('.hidden-animation');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}; 