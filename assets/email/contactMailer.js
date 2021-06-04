require("dotenv").config({ path: `/var/www/env/.env` });
require("dotenv").config();
let nodemailer = require("nodemailer");
const messageBuilder = require("./messageBuilder");
const emailTransporter = require("./emailTransporter");
const {
  EMAIL_ADMIN: emailAdmin,
  EMAIL_HOST: emailHost,
  EMAIL_USER: emailUser,
  EMAIL_PASS: emailPass,
} = process.env;

// create reusable transporter object using the default SMTP transport
const transporter = emailTransporter();

// send mail with defined transport object
async function sendEmail(initial) {
  // building email options with passed data
  const mailOptions = await messageBuilder(initial);

  //   sending mail with built data
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: " + info.response);
  });
}

module.exports = sendEmail;
