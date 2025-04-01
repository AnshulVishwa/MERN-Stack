const express = require("express")
const { getAllUsers, GetAllInfo } = require("../Controllers/user")

const User_Router = express.Router()

User_Router.get( "/" , getAllUsers )
User_Router.get( "/all/:username" , GetAllInfo )

module.exports = {
    User_Router
}
