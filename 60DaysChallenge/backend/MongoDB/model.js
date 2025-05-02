const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    Day : {
        type : Number,
        required : true,
        unique : true
    },
    Running : {
        enum : [ "Morning" ]
    }
})
