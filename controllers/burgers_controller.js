var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(request, response) {
  burger.selectAll(function(data) {
    var renderBurgers = {
      burgers: data
    }
    console.log(renderBurgers.burgers);
    // response.render("index", renderBurgers);
  })
})