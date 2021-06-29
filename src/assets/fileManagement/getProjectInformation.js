const { resolve } = require("path");
const { readdir, readFile } = require("fs").promises;

// async function fileReader(path){
//   fs.readFile("", function(err, data) {
//     if (err) throw err;
//     const users = JSON.parse(data);
//        JSON.parse(fs.readFile(resolve(childFolder, "package.json"))
// });
// }

async function getProjectInformation(parentFolder) {
  try {
    const validFolderArray = [];
    const folders = await readdir(parentFolder);
    const folderPaths = await folders.map((dirent) => {
      return resolve(parentFolder, dirent);
    });
    for (const childFolder of folderPaths) {
      const folderContents = await readdir(resolve(parentFolder, childFolder));
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
    return error;
  }
}

module.exports = getProjectInformation;
