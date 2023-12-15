const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let ResSchema = new Schema({
    name: {type : String, required: true},
    email: {type : String, required: true},
    bookTime: {type : String, required: true},
    date: {type : Date, required: true},
    contact: {type : Number, required: true},
    
});

module.exports = mongoose.model('reservations', ResSchema);