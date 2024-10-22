import React from "react";
import { useParams } from "react-router-dom";

// Dummy data for contacts
const contacts = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
];

function ChatWithUser() {
  const { id } = useParams();
  const contact = contacts.find((c) => c.id === parseInt(id));

  return (
    <div>
      <h2>Chatting with {contact ? contact.name : "Unknown User"}</h2>
      <p>
        This is where the chat history will appear for{" "}
        {contact ? contact.name : "this user"}.
      </p>
      {/* Placeholder for chat UI with this contact */}
    </div>
  );
}

export default ChatWithUser;
