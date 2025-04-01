const { AD_INFO } = require("../MongoDB/Additional_info")

// All Information
    async function GetAllInfo(req , res) {
        if( !req.params.username ) return res.send("")
        const username = req.params.username
        const result = await AD_INFO.find({username : username})
        if(result){
            res.json(result)
        }
        else{
            res.json({msg : "No user found"})
        }
    }
// 

// Profile Picture
async function setProfilePicture( req , res ){
    if( !req.body.pp ) return res.json( { msg : "Profile picture is required" } )
    if( !req.body.username ) return res.json( { msg : "username is required" } )
    const { username , pp } = req.body 
    const result = await AD_INFO.updateOne( 
        { "username" : username },
        { $set : { profile_picture : pp } } 
    )
    if( !result ) return res.json({msg : "Some err occured while updating pp"})
    else res.json( {msg : "Profile picture updated"} )
}

async function getProfilePicture( req , res ) {
    if( !req.params.username ) return
    const username = req.params.username
    const result = await AD_INFO.findOne({"username" : username})
    if( !result ) return res.json({msg : "No user found"})
    return res.json({msg:"Profile Picture found" , profile_picture : `${result.profile_picture}`})
}
// Profile Picture

// Archieve Users

async function getArchieveUsers( req , res ) {
    if( !req.query.username ) return
    const { username } = req.query
    const result = await AD_INFO.findOne({"username" : username})
    if( !result ) return res.json({msg:"Invalid Username"})
    const users = result.archieve_users
    return res.json( {msg : "User found" , users : users } )
}

async function setArchieveUsers( req , res ) {
    if( !req.body.username ) return res.send("username required")
    const { username , user } = req.body

    const check = await AD_INFO.find( { "archieve_users.user" : user } )
    if( check ) return res.json({msg : "Already in archieve"})

    const result = await AD_INFO.findOneAndUpdate({"username" : username} , { $push : { "archieve_users" : {user} } })
    if( !result ) return res.json({msg:"Invalid Username"})
    return res.json({msg : "Archieve users updated Set"})
}

// Archieve Users

// Blocked Users

async function getBlockedUsers( req , res ) {
    if( !req.query.username ) return
    const { username } = req.query
    const result = await AD_INFO.findOne({"username" : username})
    if( !result ) return res.json({msg:"Invalid Username"})
    const users = result.blocked_users
    return res.json( {msg : "User found" , users : users } )
}

async function setBlockedUsers( req , res ) {
    if( !req.body.username ) return res.send("username required")
    const { username , user } = req.body

    const check = await AD_INFO.find( { "blocked_users.user" : user } )
    if( check ) return res.json({msg : "Already in blocked"})

    const result = await AD_INFO.findOneAndUpdate({"username" : username} , { $push : { "blocked_users" : {user} } })
    if( !result ) return res.json({msg:"Invalid Username"})
    return res.json({msg : "Blocked users updated Set"})
}

// Blocked Users

// Description

async function getDescriptionOfUser( req , res ) {
    if( !req.query.username ) return
    const { username } = req.query
    const result = await AD_INFO.findOne({"username" : username})
    if( !result ) return res.json({msg:"Invalid Username"})
    const users = result.description
    return res.json( {msg : "User found" , description : users } )
}

async function setDescriptionOfUser( req , res ) {
    if( !req.body.username ) return res.send("username required")
    const { username , description } = req.body

    const result = await AD_INFO.findOneAndUpdate({"username" : username} , { description : description })
    if( !result ) return res.json({msg:"Invalid Username"})
    return res.json({msg : "Description set successfully"})
}

// Description

module.exports = {
    GetAllInfo,

    setProfilePicture,
    getProfilePicture,

    getArchieveUsers,
    setArchieveUsers,

    getBlockedUsers,
    setBlockedUsers,

    getDescriptionOfUser,
    setDescriptionOfUser
}
