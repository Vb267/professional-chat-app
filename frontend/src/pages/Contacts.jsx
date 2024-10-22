import React from "react";
import { Link } from "react-router-dom";

// Dummy data for contacts
const contacts = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
];

function Contacts() {
  return (
    <div>
      <h2>Your Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Link to={`/chat/${contact.id}`}>{contact.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contacts;
