import React from "react";
import "./About.css";
import AboutUsImg from "./../../../assets/home-about-03.png.jpg";
import Button from "../../../components/Button/Button";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-us-img">
          <img src={AboutUsImg} alt="about-us-imag" />
        </div>

        <div className="about-us-wrapper">
          <div className="section-title">
            <h1>IK Package Solution</h1>
            <span className="sline">About us</span>
            <h2>IK Package Solution</h2>
          </div>
          <div className="about-us-text">
            <p>
              <strong>
                We are the Foremast Manufacturer and Supplier Of Superior
                Quality Range Of Packaging Boxes.
              </strong>
            </p>
            <p>
              Our Exclusive Range Includes Printed Corrugated Boxes, Corrugated
              Boxes (3Ply, 5Ply, 7Ply), Printed Duplex Boxes, Duplex Boxes,
              Waterproof Boxes, Gift Boxes And e Flute Boxes, etc.
            </p>
          </div>
          <div className="about-button">
            <Button  btnTittle={"LEARN MORE"} webLink="/about-us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
