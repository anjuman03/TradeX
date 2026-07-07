import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://tradex-backend-lo2d.onrender.com/login", {
        email,
        password,
      });
      if (response.data.success) {
    localStorage.setItem('token', response.data.token);
    window.location.href = 'https://main.d2vbgqlewv0j8c.amplifyapp.com';
} else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f0f4ff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="card shadow-lg p-5"
        style={{ width: "580px", borderRadius: "20px", border: "none" }}
      >
        <div className="text-center mb-5">
          <h1
            style={{ color: "#387ED1", fontWeight: "bold", fontSize: "2.5rem" }}
          >
            TradeX
          </h1>
          <p className="text-muted fs-5">
            Login to your account and start trading
          </p>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="mb-4">
          <label className="form-label fw-semibold fs-5">Email</label>
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              borderRadius: "10px",
              padding: "14px",
              fontSize: "1.1rem",
            }}
          />
        </div>
        <div className="mb-5">
          <label className="form-label fw-semibold fs-5">Password</label>
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              borderRadius: "10px",
              padding: "14px",
              fontSize: "1.1rem",
            }}
          />
        </div>
        <button
          className="btn btn-primary btn-lg w-100 mb-4"
          onClick={handleSubmit}
          style={{
            borderRadius: "10px",
            backgroundColor: "#387ED1",
            border: "none",
            padding: "14px",
            fontSize: "1.2rem",
          }}
        >
          Login
        </button>
        <p className="text-center text-muted fs-5 mb-0">
          Don't have an account?{" "}
          <a
            href="/signup"
            style={{
              color: "#387ED1",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
