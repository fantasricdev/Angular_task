const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Mydata = new Schema({    
    item1: {
        type: String
    },
    item2: {
        type: String
    },
    item3: {
        type: String
    },
    item4: {
        type: String
    },
    item5: {
        type: String
    },
    item6: {
        type: String
    },
    item7: {
        type: String
    }
});
module.exports = mongoose.model('Mydata', Mydata);