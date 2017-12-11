//configuration variables
module.exports = {
	// HTTP PORT
	PORT: process.env.PORT || 9000,
	// DB Connection URI 
	GEBEYA_DB_URI : 'mongodb://localhost/gebeyaDb',
	JWT_SECRET: "shhh", 
	TOKEN_LENGTH: 57,
	SECRET: 'TOKEN_SECRET'
};