import React from "react";

function Notifications({ notifications }) {
  return (
    <div className="notifications">
      <h4>Notifications</h4>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
