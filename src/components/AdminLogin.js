import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/login",
        { username, password }
      );

      if (response.data.message === "Login successful") {
        localStorage.setItem("adminAuth", "true");
        toast.success("Login Successful 🎉");
        navigate("/admin");
      }

    } catch (error) {
      toast.error("Invalid credentials ❌");
    }
  };

  return (
    <div className="container">
      <h1>👨‍💼 Admin Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p style={{ marginTop: "15px" }}>
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => navigate("/register-admin")}
        >
          ➕ Create New Admin
        </span>
      </p>

      <p style={{ marginTop: "10px" }}>
        <span
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => navigate("/forgot-password")}
        >
          🔐 Forgot Password?
        </span>
      </p>
    </div>
  );
}

export default AdminLogin;