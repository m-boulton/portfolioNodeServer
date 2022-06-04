require("dotenv").config({ path: `/var/www/env/.env` });
require("dotenv").config();
const {
  AMD_FRONT: amdFrontend,
  AMD_BACK: amdBackend,
  PORTFOLIO_FRONT: portfolioFrontend,
  PORTFOLIO_BACK: portfolioBackend,
  // this gets the parent directory for all projects
  PARENT: parent,
  // this is for testing on localhost
  TEST_DIR: test,
} = process.env;

function projectLocation(location) {
  if (location === "amd_product_display_website") return amdFrontend;
  if (location === "amd_product_api_node_server") return amdBackend;
  if (location === "portfolio_display_website") return portfolioFrontend;
  if (location === "portfolio_api_node_server") return portfolioBackend;
  if (location === "parent") return parent;
  if (location === "test") return test;
  throw `project location doesnt exist : ${location}`;
}

module.exports = projectLocation;
