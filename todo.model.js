const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let User = new Schema({
    name: {
        type: String
    },
    age: {
        type: String
    },
    sex:{
        type:String
    },
    major:{
        type:String
    }
});
module.exports = mongoose.model('User', User);