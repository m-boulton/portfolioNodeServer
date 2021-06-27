const portfolioDatabaseConnection = require("../database/portfolioDatabaseConnection");
const projectListSchema = require("./../schemas/projectListSchema");

// Attaching the model with imported schema to db connection
const projectListModel = portfolioDatabaseConnection.model(
  "projectList",
  projectListSchema
);

// Exporting model for use in routing
module.exports = projectListModel;
