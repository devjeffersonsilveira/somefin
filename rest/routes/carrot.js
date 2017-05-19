var conn = require('../conn');
exports.createCarrots = function(req, res) {
  var prep = conn.db.prepare("insert into carrot(des, idPotato) Values (??)");
  for (var i = 0; i < 10; i++) {
    prep.run("carrot" + i + ", " + i);
  }
  prep.finalize();
};
exports.getCarrots = function(req, res) {
  conn.db.all("select * from carrot");
};

//exports.getCarrot = function(req, res){});
