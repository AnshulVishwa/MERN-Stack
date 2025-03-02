const { USER } = require("../MongoDB/model") 

async function handlePostReqRes( req , res ) {
    if( !req.body ) return res.json({"message" : "Username password required"})
        
        const { username , password , value } = req.body
        console.log(value)
    
    if( !username ) return res.json({"message" : "Username is required"})
    if( !password ) return res.json({"message" : "Password is required"})

    const allUsers = await USER.find()
    const exists = allUsers.filter((v) => v.username == username)
    if( exists.length != 0 ) return res.json({"message" : "user already signed in"})
    const result = await USER.create( {
        username,
        password,
        value
    } )
    if( !result )
        return res.json( { "message" : "Some error Occured" } )
    else
        return res.json( { "message" : `Welcome ${result.username}` } )
}

module.exports = {
    handlePostReqRes
}