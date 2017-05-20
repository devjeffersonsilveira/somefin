var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('rest.db');
//var sql = require('./dbSchema')

db.serialize(function() {
  var sql = "CREATE TABLE IF NOT EXISTS potato ( ";
  sql += "idPotato INTEGER constraint pk_potato primary key, ";
  sql += "desPotato TEXT ";
  sql += "); ";
  db.run(sql);
  sql = "CREATE TABLE IF NOT EXISTS carrot ( ";
  sql += "idCarrot INTEGER constraint pk_carrot primary key, ";
  sql += "idPotato INTEGER, ";
  sql += "desCarrot TEXT,";
  sql += "CONSTRAINT fk_potatoCarrot FOREIGN KEY (idPotato) REFERENCES potato(idPotato)";
  sql += "); ";
  db.run(sql);
})
module.exports = db;
