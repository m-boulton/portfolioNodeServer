require("dotenv").config({ path: `/var/www/env/.env` });
require("dotenv").config();
const { resolve } = require("path");
const { readdir } = require("fs").promises;
const {
  AMD_FRONT: amdFrontend,
  AMD_BACK: amdBackend,
  PRIMARY_FRONT: portfolioFrontend,
  PRIMARY_BACK: portfolioBackend,
  TEST_DIR: test,
} = process.env;

function projectLocation(location) {
  if (location === "amdFrontend") return amdFrontend;
  if (location === "amdBackend") return amdBackend;
  if (location === "portfolioFrontend") return portfolioFrontend;
  if (location === "portfooioBackend") return portfolioBackend;
  if (location === "test") return test;
  throw `project location doesnt exist : ${location}`;
}

async function folderCrawler(dir) {
  const directoryContents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    directoryContents.map((dirent) => {
      const resolvedPath = resolve(dir, dirent.name);
      return dirent.isDirectory() ? folderCrawler(resolvedPath) : resolvedPath;
    })
  );
  return Array.prototype.concat(...files);
}

async function getFolderList(project) {
  let folderPath = await projectLocation(project);
  try {
    return await folderCrawler(folderPath);
  } catch (err) {
    return { message: "ERROR", error: err };
  }
}

module.exports = getFolderList;
