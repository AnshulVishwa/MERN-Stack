const mongoose = require("mongoose")

async function Connect_MongoDB() {
    await mongoose.connect( "mongodb://127.0.0.1:27017/ChatNova" )
    .then( () => console.log("MongoDB connected") )
    .catch( (err) => console.log(`Some err ${err}`) )
}

module.exports = {
    Connect_MongoDB
}
