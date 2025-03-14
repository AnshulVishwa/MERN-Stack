const mongoose = require("mongoose")

async function Connect_MongoDB() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Excel")
    .then( () => console.log("Mongo_DB connected") )
    .catch( (err) => {
        console.log(err)
        process.exit(1)
    } )
}

module.exports = {
    Connect_MongoDB
}
