var express = require('express');
var router  = express.Router();
var db   = require('../models/db');


/* View all students in a <table> */
router.get('/all', function (req, res) {
    db.GetAllUser(function (err, result) {
            if (err) throw err;
            res.render('displayUser1Table.ejs', {rs: result});
        }
    );
});


/* View a single students information */
router.get('/', function (req, res) {
    if(req.query.user1id == null) {
        res.redirect('/user1/all');
    }
    else {
        db.GetByIDUser(req.query.user1id, function (err, result)
        {
            if (err) throw err;

           // Send result to the template along with the original student id in case there were no results
           res.render('displayUser1Info.ejs', {rs: result, user1id: req.query.user1id});

        });
    }
});

// Create Student Form
router.get('/create', function(req, res){
    res.render('createUser1Form.ejs', {action: '/user1/create'});
});

// Save Student information
router.post('/create', function (req, res) {
    db.InsertUser( req.body, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);

            if(typeof result.insertId !== 'undefined') {
                db.GetByIDUser(result.insertId, function(err, result){

                    res.render('displayUser1InfoSnippet.ejs', {rs: result, user1id: result.insertId});

                });
            }
            else {
                res.send('User was not inserted.');
            }
        }
    );
});

// Create Student Form
router.get('/edit', function(req, res)
{
    db.GetByIDUser(req.query.user1id, function (err, result)
    {
        if (err) throw err;

        // Send result to the template along with the original student id in case there were no results
        res.render('editUser1Form.ejs', {action: '/user1/edit', rs: result, user1id: req.query.user1id});
    });
});

// Save Student information
router.post('/edit', function (req, res) {
    db.UpdateUser( req.body, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(req.body);

            if(typeof req.body !== 'undefined') {
                db.GetByIDUser(req.body.UserID, function(err, result){

                    res.render('displayUser1InfoSnippet.ejs', {rs: result, user1id: req.body.UserID});

                });
            }
            else {
                res.send('User was not inserted.');
            }
        }
    );
});

// Save Student information
router.get('/delete', function (req, res) {
    console.log(req.query);

    db.DeleteUser( req.query, function (err, result)
    {
        if (err) {
            throw err;
        }
        console.log(req.query);

        if(!result)
        {
            res.send('User was NOT deleted!!');
        }
        else {
            res.send('User was deleted.');
        }
    });
});

module.exports = router;

