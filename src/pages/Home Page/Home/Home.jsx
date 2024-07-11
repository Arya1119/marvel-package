import React, { useEffect } from 'react'
import "./Home.css"
import Slider from '../Slider/Slider'
import About from '../About/About'
import Gallery from '../Gallery/Gallery'
import Feature from '../Feature/Feature'
import FormSection from '../FormSection/FormSection'
const Home = () => {
  useEffect(() => {
    document.title = 'Home Page';
}, []);
  return (
    <>
       <Slider/>
       <About/>
       <Gallery/> 
       <Feature/>
       <FormSection/>
    </>
  )
}

export default Home