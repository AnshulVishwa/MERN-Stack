const express = require("express")
const { handlePostUser, handleGetUser } = require("../Controllers/user")
const UserRoute = express.Router()

UserRoute.post( "/" , handlePostUser )
UserRoute.get( "/" , handleGetUser )

module.exports = { UserRoute }