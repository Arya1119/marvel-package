import React from 'react'
import './AboutUs.css';
import About from '../About/About'
import Contact from '../Contact/Contact';
import Skill from '../Skill/Skill';
import Banner from '../../../components/Banner/Banner';
const AboutUs = () => {
  return (
    <main>
      <Banner bannerNav="About us" />
      <About/>
      <Contact/>
      <Skill/>
    </main>
  )
}

export default AboutUs