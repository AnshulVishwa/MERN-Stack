const express = require("express")
const body_parser = require("body-parser")
const cors = require("cors")
const { ConnectTo_MongoDB } = require("./MongoDB/connection")
const { UserRoute } = require("./Routes/user")
const cookie_parser = require("cookie-parser")

const app = express()
app.use( express.json() )
app.use( body_parser.json() )

app.use(cookie_parser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));



app.use( "/info" , UserRoute )

ConnectTo_MongoDB()

app.listen( 5000 , () => console.log("Server Started at port 5000") )