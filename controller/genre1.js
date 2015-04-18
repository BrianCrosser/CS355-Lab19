var express = require('express');
var router  = express.Router();
var db   = require('../models/db');


/* View all students in a <table> */
router.get('/all', function (req, res) {
    db.GetAllGenre(function (err, result) {
            if (err) throw err;
            res.render('displayGenre1Table.ejs', {rs: result});
        }
    );
});


/* View a single students information */
router.get('/', function (req, res) {
    if(req.query.genre1id == null) {
        res.redirect('/genre1/all');
    }
    else {
        db.GetByIDGenre(req.query.genre1id, function (err, result) {
                if (err) throw err;

                // Send result to the template along with the original student id in case there were no results
                res.render('displayGenre1Info.ejs', {rs: result, genre1id: req.query.genre1id});
            }
        );
    }
});

// Create Student Form
router.get('/create', function(req, res){
    db.GetAllViewMovie(function (err, result)
    {
        if (err) throw err;
        res.render('createGenre1Form.ejs', {action: '/genre1/create', rs: result});
    });
    //res.render('createGenre1Form.ejs', {action: '/genre1/create'});
});

// Save Student information
router.post('/create', function (req, res) {
    db.InsertGenre( req.body, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);

            if(typeof result.insertId !== 'undefined') {
                db.GetByIDGenre(result.insertId, function(err, result)
                {
                    res.render('displayGenre1InfoSnippet.ejs', {rs: result, genre11id: result.insertId});

                });
            }
            else {
                res.send('Genre was not inserted.');
            }
        }
    );
});

module.exports = router;

