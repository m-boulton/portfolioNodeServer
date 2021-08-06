const ProjectListModel = require("./../../models/projectListModel");

async function projectListPost(data, update) {
  try {
    const post = {
      // parsed from package.json
      name: data.name,
      keywords: data.keywords,
      dependencies: data.dependencies,
      homepage: data.homepage,
      github: data.github,
      // parsed from the readme.md
      readme: data.readme,
    };
    // runs only on cronjobs and put requests
    if (update) {
      console.log("updating the projects to the database", Date());
      let dbResponse = await ProjectListModel.update(
        { homepage: data.homepage },
        post,
        { upsert: true }
      );
      console.log(`Successfully updated the database : ${data.name}`);
      return dbResponse;
    }
    // runs only when a post request is made (postman updating)
    const postSave = new ProjectListModel(post);
    console.log("Forcing a project update to the database", Date());
    const dbResponse = await postSave.save();
    console.log(`Successfully saved to the database : ${data.name}`);
    return dbResponse;
  } catch (error) {
    return console.log(`There was an error saving to the database : ${error}`);
  }
}
module.exports = projectListPost;
