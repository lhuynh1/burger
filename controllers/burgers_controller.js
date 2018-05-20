var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    res.render('index');
});

// burgers on page
router.get('/index', function (req, res) {
    burger.selectAll(function (data) {
        var bgr_obj = { burgers: data };
        res.render('index', bgr_obj);
    });
});

// create the burger
router.post('/burger/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function() {
        res.redirect('/index');
    });
});


// devour the burger
router.post('/burger/eat/:id', function(req, res) {
    burger.updateOne(req.params.id, function() {
        res.redirect('/index');
    });
});

module.exports = router;