const express = require("express")
const cors = require("cors")
const http = require("http")
const { Server } = require("socket.io")
const app = express()
const PORT = 5000

app.use( cors( {
    origin : "http://localhost:5173"
} ) )
app.use( express.urlencoded( { extended : false } ) )
app.use( express.json() )

const server = http.createServer(app)
const io = new Server( server , {
    cors : {
        origin : "http://localhost:5173",
        methods : ["GET" , "POST"]
    }
} )

io.on( "connection" , (socket) => {
    console.log("New User : " , socket.id)

    socket.on( "disconnect" , () => {
        console.log("User Disconnected" , socket.id)
    } )
} )

server.listen( PORT , () => console.log(`🚀 Server started on http://localhost:${PORT}`))
