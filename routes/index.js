// Load Module Dependencies

//var authRouter = require('./auth');
var userRouter = require('./user');
var profileRouter = require('./profile');
var fileUploadRouter = require('../controllers/fileupload');


module.exports = function appRouter(app) {
	// Auth Routes
	//app.use('/auth', authRouter);
	//User router
	app.use('/users', userRouter);
	//profile routes
	//app.use('/profile', profileRouter);
	app.use('/files',fileUploadRouter);

}