const mongoose = require("mongoose");
const { Schema } = mongoose;
const {
  portfolioDatabaseConnection: db,
} = require("./../database/portfolioDatabase");

// Attaching the model with imported schema to db connection
const contactFormModel = db.model(
  "ContactForms",
  require("./../schemas/contactSchema")
);

// Exporting model for use in routing
module.exports = contactFormModel;
