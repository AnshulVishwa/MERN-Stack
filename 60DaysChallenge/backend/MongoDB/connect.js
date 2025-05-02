const mongoose = require("mongoose")
require("dotenv").config({path : "../Security/.env"})
const url = process.env.URL_M

async function ConnectMongoDB() {
    await mongoose.connect(url)
    .then( () => console.log("MongoDB connected") )
    .catch( (err) => console.log("Error connecting mongoDB , " , err) )
}

module.exports = {
    ConnectMongoDB
}
