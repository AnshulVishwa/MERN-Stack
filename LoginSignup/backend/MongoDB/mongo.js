const mongoose = require("mongoose")

async function connectMongoDB(){
    await mongoose.connect( "mongodb://127.0.0.1:27017/mydatabase" )
    .then( () => console.log("MongoDB connected") )
    .catch( ( err ) => {
        console.log("Some error detected")
        console.log(err)
    } )
}

module.exports = { connectMongoDB }