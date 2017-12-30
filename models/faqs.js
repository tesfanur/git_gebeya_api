var mongoose = require('mongoose');
/*FAQs:
=================
id:Number
datePosted: Date
postedBy: ObjectId
question: String
answer: String*/

var Schema = mongoose.Schema;
//frequently asked question schema
var FaqSchema = new Schema({
    question : {type: String, required: true},
    answer: {type: String, required: true},
    postedBy : {type: String, required: true},
    datePosted : {type: String},
    dateModified : {type: String} 
});

 

//export user model
module.exports = mongoose.model('FAQs', FaqSchema);