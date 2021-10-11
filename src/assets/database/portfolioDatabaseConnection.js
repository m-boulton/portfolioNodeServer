// Loading Environment Variables
require("dotenv").config({ path: `/var/www/env/.env` });
require("dotenv").config();
const mongoose = require("mongoose");
const { PORTFOLIO_DB_CONNECT: portfolioDatabase } = process.env;

// Connect to the AMD database--------------------------------------------
const portfolioDatabaseConnection = mongoose.createConnection(
  portfolioDatabase,
  {
    useNewUrlParser: true,
    // deprecated for mongoose 6.0
    // useCreateIndex: true,
    useUnifiedTopology: true,
  }
);

// Logging out database connections--------------------------------------
portfolioDatabaseConnection.on("connected", () => {
  console.log("+ Connected to Portfolio Database +");
});
portfolioDatabaseConnection.on("disconnected", () => {
  console.log("- Disconnected from Portfolio Database -");
});
portfolioDatabaseConnection.on("error", (error) => {
  console.log(error.message);
});
process.on("SIGINT", async () => {
  await portfolioDatabaseConnection.close();
  process.exit(0);
});

module.exports = portfolioDatabaseConnection;
