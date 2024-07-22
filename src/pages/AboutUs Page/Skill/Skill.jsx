import React from "react";
import "./Skill.css";
import Button from "../../../components/Button/Button";
import SkillLogo from "./../../../assets/skill.jpg";
import ProgressBar from "./../../../components/ProgressBar/ProgressBar";

const Skill = () => {
  const barDetails = [
    {id:1, barTitle: "Prompt delivery", progress: 100 },
    {id:2, barTitle: "Excellent transport & logistic facility", progress: 100 },
    {id:3, barTitle: "Dexterous team of professionals", progress: 100 },
  ];

  return (
    <section className="skill-section">
      <div className="skill-container">
        <h1>Why Us</h1>
        <p>
          <strong>
            As a leading firm, we are dedicated to delivering high-quality
            products promptly and at fair prices. Our commitment
          </strong>
          <br />
          <strong>
            to excellence has made us a preferred choice among our clients. Some
            of the key factors contributing
          </strong>
          <br />
          <strong>to our success are outlined in the Skills section.</strong>
        </p>
      </div>

      <div className="skill-container2">
        <div className="s-container2">
          <div className="skill-wrapper2">
            <div className="section-title">
              <h1>03</h1>
              <span className="sline">Our Skills</span>
              <h2>
                Our Professional
                <br /> Experience & Skills
              </h2>
            </div>
            <div className="progress-bar-text">
              <div className="progress-skill">
                {barDetails.map((item,index) => {
                  return (
                    <ProgressBar key={index}
                      barTitle={item.barTitle}
                      progress={item.progress}
                    />
                  );
                })}
              </div>

              <Button btnTittle={"GET A QUOTE"} webLink={"/about-us"}/>
            </div>
          </div>
        </div>

        <div
          className="feature-bg-image"
          style={{
            backgroundImage: `url(${SkillLogo})`,
            height: "50rem",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Skill;
