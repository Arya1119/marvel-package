import React, { useEffect } from 'react'
import './AboutUs.css';
import About from '../About/About'
import Contact from '../Contact/Contact';
import Skill from '../Skill/Skill';
import Banner from '../../../components/Banner/Banner';
const AboutUs = () => {
  useEffect(() => {
    document.title = 'AboutUs Page';
}, []);
  return (
    <>
      <Banner bannerNav="About us" />
      <About/>
      <Contact/>
      <Skill/>
    </>
  )
}

export default AboutUs