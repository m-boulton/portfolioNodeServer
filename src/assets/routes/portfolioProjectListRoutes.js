const express = require("express");
const router = express.Router();
const auth = require("../auth");
const projectListModel = require("./../models/projectListModel");
const updateProjectList = require("./../fileManagement/updateProjectList");
const projectLocation = require("./../fileManagement/projectLocation");
const getSpecificFiles = require("./../fileManagement/getSpecificFiles");

// Routing for Portfolio projects list from my the database---------------------root/portfolio/projectList

router
  .route("/")
  .get(async (req, res) => {
    try {
      if (req.query.test) {
        // const something = await updateProjectList()
        const locations = await projectLocation(test);
        const fileData = await getSpecificFiles(locations);
        res.json({ message: "filepaths", data: locations });
      }
      if (req.query.update) {
        // const something = await updateProjectList()
        const locations = await projectLocation(null, true);
        const fileData = await getSpecificFiles(locations);
        res.json({ message: "filepaths", data: locations });
      }
      res.json("update query not declared");

      // const projectData = await projectListModel.find();
      // // returning the data back to the requester
      // res.json({ message: "PROJECTLIST", data: projectData });
    } catch (err) {
      console.log(`Error Thrown : ${err}`);
      res.json({
        message: "ERROR",
        error: `There was an error getting project list from database --> error: ${err}`,
      });
    }
  })
  .post(auth, async (req, res) => {
    // //   await sendEmail(req.body);
    // //   await postDatabase(req.body);
    // // responds back to the client that form has been submitted correctly
    // res.json({ message: "Success", data: "Form has been submitted." });
  })
  .put(auth, async (req, res) => {
    // //   await sendEmail(req.body);
    // //   await postDatabase(req.body);
    // // responds back to the client that form has been submitted correctly
    // res.json({ message: "Success", data: "Form has been submitted." });
  });

module.exports = router;
