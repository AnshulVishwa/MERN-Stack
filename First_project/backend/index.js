const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello Home");
});

app.listen(5000, () => console.log("Server Started at http://localhost:5000"));
