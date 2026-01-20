const nodemailer = require("nodemailer");
require("dotenv").config();
const {
  CONTACT_EMAIL_TEMPLATE,
  
} = require("./messagetemplate.js");

async function SendEmail(name,customeremail,subject,message) {
  try {
    let email = process.env.EMAIL;
    let pswd = process.env.EMAIL_PASS;
    //console.log("Pswd:"+pswd);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: "2024Application!@#$",
      },
    });
    const info = await transporter.sendMail({
      from: '"Letus Consulting" <applications@faymcapitalltd.com>', // sender address
      to: process.env.RECIPIENT_EMAIL, // list of receivers
      subject: "New Contact Form Submission", // Subject line
      text: "Hello world?", // plain text body
      html: CONTACT_EMAIL_TEMPLATE(name,customeremail,subject,message), // html body
    });
  } catch (err) {
    //logger.error("Error sending customer welcome email:" + err.message);
    console.error("Error sending customer welcome email:" + err.message);
  }
}
module.exports = {
  SendEmail
};