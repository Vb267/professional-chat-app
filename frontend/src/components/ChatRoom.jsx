import React, { useState } from "react";

function ChatRoom() {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      const newMessage = { user: "You", text: message };
      setChatHistory([...chatHistory, newMessage]);
      setMessage("");
    }
  };

  return (
    <div className="chat-room">
      <h2>Chat Room</h2>
      <div className="chat-history">
        {chatHistory.map((msg, index) => (
          <p key={index}>
            <strong>{msg.user}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatRoom;
