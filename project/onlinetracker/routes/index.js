const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongooose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const User = require('../models/user');


/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', {title: 'Online Tracker'});
});


// GET /about
router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About us',
        projects: [{
            name: 'ajax-php'
        }, {
            name: 'Java-Printer'
        }, {
            name: 'MEAN'
        }, {
            name: 'DSA'
        }]
    });
});

// GET /register
router.get('/register', ((req, res, next) => {
    res.render('register');
}));


// GET /login
router.get('/login', ((req, res, next) => {
    // check the session for error messages to display
    let messages = req.session.messages || [];
    // empty the session message
    req.session.messages = [];

    res.render('login', {
        title: "Please Login",
        messages: messages
    });
}));


/**
 * POST /login
 */

// authenticate('what db are we using')
router.post('/login', passport.authenticate('local', {
    successRedirect: '/projects',
    failureRedirect: '/login'
}));


// POST : /register , use passport to create a new user
router.post('/register', (req, res) => {
    // use the User model & passport to register.
    // send password separately so password can hash it
    User.register(new User({
        username: req.body.username
    }), req.body.password, (err, user) => {
        if (err) {
            res.render('register', {
                message: err
            });
        } else {
            // password has a method to automatically log the user in
            // redirect to the main page
            passport.authenticate('local', (req, res) => {
                res.redirect('/login');
            });
        }
    });
});


module.exports = router;
