// src/components/ContactInfo.js
import React from "react";
import "./ContactInfo.css";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <div className="c-info">
      <h2>Contact Info</h2>

      <div className="c-section">
        <h3>Contact Department</h3>
        <div className="c-list">
          <a className="c-item" href="tel:+91-74860 22431">
            <IoCall size={25} />
            <span>+91-74860 22431</span>
          </a>
          <a className="c-item" href="tel:+91-74860 22431">
            <IoCall size={25} />

            <span>+91-74860 22431</span>
          </a>
        </div>
      </div>

      <div className="c-section">
        <h3>Office</h3>
        <div className="c-list">
          <a className="c-item" href="#">
            <IoLocationSharp size={25} />
            <span>
              218, Kasturi Complex, Nr. Vishala Supreme, Opposite Torrent
              Substation, Sp Ring Road, Nikol, Ahmedabad-382350, Gujarat, India
            </span>
          </a>
          <a className="c-item" href="mailto:info@marvelpack.com">
            <IoMail size={25} />
            <span>info@marvelpack.com</span>
          </a>
        </div>
      </div>

      <div className="c-section">
        <h3>Manufacturing Unit</h3>
        <div className="c-list">
          <a className="c-item" href="#">
            <IoLocationSharp size={25} />
            <span>
              R. Survey No: 205, Behind Billipura Bus Stop, Kuha-Pasunj Road,
              Kuha, Ahmedabad- 382433 India
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
