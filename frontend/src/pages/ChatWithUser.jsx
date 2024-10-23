import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ChatWithUser() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    // Replace with authenticated user's email
    const email = "john@example.com";

    axios
      .get(`http://localhost:8000/chat/${id}`, {
        params: { email }, // Send email as a parameter
      })
      .then((response) => {
        setContact(response.data.contact);
        setChatHistory(response.data.chat_history);
      })
      .catch((error) => {
        console.error("There was an error fetching chat data!", error);
      });
  }, [id]);

  if (!contact) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Chatting with {contact.name}</h2>
      <div>
        {chatHistory.map((message, index) => (
          <p key={index}>
            <strong>{message.sender}</strong>: {message.message}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ChatWithUser;
