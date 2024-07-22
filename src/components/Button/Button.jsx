import React from 'react'
import "./Button.css"
import { FaRegPaperPlane } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Button = ({btnTittle,webLink,icon=true}) => {
  return (
    <Link className='btn' to={webLink} >{btnTittle}
    { (icon) &&
      <FaRegPaperPlane />
    }
    </Link>
  )
}

export default Button