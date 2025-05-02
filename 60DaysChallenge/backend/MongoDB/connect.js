const mongoose = require("mongoose")
const url = process.env.M_URL
console.log(url)

async function ConnectMongoDB() {
    await mongoose.connect(url)
    .then( () => console.log("MongoDB connected") )
    .catch( (err) => console.log("Error connecting mongoDB , " , err) )
}

module.exports = {
    ConnectMongoDB
}
