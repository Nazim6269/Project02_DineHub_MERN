import nodemailer from "nodemailer";
import { smtpPassword, smtpUsername } from "../secret.js";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  port: 465,
  secure: false,
  auth: {
    user: smtpUsername,
    pass: smtpPassword,
  },
  // tls: { rejectUnauthorized: false },
});

const emailWithNodemailer = async (emailData) => {
  try {
    const mailOptions = {
      from: smtpUsername,
      to: emailData.email,
      subject: emailData.subject,
      html: emailData.html,
    };
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    throw error;
  }
};

export default emailWithNodemailer;
