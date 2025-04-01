const express = require("express")
const { handleLoginUser, handleSignupUser } = require("../Controllers/userInfo")

const Login_Signup_Router = express.Router()

Login_Signup_Router.post( "/signup" , handleSignupUser )
Login_Signup_Router.post( "/login" , handleLoginUser )

module.exports = {
    Login_Signup_Router
}
