require("dotenv").config({ path: `/var/www/env/.env` });
require("dotenv").config();
let nodemailer = require("nodemailer");
const messageBuilder = require("./messageBuilder");
const {
  EMAIL_ADMIN: emailAdmin,
  EMAIL_HOST: emailHost,
  EMAIL_USER: emailUser,
  EMAIL_PASS: emailPass,
} = process.env;

async function emailTransporter() {
  return await nodemailer.createTransport({
    host: `${emailHost}`,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: `${emailUser}`,
      pass: `${emailPass}`,
    },
    tls: { rejectUnauthorized: false },
  });
}

module.exports = emailTransporter;
