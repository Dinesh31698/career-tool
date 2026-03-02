import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import axios from "axios";
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Result() {
  const navigate = useNavigate();

  const name = localStorage.getItem("studentName");
  const career = localStorage.getItem("careerResult");
  const percentage = Number(
    localStorage.getItem("careerPercentage")
  );

  const [showResult, setShowResult] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowResult(true), 300);
    setTimeout(() => setShowConfetti(false), 3000);

    // 🔥 Save result to backend
    const saveResult = async () => {
      try {
        await axios.post("http://localhost:5000/api/results/save", {
          name,
          career,
          percentage
        });
        console.log("Result saved to database ✅");
      } catch (error) {
        console.log("Error saving result ❌", error);
      }
    };

    saveResult();

  }, []);

  const descriptions = {
    "Software Developer":
      "You enjoy solving technical problems and building applications.",
    Doctor:
      "You like helping people and are interested in healthcare.",
    Designer:
      "You are creative and enjoy visual challenges.",
    Entrepreneur:
      "You enjoy leadership and business challenges.",
    "Civil Services":
      "You are motivated to serve society and administration."
  };

  const emojis = {
    "Software Developer": "💻",
    Doctor: "🩺",
    Designer: "🎨",
    Entrepreneur: "🚀",
    "Civil Services": "🏛️"
  };

  const restartQuiz = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="container">
      {showConfetti && <Confetti numberOfPieces={250} />}

      <h1>🎉 Assessment Result 🎉</h1>

      {showResult && (
        <>
          <h2>Congratulations {name}! 🎊</h2>

          <div style={{ fontSize: "60px", margin: "15px 0" }}>
            {emojis[career]}
          </div>

          <h2 style={{ color: "#667eea" }}>{career}</h2>

          <div style={{ width: 120, margin: "20px auto" }}>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                pathColor: "#667eea",
                textColor: "#333",
                trailColor: "#eee"
              })}
            />
          </div>

          <p>{descriptions[career]}</p>

          <button onClick={restartQuiz}>
            Take Test Again
          </button>
        </>
      )}
    </div>
  );
}

export default Result;