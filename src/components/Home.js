import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const startQuiz = () => {
    if (name.trim() === "") {
      alert("Please enter your name");
      return;
    }
    localStorage.setItem("studentName", name);
    navigate("/quiz");
  };

  return (
    <div className="container">
      <h1>Career Assessment Tool</h1>
      <p>Find the best career for you</p>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />

      <button onClick={startQuiz}>Start Assessment</button>
    </div>
  );
}

export default Home;