const getIgnoreList = require("./getIgnoreList");
const projectLocation = require("./projectLocation");
const folderCrawler = require("./folderCrawler");

async function getFolderList(project) {
  let folderPath = await projectLocation(project);
  try {
    const ignore = await getIgnoreList(folderPath);
    return ignore;
    return await folderCrawler(folderPath, ignore);
  } catch (err) {
    return { message: "ERROR", error: err };
  }
}

module.exports = getFolderList;
