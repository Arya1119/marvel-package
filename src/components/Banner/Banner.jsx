import React from 'react'
import { Link } from 'react-router-dom'
import "./Banner.css"

const Banner = ({bannerNav}) => {
  return (
    <div className='banner-container'>
        <div className='banner-info'>
            <h1>{bannerNav}</h1>
            <ul className='banner-nav'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <span>{bannerNav}</span>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Banner