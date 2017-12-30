var mongoose = require('mongoose');
/*
Payment:
======================
id:Number
ticketId: ObjectId
amountPaid: Number
*/

var Schema = mongoose.Schema;

var PaymentSchema = new Schema({
    id    : {type: String, required: true,unique:true},
    ticketId : {type: String, required: true},
    amountPaid : {type: String, required: true} 
});

//export user model
module.exports = mongoose.model('Payment', PaymentSchema);