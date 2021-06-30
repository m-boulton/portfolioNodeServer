const { resolve } = require("path");
const { readdir, readFile } = require("fs").promises;

async function getProjectInformation(parentFolder) {
  try {
    const validFolderArray = [];
    const folders = await readdir(parentFolder, { withFileTypes: true });
    const folderPaths = await folders
      .map((dirent) => {
        const resolvedPath = resolve(parentFolder, dirent.name);
        return dirent.isDirectory() ? resolvedPath : null;
      })
      .filter((x) => x);
    for (const childFolder of folderPaths) {
      const folderContents = await readdir(resolve(childFolder));
      if (
        folderContents.includes("package.json") &&
        folderContents.includes("README.md")
      ) {
        const package = await readFile(resolve(childFolder, "package.json"));
        const readme = await readFile(resolve(childFolder, "README.md"), {
          encoding: "utf-8",
        });
        validFolderArray.push({
          package: JSON.parse(package),
          readme: readme,
        });
      }
    }
    return validFolderArray;
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = getProjectInformation;
