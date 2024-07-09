import React from 'react'
import { Link } from 'react-router-dom'
import "./Banner.css"

const Banner = () => {
  return (
    <div className='banner-container'>
        <div className='banner-info'>
            <h1>Contact Us</h1>
            <ul className='banner-nav'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <span>Contact Us</span>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Banner