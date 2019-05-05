const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Dashboard = require('../../models/Dashboard');
router.get('/', (req, res) => {
    res.send({
        message: 'Hello World'
    })
});
router.get('/getAllThumbnails', (req, res) => {
    Dashboard.find({}).then((data) => {
        res.send(data);
    }).catch((e) => {
        res.send(e);
    })
});

router.post('/postThumbnail', (req, res) => {
    const thumbnail = new Dashboard(req.body)
    thumbnail.save().then(() => {
        res.send(thumbnail)
    }).catch((e) => {
        res.status(400).json({
            error: 'connection lost'
        });
    })
});

module.exports = router;