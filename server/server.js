const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const {SendEmail}= require("./messaging.js");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());



// SMTP Transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});



// Contact endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    console.log("Received contact form:", req.body);
    await SendEmail(name, email, subject, message);
    res.send({ success: true });

  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
