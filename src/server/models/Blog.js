const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BlogSchema = new Schema({
    blogId: {
        type: Schema.Types.ObjectId
    },
    fullname: {
        type: String
    },
    email: {
        type: String
    },
    description: {
        type: String
    },
    gender: {
        type: String
    }
  });
  
  module.exports = Blog= mongoose.model('blog', BlogSchema);
  