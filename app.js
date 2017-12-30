var express      = require('express'), 
	morgan       = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser   = require('body-parser'),
	session      = require('express-session'),
	mongoose     = require('mongoose');



 //Load local modules
var db      = require('./config/connection');
var config  = require('./config/config');
var User    = require('./models/user'); 
var Profile = require('./models/profile');
var display = require('./lib/utils').showMsg; 
 
//instantiate express server
var app     = express();
 
//configuration your app
app.set('PORT', config.PORT) 
app.set('SECRET', config.SECRET) 

//strat DB connection
db.connectMongoDB(mongoose);

//use middlewares
app.use(bodyParser.json());//parse json object from html body
app.use(morgan('dev')); //Logging HTTP Method and URL 
app.use(cookieParser());
app.use(session(
	{secret:"kjlrtgsdf",
	resave:false, 
	saveUninitialized:true}));

/*
TODO: 
authentication middleware using passportjs and third party passport strategies [facebook & google+]
....
*/

 
// Require user routes
var router =require('./routes');
router(app); 
 
app.listen(app.get('PORT'), function(){   
    display("\nEXPRESS SERVER APP STARTED LISTENING REQUESTS ON PORT "+app.get('PORT')+"!");
    display('PRESS CTRL+C TO EXIT\n'); 
});