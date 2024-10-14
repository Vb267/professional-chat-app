import React, { useState } from "react";
import AuthForm from "./components/AuthForm";
import ChatRoom from "./components/ChatRoom";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthSubmit = (email, password, isLogin) => {
    if (isLogin) {
      console.log(`Logging in with email: ${email}`);
      // Simulate authentication (connect to backend later)
      setIsAuthenticated(true);
    } else {
      console.log(`Signing up with email: ${email}`);
      // Simulate sign-up (connect to backend later)
      setIsAuthenticated(true);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Professional Chat Application</h1>
      </header>
      <main>
        {isAuthenticated ? (
          <ChatRoom />
        ) : (
          <AuthForm onSubmit={handleAuthSubmit} />
        )}
      </main>
    </div>
  );
}

export default App;
