import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ChatWithUser() {
  const { id } = useParams();

  // Sample messages with different statuses
  const [messages, setMessages] = useState([
    { id: 1, content: "Hello!", status: "sent" },
    { id: 2, content: "How are you?", status: "delivered" },
    { id: 3, content: "Did you get my message?", status: "read" },
  ]);

  // WebSocket connection to receive real-time updates
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8000/ws/notifications");

    socket.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    socket.onclose = () => console.log("WebSocket connection closed");

    return () => socket.close();
  }, []);

  // Mark messages as read when the chat is viewed
  useEffect(() => {
    const markAsRead = async () => {
      const updatedMessages = messages.map((msg) => {
        if (msg.status === "delivered") {
          msg.status = "read"; // Update status locally
          // Simulate marking the message as read in the backend
          fetch(`/mark_read/${msg.id}`, { method: "POST" });
        }
        return msg;
      });
      setMessages(updatedMessages);
    };

    markAsRead();
  }, [id, messages]);

  // Render ticks based on message status
  const renderTick = (status) => {
    if (status === "sent") {
      return <span>✔️</span>; // Single tick for sent
    } else if (status === "delivered") {
      return <span>✔️✔️</span>; // Double tick for delivered
    } else if (status === "read") {
      return <span style={{ color: "blue" }}>✔️✔️</span>; // Double tick (blue) for read
    }
  };

  return (
    <div>
      <h2>Chatting with User {id}</h2>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>
            {msg.content} {renderTick(msg.status)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatWithUser;
