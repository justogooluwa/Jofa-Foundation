import React from "react";
import "./ContactUs.css";
import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";

function ContactForm() {
  return (
    <div className="contact-container">
      <div className="form-section">
        <h2>Get in Touch</h2>
        <form>
          <div className="input-row">
            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Email" />
          </div>

          <textarea placeholder="Enter Message" rows="6" />

          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
