const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs")

const app = express();

app.use(cors());
app.use(bodyParser.json()); 

app.post("/submit", (req, res) => {
    const { username } = req.body;
    fs.appendFile( "./Database.txt" , `Username : ${username}\n` , (err) => {
        console.log(err)
    } )
    res.json({ msg: `Username ${username} received successfully!` });
});

app.listen(5000, () => console.log("Server Started at http://localhost:5000/"));
