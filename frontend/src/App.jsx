import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthForm from "./components/AuthForm";
import ChatRoom from "./components/ChatRoom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Contacts from "./pages/Contacts";
import ChatWithUser from "./pages/ChatWithUser";
import Notifications from "./components/Notifications";
import useNotifications from "./hooks/useNotifications";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const notifications = useNotifications();

  const handleAuthSubmit = (email, password, isLogin) => {
    if (isLogin) {
      console.log(`Logging in with email: ${email}`);
      setIsAuthenticated(true);
    } else {
      console.log(`Signing up with email: ${email}`);
      setIsAuthenticated(true);
    }
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Professional Chat Application</h1>
          <Notifications notifications={notifications} />
        </header>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/chat"
              element={
                isAuthenticated ? (
                  <ChatRoom />
                ) : (
                  <AuthForm onSubmit={handleAuthSubmit} />
                )
              }
            />
            <Route
              path="/chat/:id"
              element={
                isAuthenticated ? (
                  <ChatWithUser />
                ) : (
                  <AuthForm onSubmit={handleAuthSubmit} />
                )
              }
            />
            <Route
              path="/contacts"
              element={
                isAuthenticated ? (
                  <Contacts />
                ) : (
                  <AuthForm onSubmit={handleAuthSubmit} />
                )
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
