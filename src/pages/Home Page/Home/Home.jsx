import React, { useEffect } from 'react'
import "./Home.css"
import About from '../About/About'
import Gallery from '../Gallery/Gallery'
import Feature from '../Feature/Feature'
import Hero from '../Hero/Hero'
const Home = () => {
  useEffect(() => {
    document.title = 'Home Page';
}, []);
  return (
    <>
       <Hero/>     
       <About/>
       <Gallery/> 
       <Feature/>
    </>
  )
}

export default Home