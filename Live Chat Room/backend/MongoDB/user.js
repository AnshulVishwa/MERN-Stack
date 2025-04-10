const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
    "username" : {
        type : String,
        required : true,
        unique : true
    },
    "password" : {
        type : String,
        required : true
    },
    "email" : {
        type : String,
        unique : true
    }
})

const USER = mongoose.model( "user_details" , Schema )
module.exports = {
    USER
}
