var express = require('express');
var app = express();
var router = require('./routes/routes.js')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'taskmanagerapp';
 
// Use connect method to connect to the server
mongoose.connect(url, function(err, db) {
  console.log("Connected successfully to server");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',router);
// app.use(express.json());
// app.use(express.urlencoded)
app.listen(4011);