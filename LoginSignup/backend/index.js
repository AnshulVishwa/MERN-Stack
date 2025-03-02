const express = require("express")
const app = express()
const body_parser = require("body-parser")
const cors = require("cors")
const { connectMongoDB } = require("./MongoDB/mongo")
const { UserRoute } = require("./Routes/user")

// for parsing the data
app.use(body_parser.json())
// for cross-origin requests
app.use(cors())

// /user route handler
app.use( "/user" , UserRoute )

// Connecting MongoDB
connectMongoDB()


app.listen( 5000 , () => console.log("Server Started at port 5000") )