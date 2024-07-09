import React, { useEffect, useState } from "react";
import "./Skill.css";
// import AirPlaneImg from "./../../../assets/airplane.png";
import { FaRegPaperPlane } from "react-icons/fa";


const ProgressBar = ({ progress, barTitle }) => {
  // Calculate the width of the progress bar dynamically based on the progress value
  // State to manage animation
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [animateSpan, setAnimateSpan] = useState(false);

  // Animate the progress
  useEffect(() => {
    const animationInterval = setInterval(() => {
      if (animatedProgress < progress) {
        setAnimatedProgress((prevProgress) => prevProgress + 2);
      } else {
        clearInterval(animationInterval);
      }
    }, 10); // Adjust the interval for smoother animation
    return () => clearInterval(animationInterval);
  }, [progress, animatedProgress]);

  return (
    <div className="single-skill">
      <div className="bar-title">
        <h4>{barTitle}</h4>
        <span
          style={{color:"#fff"}}
          className={animateSpan ? "animated-span" : ""}
        >{`${animatedProgress}%`}</span>
      </div>
      <div className="progress">
        <div
          
          className="progress-bar"
          role="progressbar"
          style={{ width: `${animatedProgress}%` , backgroundColor:"#fff"}}
          aria-valuenow={animatedProgress}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

const Skill = () => {
  const barDetails = [
    { barTitle: "Prompt delivery", progress: 100 },
    { barTitle: "Excellent transport & logistic facility", progress: 100 },
    { barTitle: "Dexterous team of professionals", progress: 100 },
  ];

  return (
    <section className="skill-section">
      <div className="skill-container">
        <h1>Why Us</h1>
        <p>
          <strong>
            We are an eminent firm that is actively committed to offering
            premium quality range of products within
          </strong>
          <br />
          <strong>
            the minimum time and at genuine rates. Few of the essential factors
            that help us to
          </strong>
          <br />
          <strong>
            become the prime choice of the patrons are listed in Skills.
          </strong>
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
                {barDetails.map((item) => {
                  return (
                    <ProgressBar
                      barTitle={item.barTitle}
                      progress={item.progress}
                    />
                  );
                })}
              </div>
              <a className="btn" href="#">
                GET A QUOTE <FaRegPaperPlane/>
              </a>
            </div>
          </div>
        </div>

        <div
          className="feature-bg-image"
          style={{
            backgroundImage: `url("https://www.marvelpack.com/wp-content/uploads/2021/05/skill.jpg")`,
            height: "46rem",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Skill;
