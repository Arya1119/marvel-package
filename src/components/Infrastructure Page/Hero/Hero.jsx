import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <section className='hero-section'>
        <div className="background-overlay"></div>
        <div className="hero-container">
            <div className="h-container">
            <h1>Infrastructure</h1>
             <div className='seperatore'></div>
             <p>
             We have established a sound infrastructure.
             <br />
             We have all the automatic machine in our production unit for faster production with the set quality norms.
             <br />
             In addition to this, with the support of our talented professionals and well-equipped infra,
             <br />
             we have a strong relationship with clients in a short span of time.
             </p>
            </div>
        </div>
    </section>
  )
}

export default Hero