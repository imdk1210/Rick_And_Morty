import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../store/slices/userSlice";

function RegistrationPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false
  });

  const inputStyle = {
    width: '100%',
    padding: '15px 20px',
    marginBottom: '20px',
    fontSize: '16px',
    fontFamily: "'Comic Neue', sans-serif",
    background: 'rgba(26, 26, 46, 0.6)',
    border: '2px solid #A8E063',
    borderRadius: '12px',
    color: '#A8E063',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box',
    boxShadow: '0 2px 10px rgba(168, 224, 99, 0.1)'
  };

  const focusedInputStyle = {
    ...inputStyle,
    borderColor: '#00C851',
    boxShadow: '0 0 20px rgba(0, 200, 81, 0.4)',
    background: 'rgba(26, 26, 46, 0.8)',
    transform: 'translateY(-2px)'
  };

  const handleRegister = () => {
    if (!name || !email || !password) {
      alert("Заполните все поля!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }
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
      padding: '30px',
      minHeight: '70vh'
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
        padding: '40px',
        borderRadius: '20px',
        border: '2px solid #A8E063',
        boxShadow: '0 8px 30px rgba(168, 224, 99, 0.3)',
        maxWidth: '450px',
        width: '100%',
        marginBottom: '20px',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ marginBottom: '25px', textAlign: 'left' }}>
          <label style={{
            display: 'block',
            color: '#A8E063',
            fontFamily: "'Comic Neue', sans-serif",
            fontSize: '14px',
            fontWeight: 'bold',
            marginBottom: '8px',
            textShadow: '0 0 5px rgba(168, 224, 99, 0.25)'
          }}>
            👤 Имя путешественника
          </label>
          <input
            type="text"
            placeholder="Введите ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => setFocused({...focused, name: true})}
            onBlur={() => setFocused({...focused, name: false})}
            style={focused.name ? focusedInputStyle : inputStyle}
          />
        </div>

        <div style={{ marginBottom: '25px', textAlign: 'left' }}>
          <label style={{
            display: 'block',
            color: '#A8E063',
            fontFamily: "'Comic Neue', sans-serif",
            fontSize: '14px',
            fontWeight: 'bold',
            marginBottom: '8px',
            textShadow: '0 0 5px rgba(168, 224, 99, 0.25)'
          }}>
            📧 Почта мультивселенной
          </label>
          <input
            type="email"
            placeholder="example@multiverse.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocused({...focused, email: true})}
            onBlur={() => setFocused({...focused, email: false})}
            style={focused.email ? focusedInputStyle : inputStyle}
          />
        </div>

        <div style={{ marginBottom: '25px', textAlign: 'left' }}>
          <label style={{
            display: 'block',
            color: '#A8E063',
            fontFamily: "'Comic Neue', sans-serif",
            fontSize: '14px',
            fontWeight: 'bold',
            marginBottom: '8px',
            textShadow: '0 0 5px rgba(168, 224, 99, 0.25)'
          }}>
            🔐 Пароль портала
          </label>
          <input
            type="password"
            placeholder="Минимум 6 символов"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setFocused({...focused, password: true})}
            onBlur={() => setFocused({...focused, password: false})}
            style={focused.password ? focusedInputStyle : inputStyle}
          />
        </div>

        <div style={{ marginBottom: '30px', textAlign: 'left' }}>
          <label style={{
            display: 'block',
            color: '#A8E063',
            fontFamily: "'Comic Neue', sans-serif",
            fontSize: '14px',
            fontWeight: 'bold',
            marginBottom: '8px',
            textShadow: '0 0 5px rgba(168, 224, 99, 0.25)'
          }}>
            🔐 Подтвердите пароль
          </label>
          <input
            type="password"
            placeholder="Повторите пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onFocus={() => setFocused({...focused, confirmPassword: true})}
            onBlur={() => setFocused({...focused, confirmPassword: false})}
            style={focused.confirmPassword ? focusedInputStyle : inputStyle}
          />
        </div>

        <button 
          onClick={handleRegister}
          style={{ 
            width: '100%',
            padding: '15px 30px',
            fontSize: '18px',
            fontFamily: "'Comic Neue', sans-serif",
            fontWeight: 'bold',
            color: '#1a1a2e',
            background: 'linear-gradient(135deg, #00C851 0%, #A8E063 100%)',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(168, 224, 99, 0.4)',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(168, 224, 99, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(168, 224, 99, 0.4)';
          }}
        >
          🚀 Создать Портал
        </button>
      </div>
      <p style={{
        color: 'rgba(168, 224, 99, 0.7)',
        fontFamily: "'Comic Neue', sans-serif",
        fontSize: '14px',
        marginTop: '20px',
        maxWidth: '450px'
      }}>
        Присоединяйтесь к сообществу исследователей мультивселенной! 🔬✨
      </p>
    </div>
  );
}

export default RegistrationPage;
