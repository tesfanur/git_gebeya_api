var mongoose = require('mongoose');
/*
Passenger:
======================
id: Number
fullName: String
age: Number
address:String
phoneNumber:String

*/
var Schema = mongoose.Schema;

var PassengerSchema = new Schema({
    id    : {type: String, required: true,unique:true},
    fullName : {type: String, required: true},//to be fetched from user info
    age : {type: String, required: true},//is this field really needed to be included on ticlet info
    address: {type: String},//try to make this part to be more specific addess
    //so that it incldue passsengers city/subcity/kebele/...
    phoneNumber : {type: String},
    createdAt :{type:Date, default:Date.now},
    modifiedAt :{type:Date, default:Date.now}

});

 

//export user model
module.exports = mongoose.model('Passeger', PassengerSchema);