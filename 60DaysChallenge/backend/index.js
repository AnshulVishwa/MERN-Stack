require("dotenv").config({path : "./Security/.env"})

const express = require("express")
const app = express()
const cors = require("cors")
const { ConnectMongoDB } = require("./MongoDB/connect")
const { getDataFromDB, postDataIntoDB } = require("./Controllers/functions")

const PORT = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))

ConnectMongoDB()

app.route( "/" )
.get( getDataFromDB )
.post( postDataIntoDB )

app.listen(PORT , () => console.log(`Server Started at http://localhost:${PORT}/`))
