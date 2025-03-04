const mongoose = require("mongoose")

async function ConnectTo_MongoDB() {
    await mongoose.connect( "mongodb://127.0.0.1:27017/info" )
    .then( () => console.log("MongoDB connected") )
    .catch( (err) => console.log(err) )
}

module.exports = { ConnectTo_MongoDB }