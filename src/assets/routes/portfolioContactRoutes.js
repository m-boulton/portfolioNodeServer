const express = require("express");
const router = express.Router();
const sendEmail = require("./../email/contactMailer");
const contactFormsPost = require("./../database/posts/contactFormsPost");

// Routing for Portfolio contact forms---------------------

router.route("/").post(async (req, res) => {
  try {
    // FIXME build proper error handling for response
    await sendEmail(req.body);
    await contactFormsPost(req.body);

    // responds back to the client that form has been submitted correctly
    res.json({ message: "Success", data: "Form has been submitted." });
  } catch (err) {
    res.json({ message: "this error was thrown", error: err });
  }
});

module.exports = router;
