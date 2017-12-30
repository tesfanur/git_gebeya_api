var mongoose = require('mongoose');
/*
ReturnPayment:
======================
id:Number
ticketId: ObjectId
amountReturned: Number*/
var Schema = mongoose.Schema;

var ReturnPaymentSchema = new Schema({
    id    : {type: String, required: true,unique:true},
    ticketId : {type: String, required: true},
    amountReturned : {type: String, required: true} 
});

 

//export user model
module.exports = mongoose.model('ReturnPayment', ReturnPaymentSchema);