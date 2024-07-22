import React, { useEffect } from 'react';
import './Home.css';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';
import Feature from '../Feature/Feature';
import Hero from '../Hero/Hero';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    document.title = 'Home Page';

    // GSAP animations
    gsap.fromTo(
      '.hero',
      { opacity: 0, y: -50, scale: 1.1 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top 80%',
          once: true,
        },
      }
    );

    gsap.fromTo(
      '.about',
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about',
          start: 'top 80%',
          once: true,
          delay: 0.3,
        },
      }
    );

    gsap.fromTo(
      '.gallery',
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gallery',
          start: 'top 80%',
          once: true,
          delay: 0.6,
        },
      }
    );

    gsap.fromTo(
      '.feature',
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.feature',
          start: 'top 80%',
          once: true,
          delay: 0.9,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="hero">
        <Hero />
      </div>
      <div className="about">
        <About />
      </div>
      <div className="gallery">
        <Gallery />
      </div>
      <div className="feature">
        <Feature />
      </div>
    </>
  );
};

export default Home;
