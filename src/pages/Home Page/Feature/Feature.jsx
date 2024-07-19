import React from "react";
import "./Feature.css";
import Button from "./../../../components/Button/Button";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import bgImage from './../../../assets/why-IJ.jpg';
import Skill from './../../../assets/skill.jpg';

const Feature = () => {
  const barDetails = [
    { barTitle: "Qualitative Products", progress: 100 },
    { barTitle: "Positive Records", progress: 100 },
    { barTitle: "Economical Price Range", progress: 100 },
  ];

  return (
    <section className="feature-section">
      <div className="feature-container">
        <div
          className="feature-bg-image"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        ></div>

        <div className="f-wrapper">
          <div className="feature-wrapper">
            <div className="section-title">
              <h1>05</h1>
              <span className="sline">Why</span>
              <h2>IK Package</h2>
            </div>
            <p>
              We are dedicated to providing top-quality products promptly and at
              fair prices. Our commitment to excellence has made us a preferred
              choice among our clients. Key factors contributing to our success
              are highlighted in our Skills section.
            </p>
          </div>
        </div>
      </div>

      <div className="feature-container2">
        <div className="f-wrapper2">
          <div className="feature-wrapper2">
            <div className="section-title">
              <h1>06</h1>
              <span className="sline">Our Skills</span>
              <h2>
                Our Professional
                <br /> Experience & Skills
              </h2>
            </div>
            <div className="progress-bar-text">
              <div className="progress-skill">
                {barDetails.map((item) => {
                  return (
                    <ProgressBar
                      barTitle={item.barTitle}
                      progress={item.progress}
                    />
                  );
                })}
              </div>
              <Button btnTittle={"GET A QUOTE"} webLink="/contact-us" />
            </div>
          </div>
        </div>

        <div
          className="feature-bg-image"
          style={{
            backgroundImage: `url(${Skill})`,
            backgroundSize:"",
            height: "40rem",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Feature;

