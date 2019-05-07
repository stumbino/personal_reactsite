const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dashboard = require('./routes/api/dashboard');
const blog = require('./routes/api/blog');
const os = require('os');
const db = require('./config/keys').mongoURI;
const app = express();
const serverless = require('serverless-http')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('dist'));
app.use('/api/dashboard', dashboard);
app.use('/api/blog', blog);
app.get('/api/getUsername', (req, res) => res.send({ username: 'Hello'}));

mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

//module.exports.handler = serverless(app);
