//Load module dependencies

/*var debug = require('debug')('api:dal-user');
var moment = require('moment');
var _ = require('lodash');*/

var User = require('../models/user');

/*var returnFields = User.whitelist;
var population = [];*/

//Create a new user
exports.create = function create(userData, cb) { 

    var userModel = new User(userData);

    userModel.save(function saveUser(err, user) {
        if (err) return cb(err);
        if(user) cb(null, user);

        /*exports.get({ _id: data._id }, function(err, user) {
            if (err) return cb(err);

            cb(null, user);
        })

         addUser.save(function(err, user){
            if(err){
                return res.json({error: true});
            }
            res.json({error:false,
                      user: user});
    });*/

    })
};
