import React from "react";
import footer from "../img/gallery/footer_bg.png";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${footer})` }}>
      <div className="footer-content">
        <div className="footer-column">
          <div className="footer-logo">
            <h1>
              <span className="brand-white">JOFA FOUNDATION</span>
            </h1>
          </div>
        </div>

        <div className="footer-column">
          <h3>Contact Info</h3>
          <p>Address: 3, Joel Adebolu Street Ikorodu Lagos State</p>
          <p>Phone: 09031455536</p>
          <p>Email: jofafoundations@gmail.com</p>
        </div>

        <div className="footer-column">
          <h3>Important Link</h3>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/causes">Latest Causes</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Heaven fruitful doesn't over lesser in days. Appear creeping.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Email Address" />
            <button>📤</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright ©2025 | Made by Ogooluwa</p>
      </div>
    </footer>
  );
}

export default Footer;
