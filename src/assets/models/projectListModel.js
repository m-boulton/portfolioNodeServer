const portfolioDatabaseConnection = require("./../database/portfolioDatabaseConnection");
const ProjectListSchema = require("./../schemas/ProjectListSchema");

// Attaching the model with imported schema to db connection
const ProjectListModel = portfolioDatabaseConnection.model(
  "projectList",
  ProjectListSchema
);

// Exporting model for use in routing
module.exports = ProjectListModel;
