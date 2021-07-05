const { resolve } = require("path");
const { readdir } = require("fs").promises;
const { readFileSync } = require("fs");
const { DEV } = process.env;

const envSplit = DEV ? "\r\n" : "\n";

async function getIgnoreList(location) {
  try {
    const directoryContents = await readdir(location);
    if (directoryContents.includes(".crawlignore")) {
      const resolvedPath = resolve(location, ".crawlignore");
      const ignoredFilesArray = await readFileSync(resolvedPath, {
        encoding: "utf-8",
      })
        .toString()
        .split(envSplit);
      return ignoredFilesArray.filter((x) => x != "");
    }
  } catch (error) {
    return error;
  }
  return [];
}

module.exports = getIgnoreList;
