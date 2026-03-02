import { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentLogin() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleStart = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    localStorage.setItem("studentName", name);
    navigate("/quiz");
  };

  return (
    <div className="container">
      <h1>🎓 Student Login</h1>

      <form onSubmit={handleStart}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <button type="submit">
          Start Assessment
        </button>
      </form>
    </div>
  );
}

export default StudentLogin;