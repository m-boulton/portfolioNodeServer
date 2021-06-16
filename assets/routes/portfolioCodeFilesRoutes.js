const express = require("express");
const router = express.Router();
const fs = require("fs");
const auth = require("./../auth");
const getFolderList = require("./../fileManagement/getFolderList");
const getFileData = require("./../fileManagement/getFileData");
const errorReporter = require("./../errors/errorsMain");

// Routing for Portfolio Code Files from my work---------------------

router
  .route("/")
  .get(async (req, res) => {
    //   respond if "type" query is not declared
    if (req.query.type === null || req.query.project === null) {
      // #TODO error loggin implementation
      // const errorResponse = await errorReporter('queryCheck', [req.query.type, req.query.project])

      // return res.json(errorResponse);

      //
      res.json({
        message: "Error",
        error: `the 'type' or 'project' query is empty -- type = ${req.query.type}, -- project = ${req.query.project}`,
      });
      return console.log(
        `file reader endpoint triggered without declaring a file type -- type = ${req.query.type}, -- project = ${req.query.project}`
      );
    }
    try {
      const getFolderListResponse = await getFolderList(
        req.query.type,
        req.query.project
      );
      // FIXME
      console.log("test", getFolderListResponse);
      if (getFolderListResponse == null) {
        return res.json({
          message: "Error",
          error: `there are no ${req.query.type} files in the ${req.query.project} project`,
        });
      }

      const getFileDataResponse = await getFileData(getFolderListResponse);

      res.json({ message: "Data", data: getFileDataResponse });
    } catch (error) {
      console.log(
        `There was an error with file reading ${req.query.type} in ${req.query.project}`,
        error
      );
    }
  })
  .post(auth, async (req, res) => {
    // //   await sendEmail(req.body);
    // //   await postDatabase(req.body);
    // // responds back to the client that form has been submitted correctly
    // res.json({ message: "Success", data: "Form has been submitted." });
  });

module.exports = router;
