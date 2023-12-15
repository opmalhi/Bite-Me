const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let ItemSchema = new Schema({
    name: {type : String, required: true},
    desp: {type : String, required: true},
    price: {type : String, required: true},
    image: {type : String, required: true}
});

module.exports = mongoose.model('menuitems', ItemSchema);