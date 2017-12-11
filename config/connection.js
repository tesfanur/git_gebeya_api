var config  = require('./config');

//create db connection using promises
module.exports.connectMongoDB = function(mongoose){
mongoose.Promise=global.Promise;//overide deprecated promise function
//mongoose.connect('mongodb://localhost/users')
mongoose.connect(config.GEBEYA_DB_URI)
    .then(function () {
          console.log('DB CONNECTION ESTABLISHED SUCCESSFULLY!\n');
    }).catch(function (err) {
        console.log("DB CONNECTION FAILED.\nPEASE CHECK YOUR MONGODB SERVER RUNNING STATUS!\n");
        console.log("ACTUAL ERROR: "+ err.message);
    });
 }
 