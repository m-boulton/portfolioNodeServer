const fs = require("fs");

async function getFileData(filePathArray) {
  try {
    const fileData = await filePathArray.map((filePath) => {
      const data = fs.readFileSync(filePath, { encoding: "utf-8" });
      let fileName = filePath.split("\\").reverse()[0];
      let fileType = filePath.split(".").reverse()[0];
      console.log(filePath, fileName);
      return { fileName: fileName, fileType: fileType, data: data };
    });
    return fileData;
  } catch (err) {
    console.warn(err);
    return err;
  }
}

module.exports = getFileData;
