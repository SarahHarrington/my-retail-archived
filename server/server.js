const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
let Item = require('./public/models/myretailModel');

app.use(express.static('server/public'));

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myretail');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let routes = require('./public/routes/myretailRoute');
routes(app);

app.listen(port, function (req, res) {
  console.log('Listening on port', port);
})