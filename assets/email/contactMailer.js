require("dotenv").config({ path: `/var/www/env/.env` });
require("dotenv").config();
const messageBuilder = require("./messageBuilder");
const emailTransporter = require("./emailTransporter");

// send mail with defined transport object
async function sendEmail(initial) {
  // building email options with passed data
  const mailOptions = await messageBuilder(initial);
  // building email transporter
  const transporter = await emailTransporter();

  //   sending mail with built data
  let res = await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Email sent: " + info.response);
  });
}

module.exports = sendEmail;
