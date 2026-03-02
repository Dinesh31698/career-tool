import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      
      {/* LEFT - LOGO */}
      <div className="nav-left">
        <h2 onClick={() => navigate("/")}>
          🚀 SmartPlatform
        </h2>
      </div>

      {/* CENTER - LINKS */}
      <div className="nav-center">
        <span onClick={() => navigate("/")}>Home</span>
        <span onClick={() => navigate("/student-login")}>Student</span>
        <span onClick={() => navigate("/admin-login")}>Admin</span>
      </div>

      {/* RIGHT - BUTTON */}
      <div className="nav-right">
        <button onClick={() => navigate("/admin-login")}>
          Login
        </button>
      </div>

    </div>
  );
}

export default Navbar;