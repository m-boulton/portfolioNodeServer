const mongoose = require("mongoose");
const { Schema } = mongoose;

const reqString = {
  type: String,
  required: true,
};

// Main schema design
const projectListSchema = new Schema(
  {
    order: Number,
    // parsed from package.json
    name: reqString,
    dependancies: Array,
    homepage: String,
    github: reqString,
    // parsed from the readme.md
    concept: reqString,
    conceptItems: Array,
    description: String,
    languages: Array,
    notables: Array,
  },
  { timestamps: true }
);
// exporting schemas to the model method
module.exports = projectListSchema;
