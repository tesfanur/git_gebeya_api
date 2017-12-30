/**
 * Load Module Dependencies
 */
//var crypto = require('crypto');

//var config = require('../config');

//Noop function
exports.noop = function noop(req, res){
    res.json({
        message : 'to be implemented'
    }) 
}


//Error handling function
exports.handleError = function handleError(res, err, msg){
    res.status(500),
    res.json({
        message: err.message,
        type : msg
    })
}

exports.showMsg = function(mssg){
 console.log(mssg);
}