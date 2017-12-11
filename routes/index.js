// Load Module Dependencies

//var authRouter = require('./auth');
var userRouter = require('./user');
//var profileRouter = require('./profile');


module.exports = function appRouter(app) {
	// Auth Routes
	//app.use('/auth', authRouter);
	//User router
	app.use('/', userRouter);
	//profile routes
	//app.use('/', profileRouter);

}