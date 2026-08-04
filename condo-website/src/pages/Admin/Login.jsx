import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminAPI } from "@/api/adminApi";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await AdminAPI.login({ username, password });
      // Assume backend returns a token
      const token = res.data.token;
      localStorage.setItem("adminToken", token);
      navigate("/Admin"); // Redirect after successful login
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="page-container">
      <div className="page-content login-box">
        <h1 className="page-title">Admin Login</h1>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
