import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Result() {
  const percentage = localStorage.getItem("score") || 0;

  return (
    <div className="container">
      <h1>🎉 Assessment Result</h1>

      <div style={{ width: 200, margin: "40px auto" }}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: "#333",
            pathColor: "#667eea",
            trailColor: "#eee"
          })}
        />
      </div>

      <h2>Your Score: {percentage}%</h2>
    </div>
  );
}

export default Result;