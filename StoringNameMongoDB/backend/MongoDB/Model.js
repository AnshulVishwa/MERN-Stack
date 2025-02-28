const mongoose = require("mongoose")

const Schema = mongoose.Schema( {
    id : {
        type : String,
        required : true,
        unique : true,
    },
    username : {
        type : String,
        required : true
    }
} )

const USER = mongoose.model( "username" , Schema )

module.exports = {USER}