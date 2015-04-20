var express = require('express');
var router  = express.Router();
var db   = require('../models/db');


/* View all students in a <table> */
router.get('/all', function (req, res) {
    db.GetAllMovie(function (err, result) {
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
        db.GetByIDMovie(req.query.movie1id, function (err, result)
        {
            if (err) throw err;

            db.GetByMovieIDGenre(req.query.movie1id, function (err, result1)
            {
                if (err) throw err;

                // Send result to the template along with the original student id in case there were no results
                res.render('displayMovie1Info.ejs', {rs: result, movie1id: req.query.movie1id, rs1: result1});
            });
        });
    }
});

// Create Student Form
router.get('/create', function(req, res){
    res.render('createMovie1Form.ejs', {action: '/movie1/create'});
});

// Save Student information
router.post('/create', function (req, res) {
    db.InsertMovie( req.body, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);

            if(typeof result.insertId !== 'undefined') {
                db.GetByIDMovie(result.insertId, function(err, result){

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
router.get('/dropdown', function (req, res)
{
    db.GetAllViewMovie(function (err, result)
    {

            if (err) throw err;
            res.render('displayMovie1DropDown.ejs', {rs: result});
    });
});

// Create Student Form
router.get('/edit', function(req, res)
{
    db.GetByIDMovie(req.query.movie1id, function (err, result) {
        if (err) throw err;

        // Send result to the template along with the original student id in case there were no results
        res.render('editMovie1Form.ejs', {action: '/movie1/edit', rs: result, movie1id: req.query.movie1id});
    });
});

// Save Student information
router.post('/edit', function (req, res) {
    db.UpdateMovie( req.body, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(req.body);

            if(typeof req.body !== 'undefined') {
                db.GetByIDMovie(req.body.MovieID, function(err, result){

                    res.render('displayMovie1InfoSnippet.ejs', {rs: result, movie1id: req.body.MovieID});

                });
            }
            else {
                res.send('Movie was not inserted.');
            }
        }
    );
});

/*
// Create Student Form
router.get('/delete', function(req, res)
{
    db.GetByIDMovie(req.query.movie1id, function (err, result) {
        if (err) throw err;

        // Send result to the template along with the original student id in case there were no results
        res.render('deleteMovie1Form.ejs', {action: '/movie1/delete', rs: result, movie1id: req.query.movie1id});
    });
});
*/

// Save Student information
router.get('/delete', function (req, res) {
    console.log(req.query);

    db.DeleteMovie( req.query, function (err, result)
    {
        if (err) {
            throw err;
        }
        console.log(req.query);

        if(!result)
        {
            res.send('Movie was NOT deleted!!');
        }
        else {
            res.send('Movie was deleted.');
        }
    });
});

module.exports = router;

