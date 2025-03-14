const express = require("express")
const app = express()
const PORT = 5000
const cors = require("cors")
const cookie_parser = require("cookie-parser")
const { Connect_MongoDB } = require("./Database/connection")
const { PostRoute } = require("./Routes/routes")

Connect_MongoDB()

app.use( cookie_parser() )
app.use( express.json() )
app.use( cors( {
    origin : "http://localhost:5173",
    credentials : true
} ) )

app.use( "/" , PostRoute )

app.listen( PORT , () => console.log("Server Started at Port : ", PORT) )
