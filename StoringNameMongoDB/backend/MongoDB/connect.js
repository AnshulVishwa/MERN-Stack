const mongoose = require("mongoose")

async function Connect_MongoDB() {
    await mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")
    .then( () => console.log("MongoDB Connected") )
    .catch( ( err ) => console.log(err) )
}

module.exports = { Connect_MongoDB }