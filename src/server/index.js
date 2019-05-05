const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dashboard = require('./routes/api/dashboard');
const os = require('os');
const db = require('./config/keys').mongoURI;
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('dist'));
app.use('/api/dashboard', dashboard);
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
  
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));