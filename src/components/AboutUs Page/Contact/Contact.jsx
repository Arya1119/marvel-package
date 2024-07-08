import React from 'react'
import "./Contact.css"
import AirPlaneImg from './../../../assets/airplane.png'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section className='contact-info'>
        <div className="contact-info-container">
            <span>24/7 Active Suport Team</span>
            <h1>Need Immediate Support Or Any Help?</h1>
            <p>Will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth the master-builder of human</p>
            <Link className='btn' to="#">meet with us<img src={AirPlaneImg} alt="airplane image"  /></Link>
        </div>
    </section>
  )
}

export default Contact