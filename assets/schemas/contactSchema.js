const mongoose = require("mongoose");
const { Schema } = mongoose;

const reqString = {
  type: String,
  required: true,
};

// Main schema design
const contactSchema = new Schema(
  { name: reqString, email: reqString, subject: String, message: String },
  { timestamps: true }
);
// exporting schemas to the model method
module.exports = contactSchema;
