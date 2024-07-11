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
          <a className="c-item" href="tel:+91-96013 13243">
            <IoCall size={25} />
            <span>+91-96013 13243</span>
          </a>
          <a className="c-item" href="tel:+91-96878 31482">
            <IoCall size={25} />

            <span>+91-96878 31482</span>
          </a>
        </div>
      </div>

      <div className="c-section">
        <h3>Office</h3>
        <div className="c-list">
          <a className="c-item" href="#">
            <IoLocationSharp size={25} />
            <span>
            Plot No. - 18,19,20  Avkar Warehouse Near Govindpura Chokdi,  
            At- Vijapur , Dist- Mahesana  State – Gujarat , Pin-382870  
            </span>
          </a>
          <a className="c-item" href="mailto:info@marvelpack.com">
            <IoMail size={25} />
            <span>Ikpackaging2209@gmail.com</span>
          </a>
        </div>
      </div>

   
    </div>
  );
};

export default ContactInfo;
