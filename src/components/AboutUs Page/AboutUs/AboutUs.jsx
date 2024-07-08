import React from 'react'
import './AboutUs.css';
import Banner from '../Banner/Banner';
import About from '../About/About'
import Contact from '../Contact/Contact';
import Skill from '../Skill/Skill';
const AboutUs = () => {
  return (
    <main>
      <Banner/>
      <About/>
      <Contact/>
      <Skill/>
    </main>
  )
}

export default AboutUs