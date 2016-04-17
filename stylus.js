var express = require('express');
var path = require("path");
var bodyparser = require("body-parser");

var app = express();

// Stylus
app.use(require('stylus').middleware( process.argv[3] || __dirname + '/public'));
// static 
app.use(express.static( process.argv[3] || path.join(__dirname, 'public')));
// body parser
app.use(bodyparser.urlencoded({extended: false}));

app.listen(process.argv[2]);
