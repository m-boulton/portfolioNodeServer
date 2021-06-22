const express = require("express");
const router = express.Router();
const sendEmail = require("./../email/contactMailer");
const postDatabase = require("./../database/contactFormsPost");

// Routing for Portfolio contact forms---------------------

router.route("/").post(async (req, res) => {
  await sendEmail(req.body);
  await postDatabase(req.body);

  // responds back to the client that form has been submitted correctly
  res.json({ message: "Success", data: "Form has been submitted." });
});

module.exports = router;