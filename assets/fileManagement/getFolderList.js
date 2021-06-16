require("dotenv").config({ path: `/var/www/env/.env` });
require("dotenv").config();
const path = require("path");
const fs = require("fs");
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
  throw console.error(`project location doesnt exist : ${location}`);
}

async function getFolderList(type, project) {
  let folderPath = await projectLocation(project);
  let fileType = `.${type}`;
  try {
    const filePaths = await fs
      .readdirSync(folderPath)
      .map((fileName) => {
        // TODO Add recursive loop for folder crawling
        // const { resolve } = require("path");
        // const { readdir } = require("fs").promises;

        // async function getFiles(dir) {
        //   const dirents = await readdir(dir, { withFileTypes: true });
        //   const files = await Promise.all(
        //     dirents.map((dirent) => {
        //       const res = resolve(dir, dirent.name);
        //       return dirent.isDirectory() ? getFiles(res) : res;
        //     })
        //   );
        //   return Array.prototype.concat(...files);
        // }
        return path.join(folderPath, fileName);
      })
      .filter((file) => path.extname(file) === fileType);
    return filePaths;
  } catch (error) {
    console.log(`Error getting file paths -- ${error}`);
  }
}

module.exports = getFolderList;
