import { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({});
  const [fade, setFade] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const progressPercentage =
    (currentQuestion / questions.length) * 100;

  const handleAnswer = (career) => {
    setFade(false);
    setLoading(true);

    setTimeout(() => {
      const updatedScores = { ...scores };
      updatedScores[career] =
        (updatedScores[career] || 0) + 1;
      setScores(updatedScores);

      const nextQuestion = currentQuestion + 1;

      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setFade(true);
        setLoading(false);
      } else {
        let topCareer = "";
        let maxScore = 0;

        for (let career in updatedScores) {
          if (updatedScores[career] > maxScore) {
            maxScore = updatedScores[career];
            topCareer = career;
          }
        }

        const percentage = Math.round(
          (maxScore / questions.length) * 100
        );

        localStorage.setItem("careerResult", topCareer);
        localStorage.setItem("careerPercentage", percentage);

        navigate("/result");
      }
    }, 500);
  };

  return (
    <div className="container">
      <h2>
        Question {currentQuestion + 1} of{" "}
        {questions.length}
      </h2>

      <div className="progress-bar-bg">
        <div
          className="progress-bar-fill"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div
          style={{
            opacity: fade ? 1 : 0,
            transition: "opacity 0.25s ease"
          }}
        >
          <p>{questions[currentQuestion].question}</p>

          {questions[currentQuestion].options.map(
            (option, index) => (
              <button
                key={index}
                onClick={() =>
                  handleAnswer(option.career)
                }
              >
                {option.text}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;