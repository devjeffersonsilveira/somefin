var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('rest.db');
var fs = require("fs");
fs.readFile("dbSchema.sql", function(erro, data) {
  if (erro) {
    console.error(erro);
  } else {
    console.log(data.toString());
    db.serialize(function() {
      db.exec(data.toString(), function(err, row){
        if (err) {
          console.error(err);
        }
      });
    });
  }
});
module.exports = db;
