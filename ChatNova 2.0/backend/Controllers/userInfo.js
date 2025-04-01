const { AD_INFO } = require("../MongoDB/Additional_info")
const { USER_D } = require("../MongoDB/user_info")
const { CheckForAnotherUser } = require("../Service/functions")

async function handleLoginUser( req , res ) {
    if( 
        !req.body.username,
        !req.body.password
     ) return res.json({"msg" : "Body is required"})
    const { username , password } = req.body
    const userExists = await CheckForAnotherUser(username)
    let result = await USER_D.find( {
        username,
        password
    } )
    if( result.length == 0 ) result = undefined
    if( !result && userExists ) return res.json({msg : "Invalid username or password"})
    else if( !result && !userExists ) return res.json({msg : "No user found Signup Please"})
    else return res.json({msg : "Login Success" , redirect : true})
}

async function handleSignupUser( req , res ) {
    if( 
        !req.body.name,
        !req.body.dob,
        !req.body.age,
        !req.body.gender,
        !req.body.username,
        !req.body.password
     ) return res.json({"msg" : "Body is required"})
    const { name , dob , age , gender , username , password } = req.body
    const user = await CheckForAnotherUser(username)
    if( user ) return res.json( {"msg" : "Username already exists"} )
    const result = await USER_D.create( {
        name,
        dob,
        age,
        gender,
        username,
        password
    } ) 
    if( result ) {
        const pp = AD_INFO.create( {
            "username" : username,
            "profile_picture" : "default.png"
        } )
        if( !pp ) console.log("Errr")
        return res.json( { msg : "User created" , profile : "default.png" } )
    }
    else res.json( { msg : "Some error Occured please try again" } ) 
}

module.exports = {
    handleLoginUser,
    handleSignupUser
}
