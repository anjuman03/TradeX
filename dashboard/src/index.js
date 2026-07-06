import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

// Read token from URL if redirected from login/signup
const params = new URLSearchParams(window.location.search);
const urlToken = params.get('token');

if (urlToken) {
    localStorage.setItem('token', urlToken);
    window.history.replaceState({}, '', '/');
}

const token = localStorage.getItem('token');

const AuthPopup = () => {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', zIndex: 9999
    }}>
      <div style={{
        backgroundColor: 'white', borderRadius: '16px',
        padding: '40px', width: '420px', textAlign: 'center'
      }}>
        <h2 style={{ color: '#387ED1', fontWeight: 'bold', marginBottom: '10px' }}>TradeX</h2>
        <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '30px' }}>
          Please login or signup to access the dashboard
        </p>
        <button
          className="btn btn-primary w-100 mb-3"
          style={{ padding: '12px', fontSize: '1.1rem', borderRadius: '8px', backgroundColor: '#387ED1', border: 'none' }}
          onClick={() => window.location.href = 'http://localhost:3000/login'}
        >
          Login
        </button>
        <button
          className="btn btn-outline-primary w-100"
          style={{ padding: '12px', fontSize: '1.1rem', borderRadius: '8px' }}
          onClick={() => window.location.href = 'http://localhost:3000/signup'}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {!token ? (
        <AuthPopup />
      ) : (
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      )}
    </BrowserRouter>
  </React.StrictMode>
);