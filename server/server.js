const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let Item = require('./public/models/myretailmodel');

app.use(express.static('server/public'));

mongoose.connect('mongodb://localhost/my-retail');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let routes = require('./public/routes/myretailRoute');
routes(app);

app.listen(port, function (req, res) {
  console.log('Listening on port', port);
})