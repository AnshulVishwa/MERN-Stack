const express = require("express")
const { setProfilePicture, getProfilePicture, getArchieveUsers, setArchieveUsers, getBlockedUsers, setBlockedUsers, getDescriptionOfUser, setDescriptionOfUser, GetAllInfo } = require("../Controllers/ad_info")

const ad_info_Router = express.Router()

// All Info
ad_info_Router.get( "/all/:username" , GetAllInfo )

// Profile Picture
ad_info_Router.post( "/pp" , setProfilePicture )
ad_info_Router.get( "/pp/:username" , getProfilePicture )

// Archieve Users
ad_info_Router.get( "/archieve" , getArchieveUsers )
ad_info_Router.post( "/archieve" , setArchieveUsers )

// // Description 
ad_info_Router.get( "/description" , getDescriptionOfUser)
ad_info_Router.post( "/description" , setDescriptionOfUser )

// // Archieve Users
ad_info_Router.get( "/blocked" , getBlockedUsers )
ad_info_Router.post( "/blocked" , setBlockedUsers )

module.exports = {
    ad_info_Router
}
