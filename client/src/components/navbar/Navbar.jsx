import React from "react";
import  ReactDOM  from "react";
import "./navbar.css";

export default function Navbar()
{
    return(
        <>
          <div className="header">
    <div className="logo">
      <img src="logo/logo1.png" />
    </div>

    <div className="search-wrapper">
      <div className="searchbox">
        <input className="search1" type="text" placeholder="" name="search" id="search-input" />
        <p id="search-input-placeholder"></p>
      </div>
    </div>

    <nav className="navbar-menu">
      <ul className="menuitems">
        <li><a>Cart</a></li>
        <li><a>Wishlist</a></li>
        <li><a onclick="openForm('SignIn')">Sign In</a></li>
        <li><a>Blog</a></li>
      </ul>
    </nav>
  </div>
        </>
    )
}
