var 
mongoose = require('mongoose'),
bcrypt   = require('bcrypt'),//also check bcryptjs
SALT_WORK_FACTOR=10;//the higher the value the more secure hash it generates

var Schema = mongoose.Schema; 
var UserSchema = new Schema({
    email    : {type: String, required: true,unique:true},
    password : {type: String, required: true},
    username : {type: String, required: true},
    firstName: {type: String},
    lastName : {type: String},
    createdAt :{type:Date, default:Date.now},
    modifiedAt :{type:Date, default:Date.now}

});

//hashing a password before saving it to the database
UserSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, SALT_WORK_FACTOR, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

//export user model
module.exports = mongoose.model('User', UserSchema);