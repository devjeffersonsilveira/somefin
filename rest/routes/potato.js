var conn = require('../conn');
exports.createPotatos = function(req, res) {
  var prep = conn.prepare("insert into potato(desPotato) Values (?)");
  for (var i = 0; i < 10; i++) {
    prep.run("potato" + i, function(err, row) {
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
exports.getPotatos = function(req, res) {
  conn.all("select * from potato", function(err, row) {
    res.json(row);
  });
};

//exports.getPotato = function(req, res){});
