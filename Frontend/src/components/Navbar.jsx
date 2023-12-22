import React from "react";
import logo from '../img/logo-transparent-png.png'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="">
        <ul className="">
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <a href="/category">Category</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <NavLink to='/user/signup'>Signup</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
