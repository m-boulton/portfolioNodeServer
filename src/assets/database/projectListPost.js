const projectListModel = require("./../models/projectList");

async function projectList(data) {
  const post = new projectListModel({
    order: data.order,
    // parsed from package.json
    name: data.name,
    dependancies: data.dependancies,
    homepage: data.homepage,
    github: data.github,
    // parsed from the readme.md
    concept: data.concept,
    conceptItems: data.conceptItems,
    description: data.description,
    languages: data.languages,
    notables: data.notables,
  });
  try {
    await post.save();
    return console.log(`Successfully saved to the database : ${data.subject}`);
  } catch (error) {
    return console.log(`There was an error saving to the database : ${error}`);
  }
}
module.exports = projectList;
