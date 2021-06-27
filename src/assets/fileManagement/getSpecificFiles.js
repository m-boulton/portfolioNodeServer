const { resolve } = require("path");
const { readdir } = require("fs").promises;
const { readFileSync } = require("fs");
const { DEV } = process.env;

const envSplit = DEV ? "\r" : "\n";

async function getSpecificFiles(locations) {
  try {
    const responseArray = await Promise.all(
      locations.map((relativePath) => {
        const packagePath = resolve(relativePath, "package.json");
        const readmePath = resolve(relativePath, "README.md");
        return { package: packagePath, readme: readmePath };
      })
    );
    return responseArray;

    // const responseArray = [];
    // locations.forEach((itemPath) => {
    //   const directoryContents = await readdir(itemPath);
    //   if (directoryContents.includes("package.json", "README.md")) {
    //     const packagePath = resolve(location, "package.json");
    //     const readmePath = resolve(location, "README.md");
    //     return responseArray.push({ package: packagePath, readme: readmePath });
    //   }
    //   throw `failed getting location files : ${itemPath}`;
    // });
    // return responseArray;
    // // const directoryContents = await readdir(locations);
    // // if (directoryContents.includes("package.json", "README.md")) {
    // //   const packagePath = resolve(location, "package.json");
    // //   const readmePath = resolve(location, "README.md");
    // //   const ignoredFilesArray = await readFileSync(resolvedPath, {
    // //     encoding: "utf-8",
    // //   })
    // //     .toString()
    // //     .split(envSplit);
    // //   return ignoredFilesArray;
    // // }
  } catch (error) {
    return error;
  }
  return [];
}

module.exports = getSpecificFiles;
