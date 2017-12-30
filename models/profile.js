 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var ProfileSchema = new Schema({
 	email:{type:String, default:''},
 	password:{type:String, default:''},
 	timestamp :{type:Date, default:Date.now}
 });

/* var ProfileModel = mongoose.model('Profile', ProfileSchema);
 module.exports= ProfileModel;*/

 module.exports= mongoose.model('Profile', ProfileSchema); 
