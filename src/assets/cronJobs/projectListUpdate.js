const projectLocation = require("./../fileManagement/projectLocation");
const getProjectInformation = require("./../fileManagement/getProjectInformation");
const projectListPostBuilder = require("./../database/dbProcessors/projectListPostBuilder");

async function projectsUpdate() {
  console.log("updating the projects to the database", Date());
  const parentFolder = await projectLocation("parent");
  const projectData = await getProjectInformation(parentFolder);
  const saved = await projectListPostBuilder(projectData, true);
}

module.exports = projectsUpdate;
