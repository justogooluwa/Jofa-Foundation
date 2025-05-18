import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="top-row">
        <div className="logo">
          <h1>JOFA FOUNDATION</h1>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? "bar rotate1" : "bar"}></span>
          <span className={isOpen ? "bar fade" : "bar"}></span>
          <span className={isOpen ? "bar rotate2" : "bar"}></span>
        </div>
      </div>
      <div className={`links ${isOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          Home
        </NavLink>

        <NavLink to="/About" onClick={() => setIsOpen(false)}>
          About
        </NavLink>

        <NavLink to="/Causes" onClick={() => setIsOpen(false)}>
          Latest Causes
        </NavLink>

        <NavLink to="/Contact" onClick={() => setIsOpen(false)}>
          Contact
        </NavLink>
      </div>

      <a href="/Contact">
        <button className="donate" onClick={() => setIsOpen(false)}>
          Contact Us
        </button>
      </a>
    </div>
  );
}

export default Navbar;
