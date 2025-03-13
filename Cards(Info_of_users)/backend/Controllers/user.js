const { INFO } = require("../MongoDB/model");
const jwt = require("jsonwebtoken");
const { Secret_Key_vault } = require("../Service/SECRET_key");

const accessingVault = Secret_Key_vault("one")
const accessingSecretKey = accessingVault("two")
const SECRET_KEY = accessingSecretKey

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
            const id = result._doc._id.toString()
            let ArrayOfObj = [{ id : id }]
            let value = jwt.sign( { ArrayOfObj } , SECRET_KEY);

            if (req.cookies.token) {
                const token = jwt.decode(req.cookies.token) || { ArrayOfObj: [] };

                token.ArrayOfObj.push({ id: id });
            
                value = jwt.sign({ ArrayOfObj: token.ArrayOfObj }, SECRET_KEY);
            }
            
            res.cookie("token", value , {
                httpOnly: true, 
                secure: false,  
                sameSite: "lax", 
            });

            return res.json({ msg: "User added Successfully", check: true });
        }
        
    } catch (error) {
        console.error("Error in handlePostUser:", error);
        return res.status(500).json({ msg: "Some Error Occurred", check: false });
    }
}

async function handleGetUser( req , res ) {

    if( !req.cookies.token ){
        return res.json( { "msg" : "You have to submit your details first" } )
    }

    const allUsers = await INFO.find()
    let myCards = jwt.decode(req.cookies.token)
    if( allUsers ){
        setTimeout( () => {
            return res.json({"users" : allUsers , myCards : myCards})
        } ,2000 )
    }
}

module.exports = {
    handlePostUser,
    handleGetUser
};
