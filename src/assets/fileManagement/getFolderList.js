const getIgnoreList = require("./getIgnoreList");
const projectLocation = require("./projectLocation");
const folderCrawler = require("./folderCrawler");

async function getFolderList(project) {
  // if (typeof project === 'string')
  let folderPath = await projectLocation(project);
  try {
    const ignore = await getIgnoreList(folderPath);
    return await folderCrawler(folderPath, ignore);
  } catch (err) {
    return { message: "ERROR", error: err };
  }
}

module.exports = getFolderList;
