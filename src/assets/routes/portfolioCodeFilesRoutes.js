const express = require("express");
const router = express.Router();
const auth = require("../auth");
const getFolderList = require("../fileManagement/getFolderList");
const getFileData = require("../fileManagement/getFileData");

// Routing for Portfolio Code Files from my work---------------------

router
  .route("/")
  .get(async (req, res) => {
    try {
      if (!req.query.project) {
        throw `file reader endpoint triggered without declaring a project parameter --> project = ${req.query.project}`;
      }

      // Get the file paths and names
      const getFolderListResponse = await getFolderList(req.query.project);
      if (!getFolderListResponse)
        throw `there are no files in the ${req.query.project} project`;
      if (getFolderListResponse.message === "ERROR")
        throw getFolderListResponse.error;

      // Send file locations and get the file data back
      const getFileDataResponse = await getFileData(getFolderListResponse);
      if (!getFileDataResponse)
        throw `there are no files in the ${req.query.project} project`;
      if (getFileDataResponse.message === "ERROR")
        throw getFileDataResponse.error;

      // returning the data back to the requester
      res.json({ message: "DATA", data: getFileDataResponse });
    } catch (err) {
      res.json({
        message: "ERROR",
        error: `There was an error with file reading --> error: ${err}`,
      });
      console.log(`Error Thrown : ${err}`);
    }
  })
  .post(auth, async (req, res) => {
    // //   await sendEmail(req.body);
    // //   await postDatabase(req.body);
    // // responds back to the client that form has been submitted correctly
    // res.json({ message: "Success", data: "Form has been submitted." });
  });

module.exports = router;
