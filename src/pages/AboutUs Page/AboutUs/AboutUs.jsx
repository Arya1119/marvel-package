import React, { useEffect } from 'react';
import './AboutUs.css';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Skill from '../Skill/Skill';
import Banner from '../../../components/Banner/Banner';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  useEffect(() => {
    document.title = 'AboutUs Page';

    // GSAP animations
    gsap.fromTo(
      '.banner',
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.banner',
          start: 'top 80%',
          once: true,
        },
      }
    );

    gsap.fromTo(
      '.about',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about',
          start: 'top 80%',
          once: true,
        },
      }
    );

    gsap.fromTo(
      '.contact',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact',
          start: 'top 80%',
          once: true,
          delay: 0.3,
        },
      }
    );

    gsap.fromTo(
      '.skill',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.skill',
          start: 'top 80%',
          once: true,
          delay: 0.6,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="banner">
        <Banner bannerNav="About us" />
      </div>
      <div className="about">
        <About />
      </div>
      <div className="contact">
        <Contact />
      </div>
      <div className="skill">
        <Skill />
      </div>
    </>
  );
};

export default AboutUs;
