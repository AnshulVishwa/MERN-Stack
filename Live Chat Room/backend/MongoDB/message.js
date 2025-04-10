const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
    "text" : {
        type : String
    },
    "sender" : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user_details",
        required : true
    },
    "time" : {
        type : String
    },
})

const MSG = mongoose.model("messages" , Schema)

module.exports = { MSG }
