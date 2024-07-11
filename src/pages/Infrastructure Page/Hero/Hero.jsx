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
             We have set up a robust foundation.
             <br />
             Our production unit is equipped with automated machines that ensure faster production while adhering to quality standards.
             <br />
             Moreover, thanks to our skilled professionals and well-equipped infrastructure,
             <br />
             we have built strong relationships with clients in a short period of time.
             </p>
            </div>
        </div>
    </section>
  )
}

export default Hero