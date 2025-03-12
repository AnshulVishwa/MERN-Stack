const { INFO } = require("../MongoDB/model");
const jwt = require("jsonwebtoken")
const SECRET_KEY = "AnshulVidhi3011"

async function handlePostUser(req, res) {
    try {
        const { name, dob, age, gender, profession, description } = req.body.info;

        const result = await INFO.create({
            username: name,
            dob: dob,
            age: age,
            gender: gender,
            profession: profession,
            description: description
        });

        if (result) {
            const token = jwt.sign({ ...result._doc }, SECRET_KEY);
            res.cookie("token", token, {
                httpOnly: true,  // Prevent client-side access (more secure)
                secure: false,   // Set to `true` in production (HTTPS only)
                domain: "localhost",  // Corrected domain
                path: "/home" // Makes the cookie available for the entire site
            });
        
            return res.json({ msg: "User added Successfully", check: true });
        }
        
    } catch (error) {
        console.error("Error in handlePostUser:", error);
        return res.status(500).json({ msg: "Some Error Occurred", check: false });
    }
}

async function handleGetUser( req , res ) {
    if( req.cookies ) console.log("Cookie Found : " , req.cookies)
    const allUsers = await INFO.find()
    if( allUsers ){
        return res.json({"users" : allUsers})
    }
}

module.exports = {
    handlePostUser,
    handleGetUser
};
