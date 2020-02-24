const express = require('express');
const router = express.Router();

// add mongoose and projects model references for CRUD
const mongoose = require('mongoose');
const Project = require('../models/project');

router.get('/', (req, res, next) => {
    // use the Project model & mongoose to select all the projects from MongoDB
    Project.find((err, projects) => {
      if(err) {
          console.log(err);
      }
      else {
          // load the main projects page
          res.render('projects/index', {
              projects: projects
          });
      }
    });
});

// make the controller public
module.exports = router;