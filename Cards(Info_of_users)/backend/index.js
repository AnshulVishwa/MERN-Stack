const express = require("express")
const body_parser = require("body-parser")
const cors = require("cors")
const { ConnectTo_MongoDB } = require("./MongoDB/connection")
const { UserRoute } = require("./Routes/user")

const app = express()
app.use( body_parser.json() )
app.use(cors({
    origin: "http://localhost:5173",  // Allow frontend origin
    credentials: true // Allow sending cookies
}));
app.use( express.json() )

app.use( "/info" , UserRoute )

ConnectTo_MongoDB()

app.listen( 5000 , () => console.log("Server Started at port 5000") )