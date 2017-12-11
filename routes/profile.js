var express = require('express');
var router  = express.Router();

//var session = express('express-session');

//load local/custom modules
var Profile = require('../controllers/profile');
 

//create  new Profile using validation
router.post('/signup',Profile.createNewProfile);

// Retrieve all Profiles
router.get('/profiles', Profile.getllAllProfile);

// Retrieve single Profile with ProfileId
router.get('/profiles/:profileId', Profile.getProfileById);

// Update Profile with ProfileId
router.put('/profiles/:profileId', Profile.updateProfileInfo);

// Delete Profile with ProfileId
router.delete('/profiles/:profileId', Profile.deleteProfileById);
 

module.exports =router;