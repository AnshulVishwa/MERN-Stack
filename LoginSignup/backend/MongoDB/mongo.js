const mongoose = require("mongoose")

async function connectMongoDB(){
    await mongoose.connect( "localhost:27017/mydatabase" )
    .then( () => console.log("MongoDB connected") )
    .catch( ( err ) => {
        console.log("Some error detected")
        console.log(err)
    } )
}

module.exports = { connectMongoDB }