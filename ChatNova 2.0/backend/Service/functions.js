const { USER_D } = require("../MongoDB/user_info");

async function CheckForAnotherUser(username) {
    const result = await USER_D.findOne({"username" : username})
    return ( !result ) ? false : true
}

module.exports = {
    CheckForAnotherUser
}
