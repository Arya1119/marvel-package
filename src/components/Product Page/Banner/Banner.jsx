import React from 'react'
import { Link } from 'react-router-dom'
import "./Banner.css"

const Banner = () => {
  return (
    <div className='banner-container'>
        <div className='banner-info'>
            <h1>Our Products</h1>
            <ul className='banner-nav'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <span>Our Products</span>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Banner