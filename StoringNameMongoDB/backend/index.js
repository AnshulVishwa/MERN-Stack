const express = require("express")
const body_parser = require("body-parser")
const cors = require("cors")
const app = express()
const PORT = 5000

const { Connect_MongoDB } = require("./MongoDB/connect");
const { USER } = require("./MongoDB/Model");

Connect_MongoDB()

app.use(body_parser.json())
app.use(cors())

app.get( "/" , ( req , res ) => {
    res.status(201).json({ "msg" : "Hello Received" })
} )

app.listen( PORT , () => console.log(`Server Started at\nhttp://localhost:${PORT}/`) )