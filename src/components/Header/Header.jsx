import React, { useState, useEffect } from "react";
import "./Header.css";
import WebLogo from "../../assets/Marvel-Pack-Industries-Logo.png";
// import  WebLogo from './../../assets/ImageLogo.png'
import WebLine from "../../assets/line-1.png";
import {  Link, NavLink } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";

// const MobileSubmenuItem = ({ text }) => {
//   return (
//     <li className="submenu-item">
//       <a href="#">{text}</a>
//     </li>
//   );
// };
// const SubmenuItem = ({ text }) => {
//   return (
//     <li className="menu-item">
//       <a href="#">{text}</a>
//     </li>
//   );
// };

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const toggleSubMenu = () => {
    setSubMenuVisible(!subMenuVisible);
  };
  let subMenu = [
    "Food Packaging Box",
    "Auto Parts Industry",
    "Pharma Industry",
    "Electric Industry",
    "Engineering Industry",
    "Metal Industry",
    "Plastic Industry",
    "Cosmetic Product Box",
    "Water Purifier Industry",
    "Other Industries",
  ];

  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <img className="logo" src={WebLogo} alt="logo" />
          <img className="line" src={WebLine} alt="line" />
        </div>
        <div className="header-right">
          <nav>
            <ul>
              <li>
                
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "isActive" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink  className={({ isActive }) =>
                    `nav-link ${isActive ? "isActive" : ""}`
                  } to="/about-us">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) =>
                    `nav-link ${isActive ? "isActive" : ""}`
                  }  to="/infrastructure">
                  Infrastructure
                </NavLink>
              </li>
              <li className="menu">
                <NavLink className={({ isActive }) =>
                    `nav-link ${isActive ? "isActive" : ""}`
                  } to="/products">
                  Product
                </NavLink>
                {/* <ul className="sub-menu">
                  {subMenu.map((item) => {
                    return <SubmenuItem text={item} />;
                  })}
                </ul> */}
              </li>
              {/* <li>
                <a className="nav-link" href="#">
                  E-Brochure
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Clients
                </a>
              </li> */}
              <li>
                <NavLink className={({ isActive }) =>
                    `nav-link ${isActive ? "isActive" : ""}`
                  } to="/contact-us">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="header-num">
            <img src={WebLine} alt="line" />
            <div className="num-section">
              {/* <img className="phoneicon" src={PhoneIcon} alt="phone icon" /> */}
              <IoCallOutline className="phoneicon"/>
              <span>+91 84889 63484</span>
            </div>
          </div>
        </div>
        <div className="menu-container" onClick={toggleMenu}>
          <span>
            <span>
              <span></span>
            </span>
          </span>
        </div>
        <div
          className={`mobile-menu ${
            menuVisible && width < 990 ? "show" : "hide"
          }`}
        >
          <nav className="mean-nav">
            <ul>
              <li className="mobile-menu-item">
                 <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${isActive ? "isActive" : ""}`
                  } 
                >
                  Home
                </NavLink>
              </li>

              <li className="mobile-menu-item">
                <NavLink to="/about-us"  className={({ isActive }) =>
                    `${isActive ? "isActive" : ""}`
                  } >About Us</NavLink>
              </li>
              <li className="mobile-menu-item">
                <NavLink className={({ isActive }) =>
                    `${isActive ? "isActive" : ""}`
                  }  to="/infrastructure">Infrastructure</NavLink>
              </li>
              <li className="mobile-menu-item">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `${isActive ? "isActive" : ""}`
                  }
                  style={{ width: "100%" }}
                >
                  Product
                </NavLink>

                {/* <a
                  href="#"
                  className="mean-expand"
                  style={{ width: "10%", fontSize: "17px" }}
                  onClick={toggleSubMenu}
                >
                  +
                </a>

                <ul className={`submenu ${subMenuVisible ? "show" : "hide"}`}>
                  {subMenu.map((item) => {
                    return <MobileSubmenuItem text={item} />;
                  })}
                </ul> */}
              </li>
              {/* <li className="mobile-menu-item">
                <a href="#">E-Brochure</a>
              </li>
              <li className="mobile-menu-item">
                <a href="#">Clients</a>
              </li> */}
              <li className="mobile-menu-item">
                <NavLink className={({ isActive }) =>
                    `${isActive ? "isActive" : ""}`
                  }  to="/contact-us">Contact Us</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
