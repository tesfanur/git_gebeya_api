var config  = require('./config');

//create db connection using NODEJS NATIVE promises 
module.exports.connectMongoDB = function(mongoose){

mongoose.Promise=global.Promise;//overide deprecated promise function 

mongoose.connect(config.AA_LRT_TICKETING_DB_URI, {useMongoClient: true,
				  connectTimeoutMS: 1000})
    .then(function () {
          console.log('DB CONNECTION ESTABLISHED SUCCESSFULLY!\n');
    }).catch(function (err) {
        console.log("DB CONNECTION FAILED.\nPEASE CHECK YOUR MONGODB SERVER RUNNING STATUS!\n");
        console.log("ACTUAL ERROR: "+ err.message);
    })
    
 } 
 