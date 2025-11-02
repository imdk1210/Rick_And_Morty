import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PostsList from "./components/PostsList";
import "./App.css";

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      backgroundColor: '#1a1a2e'
    }}>
      <Header />
      <main style={{ 
        flex: '1', 
        padding: '20px', 
        minHeight: '400px',
        position: 'relative',
        zIndex: 1,
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <HomePage />
        <PostsList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
