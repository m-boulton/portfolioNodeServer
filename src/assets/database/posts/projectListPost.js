const ProjectListModel = require("../../models/ProjectListModel");

async function projectListPost(data, update) {
  try {
    const post = {
      // parsed from package.json
      name: data.name,
      dependencies: data.dependencies,
      homepage: data.homepage,
      github: data.github,
      // parsed from the readme.md
      readme: data.readme,
    };
    if (update) {
      let dbResponse = await ProjectListModel.updateOne(
        { homepage: data.homepage },
        post
      );
      console.log(`Successfully updated the database : ${data.name}`);
      return dbResponse;
    }
    const postSave = new ProjectListModel(post);
    const dbResponse = await postSave.save();
    console.log(`Successfully saved to the database : ${data.name}`);
    return dbResponse;
  } catch (error) {
    return console.log(`There was an error saving to the database : ${error}`);
  }
}
module.exports = projectListPost;
