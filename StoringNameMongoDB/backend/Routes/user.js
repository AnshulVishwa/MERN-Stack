const express = require("express")
const { v4 : uuidv4 } = require('uuid');
const { USER } = require("../MongoDB/Model")
const UserRoute = express.Router()

UserRoute.post( "/" , async ( req , res ) => {
    const id = uuidv4()
    const {username} = req.body 
    await USER.create({
        id,
        username
    })
    .then( () => {
        res.json( { "msg" : `User Created ID - ${id}` } )
    } )
    .catch( (err) => {
        console.log(err)
        res.json( { "msg" : "Error Creating User" } )
    } )
} )

UserRoute.get( "" , async ( req , res ) => {
    const {id} = req.query
    const result = await USER.findOne( {
        id
    } )
    if( result ){
        console.log(result)
        res.json( { "msg" : `User Found ${result.username}` } )
    }
    else{
        res.json( { "msg" : `User Not Found` } )
    }
} )

module.exports = { UserRoute }