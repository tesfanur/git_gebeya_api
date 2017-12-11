 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var ProfileSchema = new Schema({
 	user:{type:Schema.ObjectId, ref:"User"},
 	profileImage:{type:Buffer, contentType: String },
 	dateUploaded :{type:Date, default:Date.now}
 });

 var ProfileModel = mongoose.model('Profile', ProfileSchema);
 module.exports= ProfileModel;