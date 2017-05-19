var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('rest.db');
//var sql = require('./dbSchema')

db.serialize(function() {
  var sql = "CREATE TABLE IF NOT EXISTS potato ( ";
  sql += "id INTEGER constraint pk_potato primary key, ";
  sql += "des TEXT ";
  sql += "); ";
  sql += "CREATE TABLE IF NOT EXISTS carrot ( ";
  sql += "id INTEGER constraint pk_carrot primary key, ";
  sql += "des TEXT,";
  sql += "idPotato int constrait fk_potatoCarrot foreign key reference (potato.id)";
  sql += "); ";
  db.run(sql);
})
console.log("showhsowaidsedrogas!!");
exports.oi = "bilu";
