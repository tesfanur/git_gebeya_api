var express = require('express');
var router  = express.Router();

//var session = express('express-session');

//load local/custom modules
var User = require('../controllers/user');
 
//Mount all routes on router express instance

//create  new user using validation
router.post('/signup',User.createNewUser);

// Retrieve all users
router.get('/', User.getAllUser);

// Retrieve single user with UserId
router.get('/:userId', User.getUserById);

// Update user with userId
router.put('/:userId', User.updateUserInfo);

// Delete user with userId
router.delete('/:userId', User.deleteUserById);

//router.get('/', User.homepage);
 
//expose router to other files
module.exports =router;