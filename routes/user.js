var express = require('express');
var router  = express.Router();

//var session = express('express-session');

//load local/custom modules
var User = require('../controllers/user');
 

//create  new user using validation
router.post('/signup',User.createNewUser);

// Retrieve all users
router.get('/users', User.getllAllUser);

// Retrieve single user with UserId
router.get('/users/:userId', User.getUserById);

// Update user with userId
router.put('/users/:userId', User.updateUserInfo);

// Delete user with userId
router.delete('/users/:userId', User.deleteUserById);
 
 //expose router to other files
module.exports =router;