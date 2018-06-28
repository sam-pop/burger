const express = require('express');
const Burger = require('../models/burger');

let router = express.Router();
let burger = new Burger();

// GET route
router.get('/', function (req, res) {
    burger.selectAll(function (data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// POST route
router.post('/api/burgers', function (req, res) {
    burger.insertOne(req.body.name, function (result) {
        res.json({
            id: result.insertId
        });
    });
});

// UPDATE route
router.put('/api/burgers/:id', function (req, res) {
    burger.updateOne(req.params.id, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;