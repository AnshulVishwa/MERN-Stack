const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const { Connect_MongoDB } = require("./MongoDB/connection");
const { Login_Signup_Router } = require("./Routers/login_signup");
const { ad_info_Router } = require("./Routers/ad_info");
const { User_Router } = require("./Routers/users");
const { msgRouter } = require("./Routers/messages");

const cors = require("cors");

const PORT = 5000;
const app = express();
const server = http.createServer(app);

Connect_MongoDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", Login_Signup_Router);
app.use("/ad_info", ad_info_Router);
app.use("/user", User_Router);
app.use("/msg", msgRouter);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("sendMessage", (data) => {
        io.emit("receiveMessage", data);
    });

    socket.on("disconnect", () => {
        console.log(`User Disconnected: ${socket.id}`);
    });
});

server.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
