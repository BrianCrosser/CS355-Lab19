var express = require('express');
var router  = express.Router();
var db   = require('../models/db');


/* View all students in a <table> */
router.get('/all', function (req, res) {
    db.GetAllRating(function (err, result) {
            if (err) throw err;
            res.render('displayRating1Table.ejs', {rs: result});
        }
    );
});


/* View a single students information */
router.get('/', function (req, res) {
    if(req.query.rating1id == null) {
        res.redirect('/rating1/all');
    }
    else {
        db.GetByIDRating(req.query.rating1id, function (err, result) {
                if (err) throw err;

                // Send result to the template along with the original student id in case there were no results
                res.render('displayRating1Info.ejs', {rs: result, rating1id: req.query.rating1id});
            }
        );
    }
});

// Create Student Form
router.get('/create', function(req, res){
    db.GetAllViewMovie(function (err, result)
    {
        if (err) throw err;
        db.GetAllViewUser(function (err, result1)
        {
            if (err) throw err;
            res.render('createRating1Form.ejs', {action: '/rating1/create', rs: result, rs1: result1});
        });
    });
    //res.render('createGenre1Form.ejs', {action: '/genre1/create'});
});

// Save Student information
router.post('/create', function (req, res) {
    db.InsertRating( req.body, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);

            if(typeof result.insertId !== 'undefined') {
                db.GetByIDRating(result.insertId, function(err, result)
                {
                    res.render('displayRating1InfoSnippet.ejs', {rs: result, rating1id: result.insertId});

                });
            }
            else {
                res.send('Rating was not inserted.');
            }
        }
    );
});

module.exports = router;

