 var 
 express = require('express'),
 path    = require('path'),
 favicon = require('serve-favicon'),
 morgan  = require('morgan'),
 cookieParser = require('cookie-parser'),
 bodyParser   = require('body-parser'),
 session      = require('express-session'),
 mongoose     = require('mongoose'),
 multer       = require('multer');

//Load local modules
var db      = require('./config/connection');
var config  = require('./config/config');
//var User    = require('./models/user');
var Profile = require('./models/profile');
//var routes  = require('./routes');

//instantiate local variables
var app     = express();
// Require user routes
var router = require('./routes');

//set configuration
app.set('PORT', config.PORT) 
app.set('SECRET', config.SECRET) 

//use middlewares 
// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

//use morgan to log requests to the console
app.use(morgan('dev'));  
app.use(cookieParser());
app.use(session({secret:"gjkjfdgndjnb",resave:false, saveUninitialized:true}));
 
//strat DB connection
db.connectMongoDB(mongoose);

//let router uses express app
router(app);
 
app.listen(app.get('PORT'), function(){
	console.log("\nEXPRESS SERVER APP STARTED LISTENING ON PORT "+app.get('PORT')+"!");
	console.error('PRESS CTRL+C TO EXIT\n'); 
});