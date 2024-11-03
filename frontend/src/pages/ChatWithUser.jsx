import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const dummyMessages = [
  { id: 1, content: "Hello!", status: "sent" },
  { id: 2, content: "How are you?", status: "delivered" },
  { id: 3, content: "Did you get my message?", status: "read" },
];

function ChatWithUser() {
  const { id } = useParams();
  const [messages, setMessages] = useState(dummyMessages);

  useEffect(() => {
    // Simulate receiving messages with updated statuses
  }, []);

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
