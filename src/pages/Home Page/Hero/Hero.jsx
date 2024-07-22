import React from 'react'
import "./Hero.css"
import Button from "../../../components/Button/Button";
import TypingEffect from '../../../components/TypingEffect/TypingEffect';

const Hero = () => {
  return (
    <div className="hero-home-container">
        <div className="hero-overlayout"></div>
    <div className="hero-content">
      <h1 className="hero-title">
        <TypingEffect text={"Welcome to IK Package Solution"}/>
      </h1>
      <p className="hero-subtitle">
     We are committed to delivering superior quality packaging that meets the highest standards of durability and aesthetics. Our innovative approach ensures that we provide effective solutions tailored to the unique needs of our clients, enhancing product protection and presentation.
      </p>
      <Button  btnTittle={"LEARN MORE"} webLink="/about-us" icon={false} />
    </div>
     </div>
  )
}

export default Hero