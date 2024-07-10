import React from 'react'
import "./Home.css"
import Slider from '../Slider/Slider'
import About from '../About/About'
import Gallery from '../Gallery/Gallery'
import Feature from '../Feature/Feature'
import FormSection from '../FormSection/FormSection'
const Home = () => {
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