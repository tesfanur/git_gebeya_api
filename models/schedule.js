var mongoose = require('mongoose');
/*
Schedule:
======================
scheduleId: Number
sourceStationId:ObjectId
destinationStationId: Number
price: Nmuber
distanceBetweenStations: Number
*/

var Schema = mongoose.Schema;
//try to redesign this schema so that your can clearly relate the schedule with
// the static data regarding stations records
var ScheduleSchema = new Schema({
    scheduleId      : {type: Number, required: true,unique:true},
    sourceStationId : {type: Number, required: true},
    destinationStationId    : {type: Number, required: true},
    price                   : {type: Number, required:true},
    distanceBetweenStations : {type: Numebr},
    createdAt  :{type:Date, default:Date.now},
    modifiedAt :{type:Date, default:Date.now}

});

 

//export user model
module.exports = mongoose.model('Schedule', ScheduleSchema);