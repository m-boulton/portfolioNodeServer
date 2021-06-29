const portfolioDatabaseConnection = require("./../database/portfolioDatabaseConnection");
const projectListSchema = require("./../schemas/projectListSchema");

// Attaching the model with imported schema to db connection
const ProjectListModel = portfolioDatabaseConnection.model(
  "projectList",
  projectListSchema
);

// Exporting model for use in routing
module.exports = ProjectListModel;
