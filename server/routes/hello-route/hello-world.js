var express = require('express');
var router = express.Router();

router.get('/world', function (req, res, next) {
   var result = 'Hello World!';
   res.send(result);
});

router.get('/world/:param', function (req, res, next) {
  var param = req.params.param;
  var result = 'Hello World with parameter ' + param +' !';
  res.send(result);

});


module.exports = router;