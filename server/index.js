const express = require('express');
const cors = require('cors');
const db = require('./db');
const nodemailer = require('nodemailer');


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/user", (req, res) => {
  console.log("Received POST:", req.body);
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill all fields" });
  }

  const query = "INSERT INTO user (name, email, message) VALUES (?, ?, ?)";
  db.query(query, [name, email, message], (err, results) => {
    if (err) {
      console.error("DB insert error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    // Send Email only after DB insert succeeds
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'lyndseyadam22@gmail.com',        // replace with process.env.EMAIL_USER for safety
        pass: 'iixp lvqf anhv txhk'             // replace with process.env.EMAIL_PASS for safety
      }
    });

    const mailOptions = {
      from: email,
      to: 'ogooluwaakinleye29@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Failed to send email:", error);
        return res.status(500).json({ error: "Failed to send email" });
      } else {
        console.log("Email sent:", info.response);
        return res.json({ message: "User saved and email sent successfully!" });
      }
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
