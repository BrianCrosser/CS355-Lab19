var express = require('express');
var router  = express.Router();
var db   = require('../models/db');


/* View all students in a <table> */
router.get('/all', function (req, res) {
    db.GetAll(function (err, result) {
            if (err) throw err;
            res.render('displayMovie1Table.ejs', {rs: result});
        }
    );
});


/* View a single students information */
router.get('/', function (req, res) {
    if(req.query.movie1id == null) {
        res.redirect('/movie1/all');
    }
    else {
        db.GetByID(req.query.movie1id, function (err, result) {
                if (err) throw err;

                // Send result to the template along with the original student id in case there were no results
                res.render('displayMovie1Info.ejs', {rs: result, movie1id: req.query.movie1id});
            }
        );
    }
});

// Create Student Form
router.get('/create', function(req, res){
    res.render('createMovie1Form.ejs', {action: '/movie1/create'});
});

// Save Student information
router.post('/create', function (req, res) {
    db.Insert( req.body, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);

            if(typeof result.insertId !== 'undefined') {
                db.GetByID(result.insertId, function(err, result){

                    res.render('displayMovie1InfoSnippet.ejs', {rs: result, movie1id: result.insertId});

                });
            }
            else {
                res.send('Movie was not inserted.');
            }
        }
    );
});

/* View all users in a drop down menu */
router.get('/dropdown', function (req, res) {
    db.GetAllView(function (err, result) {
            if (err) throw err;
            res.render('displayMovie1DropDown.ejs', {rs: result});
        }
    );
});

module.exports = router;

