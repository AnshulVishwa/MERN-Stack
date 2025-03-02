const express = require("express")
const { handlePostReqRes } = require("../Controllers/handlers")

const UserRoute = express.Router()

UserRoute.post( "/" , handlePostReqRes )

module.exports = { UserRoute }