import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../store/slices/userSlice";

function RegistrationPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleRegister = () => {
    dispatch(register({ email, name }));
  };

  return (
    <div style={{ 
      textAlign: "center", 
      marginTop: '0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '30px'
    }}>
      <h2 style={{
        color: '#A8E063',
        fontFamily: "'Comic Neue', sans-serif",
        fontSize: '36px',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadow: '0 0 6px rgba(168, 224, 99, 0.25)',
        marginBottom: '30px',
        marginTop: 0,
        padding: 0
      }}>
        📝 Регистрация в Мультивселенной
      </h2>
      <div style={{
        background: 'linear-gradient(135deg, rgba(168, 224, 99, 0.1) 0%, rgba(123, 44, 191, 0.1) 100%)',
        padding: '30px',
        borderRadius: '20px',
        border: '2px solid #A8E063',
        boxShadow: '0 8px 30px rgba(168, 224, 99, 0.3)',
        maxWidth: '400px',
        width: '100%',
        marginBottom: '20px'
      }}>
        <input
          type="text"
          placeholder="Имя путешественника"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: '100%', maxWidth: '300px', marginBottom: '15px' }}
        />
        <br />
        <input
          type="email"
          placeholder="Почта мультивселенной"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', maxWidth: '300px', marginBottom: '20px' }}
        />
        <br />
        <button 
          onClick={handleRegister}
          style={{ width: '100%', maxWidth: '300px' }}
        >
          Создать
        </button>
      </div>
    </div>
  );
}

export default RegistrationPage;
