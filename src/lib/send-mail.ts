"use server";
import nodemailer from "nodemailer";
//xwgy npxp asys rsdz

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECEIVER = process.env.SMTP_SERVER_RECEIVER;
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export async function sendMail({
  name,
  email,
  sendTo,
  subject,
  message,
  html,
}: {
  name: string;
  email: string;
  sendTo: string;
  subject: string;
  message: string;
  html?: string;
}) {
  try {
    const isVerified = await transporter.verify();
  } catch (error) {
    console.error(
      "Something went wrong",
      SMTP_SERVER_USERNAME,
      SMTP_SERVER_PASSWORD,
      error
    );
    return;
  }
  const info = await transporter.sendMail({
    from: SMTP_SERVER_USERNAME,
    to: SITE_MAIL_RECEIVER,
    subject: `Thinking Math Message: ${subject}`,
    text: `
        You have a new message from Thinking Math
        Name: ${name}, 
        Email: ${email}, 
        Subject: ${subject},  
        
        Message: 
        ${message}`,
    replyTo: email,
    html: html ? html : "",
  });
  console.log("Message sent: %s", info.messageId);
  console.log("Message sent to", SITE_MAIL_RECEIVER);
  return info;
}
