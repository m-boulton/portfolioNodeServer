require("dotenv").config({ path: `/var/www/env/.env` });
require("dotenv").config();
const { EMAIL_ADMIN: emailAdmin, EMAIL_USER: emailUser } = process.env;

function messageBuilder(data) {
  return {
    from: `"Mboulton Services" <${emailUser}>`,
    to: data.emailMe ? `${emailAdmin}, ${data.email}` : `${emailAdmin}`,
    subject: `[Form Submitted to Mboulton.com] ${data.subject}`,
    text: `${data.message}`, // plaintext body
    // html: "<b>Insert Relevant Html Message Here</b>", // html body
  };
}

module.exports = messageBuilder;
