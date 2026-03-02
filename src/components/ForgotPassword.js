import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function ForgotPassword() {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/admin/reset-password",
        { username, newPassword }
      );

      toast.success("Password Reset Successful 🔐");
      navigate("/admin-login");

    } catch (error) {
      toast.error("Error resetting password ❌");
    }
  };

  return (
    <div className="container">
      <h1>🔐 Reset Password</h1>

      <form onSubmit={handleReset}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ForgotPassword;