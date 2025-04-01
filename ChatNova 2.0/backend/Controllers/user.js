const { AD_INFO } = require("../MongoDB/Additional_info")
const { USER_D } = require("../MongoDB/user_info")

async function getAllUsers(req , res) {
    const result = await AD_INFO.find()
    if( !result ) return res.send("Err")
    return res.json(result)
}

// All Information
    async function GetAllInfo(req , res) {
        if( !req.params.username ) return res.send("")
        const username = req.params.username
        const result = await USER_D.find({username : username})
        if(result){
            res.json(result)
        }
        else{
            res.json({msg : "No user found"})
        }
    }
// 

module.exports = {
    getAllUsers,
    GetAllInfo
}
