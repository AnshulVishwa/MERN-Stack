const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json()); 

app.post("/submit", (req, res) => {
    const { username } = req.body;
    
    if (!username) {
        return res.status(400).json({ message: "Username is required" });
    }

    console.log("Received Username:", username);

    res.json({ message: `Username ${username} received successfully!` });
});

app.listen(5000, () => console.log("Server Started at http://localhost:5000/"));
