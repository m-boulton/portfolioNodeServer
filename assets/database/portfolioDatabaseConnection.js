// Loading Environment Variables
require("dotenv").config({ path: `/var/www/env/.env` });
require("dotenv").config();
const mongoose = require("mongoose");
const { PRIMARY_DB_CONNECT: portfolioDatabase } = process.env;

// Connect to the AMD database--------------------------------------------
const portfolioDatabaseConnection = mongoose.createConnection(
  portfolioDatabase,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);

// Logging out database connections--------------------------------------
portfolioDatabaseConnection.on("connected", () => {
  console.log("+ Connected to Database +");
});

portfolioDatabaseConnection.on("disconnected", () => {
  console.log("- Disconnected from Database -");
});

portfolioDatabaseConnection.on("error", (error) => {
  console.log(error.message);
});

process.on("SIGINT", async () => {
  await portfolioDatabaseConnection.close();
  process.exit(0);
});

module.exports = {
  portfolioDatabaseConnection,
};
