const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Blog = require('../../models/blog');
router.get('/', (req, res) => {
    res.send({
        message: 'Hello World'
    })
});
router.get('/getAllBlogs', (req, res) => {
    Blog.find({}).then((data) => {
        res.send(data);
    }).catch((e) => {
        res.status(400).json({
            message: 'connection lost'
        })
    })
});

router.post('/postBlog', (req, res) => {
    const blog = new Blog(req.body)
    blog.save().then(() => {
        res.send({
            message: 'Success'
        })
    }).catch((e) => {
        res.status(400).json({
            message: 'connection lost'
        });
    })
});

module.exports = router;