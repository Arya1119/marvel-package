import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import Unit from './Unit/Unit';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InfrastructurePage = () => {
  useEffect(() => {
    document.title = 'Infrastructure Page';

    // GSAP animations
    gsap.fromTo(
      '.hero',
      { opacity: 0, y: -100, scale: 1.1 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top 80%',
          once: true,
        },
      }
    );

    gsap.fromTo(
      '.unit',
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.unit',
          start: 'top 80%',
          once: true,
          delay: 0.3,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="hero">
        <Hero />
      </div>
      <div className="unit">
        <Unit />
      </div>
    </>
  );
};

export default InfrastructurePage;
