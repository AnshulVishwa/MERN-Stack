

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors()); // So frontend can talk to backend

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // your frontend URL
    methods: ["GET", "POST"],
  },
});

const messages = []; // stores chat in memory

io.on("connection", (socket) => {
  console.log("🟢 New user connected:", socket.id);

  // Send old messages
  socket.emit("chat_history", messages);

  // Receive new messages
  socket.on("send_message", (data) => {
    messages.push(data); // store message
    io.emit("receive_message", data); // broadcast
  });

  socket.on("disconnect", () => {
    console.log("🔴 User disconnected:", socket.id);
  });
});


server.listen(5000, () => {
  console.log("✅ Server running on port 5000");
});
