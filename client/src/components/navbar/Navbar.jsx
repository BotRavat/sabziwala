import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="header">
        <div className="logo">
        <Link to="/">
          <img src="logo/logo1.png" />
        </Link>
        </div>
        <div className="search-wrapper">
          <div className="searchbox">
            <input
              className="search1"
              type="text"
              placeholder=""
              name="search"
              id="search-input"
            />
            <p id="search-input-placeholder"></p>
          </div>
        </div>

        <nav className="navbar-menu">
          <ul className="menuitems">
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
            <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
            <Link to="/signin">SignIn</Link>
            </li>
            <li>
            <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
