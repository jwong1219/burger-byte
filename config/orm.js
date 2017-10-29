var connection = require("./connection.js");


var orm = {
  selectAll: function(table, callback) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, data) {
      if(err) {
        throw err;
        console.log("error retrieving data...");
      }
      else {
        callback(data);
      }
    });
  },

  insertOne: function(table, field, value, callback) {
    var queryString = "INSERT INTO " + table + " (" + field + ")";
    queryString += " VALUE (?);";
    connection.query(queryString, value, function (err, result) {
      if(err) {
        console.log({queryString});
        console.log("error inserting data...");
        throw err;
      }
      else {
        callback(result);
      }
    });
  },

  updateOne: function(table, changes, condition, callback) {
    var queryString = "UPDATE " + table;
    queryString += ' SET ?? = ?';
    queryString += ' WHERE ?? = ?;';
    
    var params = []
    for (var key in changes) {
      params.push(key);
      params.push(changes[key]);
    }
    for (var key in condition) {
      params.push(key);
      params.push(condition[key]);
    }

    connection.query(queryString, params, function (err, result) {
      if(err) {
        console.log({queryString});
        console.log("error inserting data...");
        throw err;
      }
      else {
        callback(result);
      }
    });
  }
};

// orm.selectAll("burgers", function(data) {
//   console.log(data);
// })

// orm.updateOne("burgers", {"devoured": false}, {"burger_name": "my_burger"}, function(data) {
//   console.log(data);
// });

module.exports = orm;
