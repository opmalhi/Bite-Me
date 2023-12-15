const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {type : String, required: true},
    username: {type : String, required: true},
    password: {type : String, required: true},
    email: {type : String, required: true},
    DOB: {type : Date, required: true},
    phone: {type : Number, required: true},
    address: {type : String, required: true},
});

module.exports = mongoose.model('customers', UserSchema);