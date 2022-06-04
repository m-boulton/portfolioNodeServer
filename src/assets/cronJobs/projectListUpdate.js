const projectLocation = require("./../fileManagement/projectLocation");
const getProjectInformation = require("./../fileManagement/getProjectInformation");
const projectListPostBuilder = require("./../database/dbProcessors/projectListPostBuilder");

// this gets called daily from cronjobs
async function projectsUpdate() {
  const parentFolder = await projectLocation("parent");
  const projectData = await getProjectInformation(parentFolder);
  const saved = await projectListPostBuilder(projectData, true);
}

module.exports = projectsUpdate;
