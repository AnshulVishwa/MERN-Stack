const express = require("express")
const body_parser = require("body-parser")
const cors = require("cors")

const app = express()
app.use( body_parser.json() )
app.use( cors() )


app.get( "/" , (req , res) => {
    setTimeout( () => {
        res.json({msg : "Hello Home"})
    } , Math.floor(Math.random() * 10)*100 )
} )

app.listen( 5000 , () => console.log("Server Started at port 5000") )