import React, { useEffect, useState } from "react";
import "./ProgressBar.css"
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
            className={animateSpan ? "animated-span" : ""}
          >{`${animatedProgress}%`}</span>
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${animatedProgress}%` }}
            aria-valuenow={animatedProgress}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    );
  };

  export default ProgressBar;