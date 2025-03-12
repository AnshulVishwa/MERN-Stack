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
                httpOnly: true, // ✅ Makes it secure from JS access
                secure: false,  // ✅ Keep false for local dev, true for HTTPS
                sameSite: "lax", // ✅ Allows cross-origin requests (change to "none" if using different origins)
            });
            return res.json({ msg: "User added Successfully", check: true });
        }
        
    } catch (error) {
        console.error("Error in handlePostUser:", error);
        return res.status(500).json({ msg: "Some Error Occurred", check: false });
    }
}

async function handleGetUser( req , res ) {
    console.log("get")
    console.log("Cookie Found : " , req.cookies.token)
    const allUsers = await INFO.find()
    if( allUsers ){
        return res.json({"users" : allUsers})
    }
}

module.exports = {
    handlePostUser,
    handleGetUser
};
