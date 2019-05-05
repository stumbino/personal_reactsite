import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProfileIcon from '../../images/logo.png';
import HamburgerMenuIcon from '../../images/4x/menu-8@4x.png';
const Header = () => {
    return (
      <div>
        <nav className="container-nav">
          <li className="nav-item"><Link to= "/" > <img src={ProfileIcon} className="nav-icon"/><span className="nav-title">William Stumbo</span></ Link> </li>
          <li className="nav-item"><Link to= "/about">About</ Link></li>
          <li className="nav-item"><Link to= "/blog">Blog</Link></li>
          <li className="nav-item"><Link to= "/portfolio">Portfolio</ Link></li>
          <li className="nav-item"><Link to= "/contact">Contact </ Link></li>
        </nav>
      </div>
    )
    }
export default Header;