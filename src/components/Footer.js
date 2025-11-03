import React from "react";

function Footer(){
    return(
        <footer style={{
            background: 'linear-gradient(135deg, #16213e 0%, #1a1a2e 100%)',
            color: '#A8E063',
            padding: '20px',
            textAlign: 'center',
            borderTop: '3px solid #A8E063',
            boxShadow: '0 -4px 20px rgba(168, 224, 99, 0.2)'
        }}>
            <p style={{ margin: 0 }}>
                2025 Rick & Morty Fan Site | Wubba Lubba Dub Dub! 🚀
            </p>
        </footer>
    );
}

export default Footer;
