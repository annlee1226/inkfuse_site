import React, { useState, useEffect, useRef } from 'react'
import "./Navbar.css"
import logo from '../assets/Inkfuse_logo.png'
import search_icon from '../assets/search-w.png'

const Navbar = () => {
    return (
        <div className='navbar'>

            <img src={logo} alt="" className='logo' />
            
            <div className="title">InkFuse</div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Sign Up</a></li>
            </ul>

            <img src={search_icon} alt='' className='search-icon'/>
        </div>
    )
}

export default Navbar