const mongoose = require("mongoose")

const Schema = new mongoose.Schema( {
    "name" : {
        type : String,
        required : true
    },
    "dob" : {
        type : String,
        required : true
    },
    "age" : {
        type : Number,
        required : true
    },
    "gender" : {
        type : String,
        required : true
    },
    "username" : {
        type : String,
        required : true,
        unique : true
    },
    "password" : {
        type : String,
        required : true
    }
} )

const USER_D = mongoose.model( "user_details" , Schema )

module.exports = { USER_D }
