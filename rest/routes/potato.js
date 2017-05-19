var conn = require('../conn');
exports.createPotatos = function(req, res) {
  var prep = db.prepare("insert into potato(des) Values (?)");
  for (var i = 0; i < 10; i++) {
    prep.run("potato" + i);
  }
  prep.finalize();
};
exports.getPotatos = function(req, res) {
  db.all("select * from potato");
};
//exports.getPotato = function(req, res){});
