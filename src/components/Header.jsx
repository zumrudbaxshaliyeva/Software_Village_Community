import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './../assets/css/header.css'
const Header = () => {
  return (
    <div className='header'>
    <nav> 
    <ul>
      <li>
        <Link className='nav_link' to="/">Home</Link>
      </li>
      <li>
        <Link className='nav_link'  to="/about">About</Link>
      </li>
      <li>
        <Link className='nav_link' to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
  <Outlet />
    </div>
)



}

export default Header