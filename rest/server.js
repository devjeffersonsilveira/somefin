var express = require('express');
var restapi = express();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('rest.db');

db.serialize(function() {
  var command = "CREATE TABLE IF NOT EXISTS potato ( "
  command += "id INTEGER IDENTITY  constraint pk_potato primary key, "
  command += "des TEXT "
  command += ");"
    db.run(command);
  //  db.run("INSERT INTO counts (key, value) VALUES (?, ?)", "counter", 0);
});
