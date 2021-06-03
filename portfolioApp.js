// Loading Environment Variables
require("dotenv").config({ path: `/var/www/env/.env` });
require("dotenv").config();
console.log(`*   Using ${process.env.NODE_ENV} Environment Variables   *`);
const {
  PRIMARY_DB_CONNECT: portfolioDatabase,
  CORS: corsProduction,
  CORS_DEV: corsDev,
  PORT: port,
  POST_CRED: postPassword,
} = process.env;
const corsAddress = process.env.DEV ? corsDev : corsProduction;

// Dependancies
const express = require("express");
const app = express();

// Connect to database -------------------------------------------------------------------------------

// const { AmdMongoose } = require("./database/mongodbAmd");

// Middleware ---------------------------------------------------------------------------------------
//
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "1mb" }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", corsAddress);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
// Checks the request body for the password so that you can post to the database
app.use((req, res, next) => {
  req.body.auth = false;
  req.body.password === postPassword
    ? (req.body.auth = true)
    : (req.body.auth = false);
  next();
});

// Import Routes

// Contact Form endpoint
const portfolioContactRoutes = require("./scripts/routes/portfolioContactRoutes");

// Routes --------------------------------------------------------------------------------------------

// root
app.get("/", (req, res) => {
  res.json({ message: `this is the root api` });
});

// portfolio
app.use("/portfolio/contact", portfolioContactRoutes);

// Port Listeners -----------------------------------------------------------------------------------
//
app.listen(port, (err) => {
  if (err) {
    return console.log("ERROR ", err);
  }
  console.log(`*** Listening on HTTP port ${port} ***`);
  console.log(`^^^ Accepting request from ${corsAddress} Cors Address^^^`);
});
