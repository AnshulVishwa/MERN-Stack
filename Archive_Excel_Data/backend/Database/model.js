const mongoose = require("mongoose")

const Schema = new mongoose.Schema( {} , { strict : false } )

const EXCEL = mongoose.model("data" , Schema)

module.exports = { EXCEL }
