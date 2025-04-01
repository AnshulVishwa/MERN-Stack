const jwt = require("jsonwebtoken")
const SECRET_KEY = "ANshulVidhi30112205#$!"

function setTokenForUser( user ) {
    const token = jwt.sign( {user} , SECRET_KEY )
    return token
}

function checkTokenOfUser( token , user ){
    const res = jwt.decode(token)
    return res == user
}

module.exports = {
    setTokenForUser,
    checkTokenOfUser
}
