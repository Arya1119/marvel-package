import React from 'react'
import "./Footer.css"
import WebLogo from './../../assets/ImageLogo.png'

const Footer = () => {
  return (

<div className="footer-header">
<div className="footer">
    <div className="box1">
        <h1>Logo</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <span>@Company.com</span>
    </div>
    <div className="box2">
        <span id="ft1">About us</span>
        <span>Company</span>
        <span>Portfolio</span>
        <span>Carees</span>
        <span>Contact us</span>
    </div>
    <div className="box3">
        <span id="ft2">Contact us</span>
        <span>Company</span>
        <span>Portfolio</span>
        <span>Carees</span>
        <span>Contact us</span>
    </div>
    <div className="box4">
        <span id="ft3">Contact us</span>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <span>+9000 0000 000</span>
    </div>
    <div className="follow">
        {/* <img src="../../assets/home/facebook 1.png" alt="facebook"/>
        <img src="../../assets/home/instagram 1.png" alt="instagram"/>
        <img src="../../assets/home/twitter 1.png" alt="twitter" />
        <img src="../../assets/home/linkedin 1.png" alt="linkedin"/> */}
    
    </div>
    </div>
    <hr/>
<div className="cp">
    <span>Copyright ® {new Date().getFullYear()} Company All rights Recerved</span>
</div>
</div>
  )
}

export default Footer