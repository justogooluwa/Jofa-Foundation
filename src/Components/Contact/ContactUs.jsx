import React from "react";
import { useState } from "react";
import axios from "axios";
import "./ContactUs.css";

password: "iixp lvqf anhv txhk";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = () => {
    axios
      .post("http://localhost:5000/user", { name, email, message })
      .then(() => {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };
  return (
    <div className="contact-container">
      <div className="form-section">
        <h2>Get in Touch</h2>
        <form>
          <div className="input-row">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <textarea
            placeholder="Enter Message"
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type="button" onClick={submitForm}>
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
