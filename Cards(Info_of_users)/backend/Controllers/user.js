const { INFO } = require("../MongoDB/model");

async function handlePostUser(req, res) {
    try {
        console.log("Body  ->  " , req.body)
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
            return res.json({ msg: "User added Successfully", check: true });
        }
    } catch (error) {
        console.error("Error in handlePostUser:", error);
        return res.status(500).json({ msg: "Some Error Occurred", check: false });
    }
}

async function handleGetUser( req , res ) {
    const allUsers = await INFO.find()
    if( allUsers ){
        return res.json({"users" : allUsers})
    }
}

module.exports = {
    handlePostUser,
    handleGetUser
};
