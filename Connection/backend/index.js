const express = require("express")
const app = express()

app.get("/" , ( req , res ) => {
    res.send("Hello Vidhi I am Backend")
})

app.listen( 5000 , () => console.log("Server started at port 5000") )