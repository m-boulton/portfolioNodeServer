// Loading Environment Variables
require("dotenv").config({ path: `/var/www/env/.env` });
require("dotenv").config();
const mongoose = require("mongoose");
const { PRIMARY_DB_CONNECT: portfolioDatabase } = process.env;

// Connect to the AMD database -------------------------------------------------------------------------------
const db = mongoose.createConnection(portfolioDatabase, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// const amdContentModel = AmdMongoose.model(
//   "AmdContent",
//   require("../schemas/amd/amdContentSchema")
// );
// const amdNavModel = AmdMongoose.model(
//   "AmdNav",
//   require("../schemas/amd/amdNavSchema")
// );
// const amdSpecItemModel = AmdMongoose.model(
//   "AmdSpecItem",
//   require("../schemas/amd/amdSpecItemSchema")
// );
// const amdSpecListModel = AmdMongoose.model(
//   "AmdSpecList",
//   require("../schemas/amd/amdSpecListSchema")
// );

// module.exports = {
//   amdContentModel,
//   amdNavModel,
//   amdSpecItemModel,
//   amdSpecListModel,
// };
