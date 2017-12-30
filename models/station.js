var mongoose = require('mongoose');
/*

Station:
======================
stationId: Number
StationName: String
locationFromStartingPoint: Number//added by me
*/

var Schema = mongoose.Schema;

var StationSchema = new Schema({
    stationId    : {type: Number, required: true,unique:true},
    StationName : {type: Number, required: true},
    locationFromStartingPoint : {type: Number, required: true}
    createdAt :{type:Date, default:Date.now},
    modifiedAt :{type:Date, default:Date.now}

});
 

//export user model
module.exports = mongoose.model('Station', StationSchema);