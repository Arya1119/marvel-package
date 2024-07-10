import React from "react";
import "./About.css";
import AboutPageImg from './../../../assets/about-page-img.png'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


const About = () => {
  return (
    <section className='about'>
    <div className="container">
        <div className="about-us-img">
            <img src={AboutPageImg} alt="about-us-imag"  />
        </div>

        <div className="about-us-wrapper">
            <div className="section-title">
                <h1>01</h1>
                <span className='sline'>About us</span>
                <h2>IK Package Solution</h2>
            </div>
            <div className="about-us-text">
                <p>Inaugurated In The Year 2020 At Vijapur (Mahesana , Gujarat), We, “IK PACKAGING AND 
SOLUTION” Are The Foremast Manufacturer And Supplier Of Superior Quality Range Of 
Packaging Boxes. Our Exclusive Range Includes Printed Corrugated Boxes, 
Corrugated Boxes(3Ply, 5Ply, 7Ply), Printed Duplex Boxes, Duplex Boxes, 
Waterproof Boxes, Gift Boxes And e Flute Boxes, etc.</p>
            </div>
            <div className="about-content">
              <div className="about-icon">
                
                <IoIosCheckmarkCircleOutline color="#EEAE1D" class="img-fluid rounded-top"/>
                
              </div>
              <div className="about-info">
                <h2>
                  100%
                  <span>+</span>
                </h2>
                <span>Trusted Agency</span>
              </div>
                
            </div>
        </div>

    </div>
</section>
  );
};

export default About;
