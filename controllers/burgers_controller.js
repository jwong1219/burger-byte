var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(request, response) {
  burger.selectAll(function(data) {
    var renderBurgers = {
      burgers: data
    }
    console.log(renderBurgers.burgers);
    response.json(renderBurgers.burgers);//only for testing
    // response.render("index", renderBurgers);
  })
})

router.post("/api/burgers", function(request, response) {
  var name = [request.body.name];
  burger.insertOne(name, function(result) {
    response.json(result);//only for testing
  });
})

router.get("/api/burgers", function(request, response) {
  burger.selectAll(function(data) {
    response.json(data);//only for testing
  })
})

router.put("/api/burgers/:id", function(request, response) {
  burger.updateOne(request.params.id, function(result) {
    if(!result.changedRows) {
      response.status(404).end();
    }
    else {
      response.status(200);
      response.json(result).end();//only for testing
    }
  })
})

module.exports = router;