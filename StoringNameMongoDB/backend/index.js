const express = require("express")
const body_parser = require("body-parser")
const cors = require("cors")
const app = express()
const PORT = 5000

const { Connect_MongoDB } = require("./MongoDB/connect");
const { UserRoute } = require("./Routes/user")

Connect_MongoDB()

app.use(body_parser.json())
app.use(cors())

app.use("/user" , UserRoute)

app.listen( PORT , () => console.log(`Server Started at\nhttp://localhost:${PORT}/`) )