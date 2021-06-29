const contactFormsModel = require("./../../models/contactModel");

async function contactFormsPost(data) {
  const post = new contactFormsModel({
    name: data.name,
    email: data.email,
    subject: data.subject,
    message: data.message,
  });
  try {
    await post.save();
    return console.log(`Successfully save to the database : ${data.subject}`);
  } catch (error) {
    return console.log(`There was an error saving to the database : ${error}`);
  }
}
module.exports = contactFormsPost;
