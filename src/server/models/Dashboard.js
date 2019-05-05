const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DashboardSchema = new Schema({
    postId: {
        type: Schema.Types.ObjectId
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    imageUrl: {
        type: String
    }
  });
  
  module.exports = Dashboard= mongoose.model('post', DashboardSchema);
  