import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import LoginSelect from "./components/LoginSelect";
import StudentLogin from "./components/StudentLogin";
import AdminLogin from "./components/AdminLogin";
import RegisterAdmin from "./components/RegisterAdmin";
import ForgotPassword from "./components/ForgotPassword";
import Admin from "./components/Admin";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

import "./App.css";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Navbar />

      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<LoginSelect />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/register-admin" element={<RegisterAdmin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </>
  );
}

export default App;