require("dotenv").config({ path: `/var/www/env/.env` });
require("dotenv").config();
const {
  AMD_FRONT: amdFrontend,
  AMD_BACK: amdBackend,
  PORTFOLIO_FRONT: portfolioFrontend,
  PORTFOLIO_BACK: portfolioBackend,
  TEST_DIR: test,
} = process.env;

function projectLocation(location, all) {
  if (all)
    return [amdFrontend, amdBackend, portfolioFrontend, portfolioBackend];
  if (location === "amdFrontend") return amdFrontend;
  if (location === "amdBackend") return amdBackend;
  if (location === "portfolioFrontend") return portfolioFrontend;
  if (location === "portfolioBackend") return portfolioBackend;
  if (location === "test") return test;
  throw `project location doesnt exist : ${location}`;
}

module.exports = projectLocation;
