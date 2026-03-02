import { useNavigate } from "react-router-dom";

function LoginSelect() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">

      {/* HERO SECTION */}
      <div className="hero">
        <h1>🚀 Smart Assessment Platform</h1>
        <p>
          A professional system to manage users, assessments, 
          and performance tracking.
        </p>
      </div>

      {/* ROLE CARDS */}
      <div className="role-section">

        <div className="role-card">
          <h2>👨‍💼 Admin Portal</h2>
          <p>
            Manage users, view analytics, and monitor system activity.
          </p>
          <button onClick={() => navigate("/admin-login")}>
            Enter Admin Dashboard
          </button>
        </div>

        <div className="role-card">
          <h2>🎓 Student Portal</h2>
          <p>
            Take assessments, view results, and track your progress.
          </p>
          <button onClick={() => navigate("/student-login")}>
            Enter Student Portal
          </button>
        </div>

      </div>

    </div>
  );
}

export default LoginSelect;