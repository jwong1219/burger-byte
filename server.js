var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var PORT = process.env.PORT || 5005;

var app = express();

//provides everything inside /public to the client i.e. css, js, other static assets
app.use(express.static("./public"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//allows us to catch put methods from form requests with modified tags
app.use(methodOverride('_method'));

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function() {
  console.log("listening on port: " + PORT);
});
