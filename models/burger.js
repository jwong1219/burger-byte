var orm = require ("../config/orm.js");

var burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(data) {
      callback(data);
    });
  },

  insertOne: function(name, callback) {
    orm.insertOne("burgers", "burger_name", name, function(result) {
      callback(result);
    });
  },

  updateOne: function(id, callback) {
    orm.updateOne("burgers", {"devoured": true}, {"id": id}, function(result) {
      callback(result);
    });
  }
};

module.exports = burger;