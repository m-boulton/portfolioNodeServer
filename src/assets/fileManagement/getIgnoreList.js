const { resolve } = require("path");
const { readdir } = require("fs").promises;
const { readFileSync } = require("fs");

async function getIgnoreList(location) {
  try {
    const directoryContents = await readdir(location);
    if (directoryContents.includes(".crawlignore")) {
      const resolvedPath = resolve(location, ".crawlignore");
      const ignoredFilesArray = await readFileSync(resolvedPath, {
        encoding: "utf-8",
      })
        .toString()
        .split("\n");
      return ignoredFilesArray;
    }
  } catch (error) {
    return error;
  }
  return [];
}

module.exports = getIgnoreList;
