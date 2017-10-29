var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var PORT = process.env.PORT || 5005;

var app = express();

//provides everything inside /public to the client i.e. css, js, other static assets
app.use(express.static("./public"));

//allows us to catch put methods from form requests with modified tags
app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

