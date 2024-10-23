import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Replace with authenticated user's email
    const email = "john@example.com";

    axios
      .get(`http://localhost:8000/contacts`, {
        params: { email }, // Send email as a parameter
      })
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching contacts!", error);
      });
  }, []);

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
