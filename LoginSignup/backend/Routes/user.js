const express = require("express")
const { handlePostReqRes, handleGetReqRes } = require("../Controllers/handlers")

const UserRoute = express.Router()

UserRoute.post( "/" , handlePostReqRes )
UserRoute.get( "/" , handleGetReqRes )

module.exports = { UserRoute }