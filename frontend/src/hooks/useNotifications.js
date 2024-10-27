import { useEffect, useState } from "react";

function useNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8000/ws/notifications");

    socket.onmessage = (event) => {
      const newNotification = event.data;
      setNotifications((prev) => [...prev, newNotification]);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => socket.close();
  }, []);

  return notifications;
}

export default useNotifications;
