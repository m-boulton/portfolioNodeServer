const express = require("express");
const router = express.Router();
const auth = require("./../auth");
const ProjectListModel = require("./../models/projectListModel");
const projectLocation = require("./../fileManagement/projectLocation");
const getProjectInformation = require("./../fileManagement/getProjectInformation");
const projectListPostBuilder = require("./../database/dbProcessors/projectListPostBuilder");

// Routing for Portfolio projects list from my the database---------------------root/portfolio/projectList

router
  .route("/")
  .get(async (req, res) => {
    try {
      const projectData = await ProjectListModel.find();
      // returning the data back to the requester
      res.json({ message: "PROJECTLIST", data: projectData });
    } catch (err) {
      console.log(`Error Thrown : ${err}`);
      res.json({
        message: "ERROR",
        error: `There was an error getting project list from database --> error: ${err}`,
      });
    }
  })
  .post(auth, async (req, res) => {
    try {
      const parentFolder = await projectLocation("parent");
      const projectData = await getProjectInformation(parentFolder);
      const saved = await projectListPostBuilder(projectData, false);
      return res.json({ message: "POSTED", data: saved });
    } catch (err) {
      console.log(`Error Thrown : ${err}`);
      res.json({
        message: "ERROR",
        error: `There was an error posting project list from database --> error: ${err}`,
      });
    }
  })
  .put(auth, async (req, res) => {
    try {
      const parentFolder = await projectLocation("parent");
      const projectData = await getProjectInformation(parentFolder);
      const saved = await projectListPostBuilder(projectData, true);
      return res.json({ message: "UPDATED", data: saved });
    } catch (err) {
      console.log(`Error Thrown : ${err}`);
      res.json({
        message: "ERROR",
        error: `There was an error updating project list from database --> error: ${err}`,
      });
    }
  });

module.exports = router;
