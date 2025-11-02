import React from "react";

function Ticker(){
    const text = "WUBBA LUBBA DUB DUB! Добро пожаловать в мультивселенную Portal Cinema IT-122! Готовы к приключениям? 🚀 ";
    
    return(
        <div style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            background: 'transparent',
            color: '#A8E063',
            padding: '15px 0',
            borderBottom: '2px solid #A8E063',
            fontFamily: "'Comic Neue', sans-serif",
            fontWeight: 'bold',
            fontSize: '18px',
            textShadow: '0 0 5px rgba(168, 224, 99, 0.3)',
            position: 'relative',
            width: '100%'
        }}>
            <div style={{
                display: 'inline-block',
                letterSpacing: '2px',
                animation: 'scroll 25s linear infinite',
                whiteSpace: 'nowrap'
            }}>
                {text.repeat(3)}
            </div>
            <style>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.333%);
                    }
                }
            `}</style>
        </div>
    )
}

export default Ticker;