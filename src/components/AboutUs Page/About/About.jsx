import React from "react";
import "./About.css";
import AboutPageImg from './../../../assets/about-page-img.png'
import CheckCircleIcon from '../../../assets/check-mark.png'

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
                <h2>Marvel Pack Industries</h2>
            </div>
            <div className="about-us-text">
                {/* <p><strong>We are one of the famous Manufacturer and Supplier of the wide assortment of the Food Packaging Box, Corrugated Box, Printed Packaging Box, Paper Bag, etc.</strong></p> */}
                <p>We are one of the famous Manufacturer and Supplier of the wide assortment of the Food Packaging Box, Corrugated Box, Printed Packaging Box, Paper Bag, etc. Our product range includes Paper Popcorn Box, Printed Cake Box, Corrugated Pizza Box, Ice Cream Packaging Box, French Fry Box, Corrugated Handle Box, 7 Ply Corrugated Box, Die Cut Corrugated Box, UN Approved Corrugated Box, Laminated Corrugated Box, Incense Stick Box and much more. Together with this, our products are appreciated for their features like easy to use, crack resistance, and lightweight.</p>
            </div>
            <div className="about-content">
              <div className="about-icon">
                <img
                  src={CheckCircleIcon}
                  class="img-fluid rounded-top"
                  alt="checked circle icon"
                />
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
