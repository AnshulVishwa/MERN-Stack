const express = require("express")

const app = express()

app.use( 5000 , () => console.log("Server Started at port 500") )
