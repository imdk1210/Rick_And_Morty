import React from "react";

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
            <h1 style={{ 
                textAlign: 'center',
                color: '#A8E063',
                fontFamily: "sans-serif",
                fontSize: '32px',
                margin: 0
            }}>
                Portal Cinema IT-122
            </h1>
        </header>
    );
}

export default Header;
