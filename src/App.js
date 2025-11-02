import React from "react";
import "./App.css";

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      backgroundColor: '#1a1a2e'
    }}>
      <header style={{ 
        padding: '20px', 
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        borderBottom: '3px solid #A8E063',
        boxShadow: '0 4px 20px rgba(168, 224, 99, 0.3)'
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
      
      <main style={{ 
        flex: '1', 
        padding: '40px', 
        textAlign: 'center'
      }}>
        <h2 style={{
          color: '#A8E063',
          fontFamily: "sans-serif",
          fontSize: '24px'
        }}>
          Welcome to Portal Cinema
        </h2>
        <p style={{
          color: '#A8E063',
          fontFamily: "sans-serif",
          fontSize: '18px',
          marginTop: '20px'
        }}>
          Your portal to the multiverse of cinema!
        </p>
      </main>
      
      <footer style={{
        background: 'linear-gradient(135deg, #16213e 0%, #1a1a2e 100%)',
        color: '#A8E063',
        padding: '20px',
        textAlign: 'center',
        borderTop: '3px solid #A8E063'
      }}>
        <p style={{ margin: 0 }}>
          2025 Portal Cinema IT-122
        </p>
      </footer>
    </div>
  );
}

export default App;
