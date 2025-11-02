import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header style={{ 
            padding: '20px', 
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            borderBottom: '3px solid #A8E063',
            boxShadow: '0 4px 20px rgba(168, 224, 99, 0.3)',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        }}>
            <nav style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                flexWrap: 'wrap',
                gap: '15px'
            }}>
                <Link 
                    to="/" 
                    style={{ 
                        margin: '5px 10px', 
                        color: '#A8E063',
                        textDecoration: 'none',
                        padding: '8px 15px',
                        borderRadius: '8px',
                        border: '2px solid transparent',
                        transition: 'all 0.3s ease',
                        fontFamily: "sans-serif",
                        fontWeight: 'bold',
                        fontSize: '16px'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(168, 224, 99, 0.2)';
                        e.target.style.borderColor = '#A8E063';
                        e.target.style.boxShadow = '0 0 15px rgba(168, 224, 99, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.borderColor = 'transparent';
                        e.target.style.boxShadow = 'none';
                    }}
                >
                    🏠 Главная
                </Link>
                <Link 
                    to="/movies" 
                    style={{ 
                        margin: '5px 10px', 
                        color: '#A8E063',
                        textDecoration: 'none',
                        padding: '8px 15px',
                        borderRadius: '8px',
                        border: '2px solid transparent',
                        transition: 'all 0.3s ease',
                        fontFamily: "sans-serif",
                        fontWeight: 'bold',
                        fontSize: '16px'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(168, 224, 99, 0.2)';
                        e.target.style.borderColor = '#A8E063';
                        e.target.style.boxShadow = '0 0 15px rgba(168, 224, 99, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.borderColor = 'transparent';
                        e.target.style.boxShadow = 'none';
                    }}
                >
                    🎬 Фильмы
                </Link>
                <Link 
                    to="/favorites" 
                    style={{ 
                        margin: '5px 10px', 
                        color: '#A8E063',
                        textDecoration: 'none',
                        padding: '8px 15px',
                        borderRadius: '8px',
                        border: '2px solid transparent',
                        transition: 'all 0.3s ease',
                        fontFamily: "sans-serif",
                        fontWeight: 'bold',
                        fontSize: '16px'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(168, 224, 99, 0.2)';
                        e.target.style.borderColor = '#A8E063';
                        e.target.style.boxShadow = '0 0 15px rgba(168, 224, 99, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.borderColor = 'transparent';
                        e.target.style.boxShadow = 'none';
                    }}
                >
                    ⭐ Избранные
                </Link>
                <Link 
                    to="/tickets" 
                    style={{ 
                        margin: '5px 10px', 
                        color: '#A8E063',
                        textDecoration: 'none',
                        padding: '8px 15px',
                        borderRadius: '8px',
                        border: '2px solid transparent',
                        transition: 'all 0.3s ease',
                        fontFamily: "sans-serif",
                        fontWeight: 'bold',
                        fontSize: '16px'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(168, 224, 99, 0.2)';
                        e.target.style.borderColor = '#A8E063';
                        e.target.style.boxShadow = '0 0 15px rgba(168, 224, 99, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.borderColor = 'transparent';
                        e.target.style.boxShadow = 'none';
                    }}
                >
                    🎫 Билеты
                </Link>
                <Link 
                    to="/register" 
                    style={{ 
                        margin: '5px 10px', 
                        color: '#A8E063',
                        textDecoration: 'none',
                        padding: '8px 15px',
                        borderRadius: '8px',
                        border: '2px solid transparent',
                        transition: 'all 0.3s ease',
                        fontFamily: "sans-serif",
                        fontWeight: 'bold',
                        fontSize: '16px'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(168, 224, 99, 0.2)';
                        e.target.style.borderColor = '#A8E063';
                        e.target.style.boxShadow = '0 0 15px rgba(168, 224, 99, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.borderColor = 'transparent';
                        e.target.style.boxShadow = 'none';
                    }}
                >
                    📝 Регистрация
                </Link>
            </nav>
        </header>
    );
}

export default Header;
