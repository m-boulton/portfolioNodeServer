const projectListPost = require("./../posts/projectListPost");

async function projectListPostBuilder(projectList, update) {
  // taking in an array of objects with {package: JSON, readme: data}
  // loop each array item
  //
  try {
    const array = [];
    for (const project of projectList) {
      let projectObject = {};
      // parsing data from package.json
      projectObject.name = project.package.name;
      projectObject.homepage = project.package.homepage;
      projectObject.github = project.package.repository.url;
      projectObject.dependencies = [
        ...Object.keys(project.package.dependencies),
        ...Object.keys(project.package.devDependencies),
      ];
      // parsing data from readme.md
      projectObject.readme = project.readme;

      const postResponse = await projectListPost(projectObject, update);
      array.push(postResponse);
    }
    return array;
  } catch (err) {
    console.log(err);
    return err;
  }
}

module.exports = projectListPostBuilder;
