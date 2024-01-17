import nodemailer from "nodemailer";
import "dotenv/config";

const { GMAIL_NET_PASSWORD, GMAIL_NET_FROM } = process.env;

const transportConfig = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: GMAIL_NET_FROM,
    pass: GMAIL_NET_PASSWORD,
  },
};

const transport = nodemailer.createTransport(transportConfig);

/*
const data = {
  to: "rolije3506@rentaen.com",
  subject: "Test email",
  html: "<strong>Test email</strong>",
}; */

const sendEmail = (data) => {
  const email = { ...data, from: GMAIL_NET_FROM };
  return transport.sendMail(email);
};

export default sendEmail;
