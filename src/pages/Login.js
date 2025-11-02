import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/slices/authSlice";

export default function Login() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      dispatch(login({ username }));
      navigate("/users"); // 👈 Навигация без reload
    }
  };

  return (
    <div style={{ 
      textAlign: "center", 
      marginTop: "80px",
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h2 style={{
        color: '#A8E063',
        fontFamily: "'Comic Neue', sans-serif",
        fontSize: '36px',
        fontWeight: 'bold',
        textShadow: '0 0 6px rgba(168, 224, 99, 0.25)',
        marginBottom: '30px'
      }}>
        🔐 Портал Входа
      </h2>
      <form onSubmit={handleLogin} style={{
        background: 'linear-gradient(135deg, rgba(168, 224, 99, 0.1) 0%, rgba(123, 44, 191, 0.1) 100%)',
        padding: '40px',
        borderRadius: '20px',
        border: '2px solid #A8E063',
        boxShadow: '0 8px 30px rgba(168, 224, 99, 0.3)',
        maxWidth: '400px',
        width: '100%'
      }}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Введите имя путешественника"
          style={{ width: '100%', maxWidth: '300px' }}
        />
        <br />
        <button type="submit" style={{ marginTop: '20px', width: '100%', maxWidth: '300px' }}>
          Войти в Мультивселенную
        </button>
      </form>
    </div>
  );
}
