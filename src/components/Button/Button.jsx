import React from 'react'
import "./Button.css"
import { FaRegPaperPlane } from "react-icons/fa";


const Button = ({btnTittle}) => {
  return (
    <a className='btn' href="#">{btnTittle}<FaRegPaperPlane /></a>
  )
}

export default Button