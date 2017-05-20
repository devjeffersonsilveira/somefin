var conn = require('../conn');
exports.createCarrots = function(req, res) {
  var prep = conn.prepare("insert into carrot(desCarrot, idPotato) Values (?,?)");
  for (var i = 0; i < 10; i++) {
    prep.run("carrot" + i, i, function(err, row) {
      if (err) {
        console.log(err);
        res.status(500);
      } else {
        res.status(202);
      };
      res.end();
    });
  }
  prep.finalize();
};
exports.getCarrots = function(req, res) {
  conn.all("select * from carrot", function(err, row) {
    res.json(row);
  });
};
exports.getCarrot = function(req, res) {
  var id = req.params.id;
  conn.serialize(function() {

    conn.get("select * from carrot where idCarrot = " + id, function(err, row) {
      if (err) {
        console.err(err);
        res.status(500);
      } else {
        res.json(row);
      }
    });
  });
}
//exports.getCarrot = function(req, res){});
