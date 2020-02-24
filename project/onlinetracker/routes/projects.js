const express = require('express');
const router = express.Router();

// add mongoose and projects model references for CRUD
const mongoose = require('mongoose');
const Project = require('../models/project');

router.get('/', (req, res, next) => {
    // use the Project model & mongoose to select(read) all the projects from MongoDB
    Project.find((err, projects) => {
        if (err) {
            console.log(err);
        } else {
            // load the main projects page
            res.render('projects/index', {
                projects: projects
            });
        }
    });
});

router.get('/add', (req, res, next) => {
    // load the add view
    res.render('projects/add')
});

router.post('/add', (req, res, next) => {
    // create a new document in the projects collection using the project model
    Project.create({
        // get the data from the form and store it in the mongodb
        name: req.body.projectName,
        description: req.body.projectDescription
    }, (err, newProject) => {
        // if we get an error while storing the data
        if (err) {
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

// GET /projects/delete/foo
// :_id means this method expects a parameter called "_id"
router.get('/delete/:_id', (req, res, next) => {
    // use the mongoose model to delete the selected document
    // http requests has a parameter called _id, and we can access it through it's attribute which is params
    Project.remove({_id: req.params._id}, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/projects');
        }
    });
});

// GET /projects/edit/:_id : display the populated edit form
router.get('/edit/:_id', (req, res, next) => {
    Project.findById(req.params._id, (err, project) => {
        if (err) {
            console.log(err);
        } else {
            res.render('projects/edit', {
                project: project
            });
        }
    });
});


router.post('/edit/:_id', (req, res, next) => {
    Project.findOneAndUpdate({
            _id: req.params._id
        },
        {
            name: req.body.projectName,
            description: req.body.projectDescription
        }, (err, project) => {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/projects');
            }
        });
});


// make the controller public
module.exports = router;