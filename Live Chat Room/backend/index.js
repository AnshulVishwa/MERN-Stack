const fs = require("fs").promises;
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

// 🟡 Global message store
let messages = [];

// 📥 Load messages from file on startup
async function loadMessages() {
  try {
    const filedata = await fs.readFile("./messages.txt", "utf-8");
    const lines = filedata.trim().split("\n");
    messages = lines.map(line => JSON.parse(line));
    console.log("📂 Messages loaded from file");
  } catch (err) {
    console.error("❌ Error reading messages file:", err);
  }
}

// 📝 Append new message to file
async function saveMessageToFile(msg) {
  try {
    await fs.appendFile("./messages.txt", JSON.stringify(msg) + "\n");
  } catch (err) {
    console.error("❌ Error saving message to file:", err);
  }
}

// 💬 Socket.io setup
io.on("connection", (socket) => {
  console.log("🟢 New user connected:", socket.id);

  // ✅ Just send in-memory messages to the new user
  socket.emit("chat_history", messages);

  socket.on("send_message", (data) => {
    messages.push(data);              // Store in memory
    saveMessageToFile(data);          // Store in file
    io.emit("receive_message", data); // Broadcast to all
  });

  socket.on("disconnect", () => {
    console.log("🔴 User disconnected:", socket.id);
  });
});

// 🚀 Start server after loading messages
loadMessages().then(() => {
  server.listen(5000, () => {
    console.log("✅ Server running on port 5000");
  });
});
