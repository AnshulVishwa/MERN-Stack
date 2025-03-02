const mongoose = require("mongoose")

const Schema = mongoose.Schema({
    "username" : {
        type : String,
        required : true
    },
    "password" : {
        type : String,
        required : true
    },
    "remember_me" : {
        type : Boolean
    }
})

const USER = mongoose.model( "signup_info" , Schema )

module.exports = {USER}