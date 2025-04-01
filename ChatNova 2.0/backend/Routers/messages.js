const express = require("express")
const { setMessage, getMessage , getAllMsgs, setAllMsgsAsRead } = require("../Controllers/messages")
const msgRouter = express.Router()

msgRouter.post( "/set" , setMessage )
msgRouter.get( "/get" , getMessage )
msgRouter.get( "/getAll" , getAllMsgs )
msgRouter.post( "/setReadAll" , setAllMsgsAsRead )

module.exports = {
    msgRouter
}
