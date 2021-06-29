const fs = require("fs");
const { DEV } = process.env;

const envSplit = DEV ? "\\" : "/";

async function getFileData(filePathArray) {
  try {
    const fileData = await filePathArray.map((filePath) => {
      const data = fs.readFileSync(filePath, { encoding: "utf-8" });
      let fileName = filePath.split(envSplit).reverse()[0];
      let fileType = filePath.split(".").reverse()[0];
      return { fileName: fileName, fileType: fileType, data: data };
    });

    return fileData;
  } catch (err) {
    console.warn(err);
    return err;
  }
}

module.exports = getFileData;
