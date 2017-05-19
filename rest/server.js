var conn = require('./conn');
var express = require('express');
potato = require('./routes/potato');
carrot = require('./routes/carrot');
var restapi = express();

// app.configure(function () {
//     app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
//     app.use(express.bodyParser());
// });

restapi.post('/createPotatos', potato.createPotatos);
restapi.get("getPotatos", potato.getPotatos);
//restapi.get("getPotato/:id", potato.getPotato);
restapi.post('/createCarrots', carrot.createCarrots);
restapi.get("getCarrots", carrot.getCarrots);
//restapi.get("getPotato/:id", carrot.getCarrot);


restapi.listen(3000);

console.log("running in http://localhost:3000/");
