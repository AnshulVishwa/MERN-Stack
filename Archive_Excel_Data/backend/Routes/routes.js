const express = require("express")
const { handlePostExcelData } = require("../Controller/functions")
const PostRoute = express.Router()

PostRoute.post( "/" , handlePostExcelData )

module.exports = { PostRoute }
