import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Admin() {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("adminAuth");
    if (!isAdmin) {
      navigate("/admin-login");
    }
  }, [navigate]);

  const fetchResults = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/results/all"
      );
      setResults(response.data);
    } catch (error) {
      console.log("Error fetching results", error);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin-login");
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/results/delete/${id}`
      );
      fetchResults();
    } catch (error) {
      console.log("Error deleting result", error);
    }
  };

  return (
    <div className="container">
      <h1>📊 Admin Dashboard</h1>

      <button
        onClick={handleLogout}
        style={{ marginBottom: "15px" }}
      >
        Logout
      </button>

      {results.length === 0 ? (
        <p>No results found</p>
      ) : (
        <table
          style={{
            width: "100%",
            marginTop: "20px",
            borderCollapse: "collapse"
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Career</th>
              <th>Score</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result._id}>
                <td>{result.name}</td>
                <td>{result.career}</td>
                <td>{result.percentage}%</td>
                <td>
                  {new Date(result.createdAt).toLocaleString()}
                </td>
                <td>
                  <button
                    onClick={() =>
                      handleDelete(result._id)
                    }
                    style={{
                      background: "red",
                      padding: "5px 10px"
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Admin;