import React from 'react';
import "./Footer.css";
import WebLogo from './../../assets/ImageLogo.png';
import LocationIcon from "./../../assets/location.png";
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-section logo-section">
          <img src={WebLogo} alt="Logo" className="footer-logo" />
        </div>
        <div className="footer-section">
          <h2>Company</h2>
          <Link to="/about-us">About Company</Link>
          <Link to="/products">Products</Link>
          <Link to="/infrastructure">Infrastructure</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
        <div className="footer-section">
          <h2>Contacts</h2>
          <a className='contact-item' href="tel:+91-74860 22431">
            <IoMdCall />
            <span>+91-74860 22431</span>
          </a>
          <a className='contact-item' href="tel:+91-74860 22431">
            <IoMdCall />
            <span>+91-74860 22431</span>
          </a>
        </div>
        <div className="footer-section">
          <h2>Office</h2>
          <a className='contact-item' href="#">
            <img src={LocationIcon} alt="location icon" />
            <span>218, Kasturi Complex, Nr. Vishala Supreme, Opposite Torrent Substation, Sp Ring Road, Nikol, Ahmedabad-382350, Gujarat, India</span>
          </a>
        </div>
        <div className="footer-social">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaXTwitter /></a>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Company. All rights reserved.</span>
      </div>
    </div>
  );
}

export default Footer;
