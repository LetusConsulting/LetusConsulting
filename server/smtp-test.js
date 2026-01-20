const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

transporter.verify((error) => {
  if (error) {
    console.error("❌ SMTP FAILED:", error);
  } else {
    console.log("✅ SMTP CONNECTED SUCCESSFULLY");
  }
});
