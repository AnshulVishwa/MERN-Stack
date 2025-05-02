const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    Day : {
        type : Number,
        required : true,
        unique : true
    },
    Gym : {
        type : Boolean,
        required : true
    },
    FastFood : {
        type : Boolean,
        required : true
    },
    EveningExercise : {
        type : Boolean,
        required : true
    },
    Performance : {
        enum : [
            "Excellent Performance",
            "Well Tried",
            "Can Do better",
            "Worst"
        ]
    }
})

const MODEL = mongoose.model( "data" , Schema )

module.exports = {
    MODEL
}
