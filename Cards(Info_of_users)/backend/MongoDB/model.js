const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    "username" : {
        type : String,
        required : true,
    },
    "dob" : {
        type : String,
        required : true,
    },
    "age" : {
        type : Number,
        required : true,
    },
    "gender" : {
        type : String,
        required : true,
    },
    "profession" : {
        type : String,
        required : true,
    },
    "description" : {
        type : String,
        required : true,
    },
    "bool" : {
        type : Boolean,
        default : false
    }

} , { timestamps : true })

const INFO = mongoose.model( "cards_info" , Schema )

module.exports = { INFO }