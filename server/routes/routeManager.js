var express = require('express')
var router = express.Router()

router.use('/hello', require('./hello-route/hello-world'));


module.exports = router