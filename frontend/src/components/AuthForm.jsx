import React, { useState } from "react";
import axios from "axios";

function AuthForm({ onSubmit }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isLogin
        ? "http://localhost:8000/login"
        : "http://localhost:8000/signup";
      const response = await axios.post(url, { email, password });
      alert(response.data.message); // Alert the response message
      onSubmit(email, password, isLogin);
    } catch (error) {
      console.error(error);
      alert("Something went wrong, please try again.");
    }
  };

  return (
    <div className="auth-form">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Need to create an account?" : "Already have an account?"}
      </button>
    </div>
  );
}

export default AuthForm;
