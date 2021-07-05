const { resolve, extname } = require("path");
const { readdir } = require("fs").promises;

async function folderCrawler(dir, ignore) {
  const ignoredFilesArray = ignore ? ignore : [];
  const directoryContents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    directoryContents.map((dirent) => {
      if (
        ignoredFilesArray.includes(dirent.name) ||
        ignoredFilesArray.includes(extname(dirent.name))
      )
        return [];
      const resolvedPath = resolve(dir, dirent.name);
      return dirent.isDirectory()
        ? folderCrawler(resolvedPath, ignoredFilesArray)
        : resolvedPath;
    })
  );
  return Array.prototype.concat(...files);
}

module.exports = folderCrawler;
