const portfolioDatabaseConnection = require("./../database/portfolioDatabaseConnection");
const contactSchema = require("./../schemas/contactSchema");

// Attaching the model with imported schema to db connection
const contactFormsModel = portfolioDatabaseConnection.model(
  "ContactForms",
  contactSchema
);

// Exporting model for use in routing
module.exports = contactFormsModel;
