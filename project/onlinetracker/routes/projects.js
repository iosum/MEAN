const express = require('express');
const router = express.Router();

// add mongoose and projects model references for CRUD
const mongoose = require('mongoose');
const Project = require('../models/project');

router.get('/', (req, res, next) => {
    // use the Project model & mongoose to select(read) all the projects from MongoDB
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

router.get('/add',(req, res, next) => {
    // load the add view
    res.render('projects/add')
});

router.post('/add',(req, res, next) => {
   // create a new document in the projects collection using the project model
    Project.create({
        // get the data from the form
        name: req.body.projectName,
        description: req.body.projectDescription
    }, (err, newProject)=> {
        // if we get an error while storing the data
        if(err) {
            // log the error to the console
            console.log(err);
        }
        // otherwise, the data is stored successfully and we can redirect to the main page
        else {
            // load the updated foods index
            res.redirect('/projects');
        }
    })
});

// make the controller public
module.exports = router;