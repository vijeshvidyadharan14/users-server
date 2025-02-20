const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({

    firstname : {
        type: String,
        required: true
    },
    lastname : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    phonenumber : {
        type : Number,
   }
})

const users = mongoose.model('users', userSchema);
module.exports = users;