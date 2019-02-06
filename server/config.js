// var config = require('./config.js').get(process.env.NODE_ENV);

var config = { 
    // All variable of configuration needs to be here
}

exports.get =  function (env) {
    return config[env] || config.default;
}