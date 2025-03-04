const express = require("express")
const { handlePostUser } = require("../Controllers/user")
const UserRoute = express.Router()

UserRoute.post( "/" , handlePostUser )

module.exports = { UserRoute }