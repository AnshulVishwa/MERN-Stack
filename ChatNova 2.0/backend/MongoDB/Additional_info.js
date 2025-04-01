const mongoose = require("mongoose")
const users = new mongoose.Schema( {
    "user" : { type : String }
} )

const Schema = new mongoose.Schema( {
    "username" : {
        type : String,
        required : true,
    },
    "archieve_users" : [ users ],
    "profile_picture" : {
        type : String
    },
    "description" : {
        type : String
    },
    "blocked_users" : [ users ]
} )

const AD_INFO = mongoose.model( "additional_info" , Schema )

module.exports = { AD_INFO }
