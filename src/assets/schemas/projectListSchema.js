const mongoose = require("mongoose");
const { Schema } = mongoose;

const reqString = {
  type: String,
  required: true,
};

// Main schema design
const projectListSchema = new Schema(
  {
    // parsed from package.json
    name: reqString,
    dependencies: [String],
    homepage: String,
    github: reqString,
    // parsed from the readme.md
    readme: reqString,
  },
  { timestamps: true }
);
// exporting schemas to the model method
module.exports = projectListSchema;
