import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import io from 'socket.io-client';

// Connect to backend
const socket = io("http://localhost:5000");

function App() {
  const username = useLocation().pathname.split("/")[1];
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");

  // Receive message from backend
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => socket.off("receive_message");
  }, []);

  // Send message to backend
  const sendMessage = () => {
    if (message.trim() === "") return;

    const msgData = {
      sender: username,
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    socket.emit("send_message", msgData);
    setMessage(""); // clear input
  };

  return (
    <>
      <h1 className="username">👤 {username}</h1>

      <div className="chatBox flex">
        {chat.map((v, i) => (
          <div key={i} className="box">
            <div className="sender">{v.sender}</div>
            <div className="text">{v.text}</div>
            <div className="time">{v.time}</div>
          </div>
        ))}
      </div>

      <div className="sendChatDiv">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </>
  );
}

export default App;
