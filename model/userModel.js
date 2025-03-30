const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const newUser = new Schema({
    name : {
        type: String, required: true
    },
    roll : {
        type: String, required: true
    },
    job : {
        type : String, required: true
    }
})


const User = model('User', newUser);

module.exports = User;