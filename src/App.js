import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PostsList from "./components/PostsList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviePage from "./pages/MoviesPage";
import Detail from "./pages/Detail";
import "./App.css";

function App() {
  return (
    <Router>
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
          <Routes>
            <Route path="/movies/:id" element={<Detail />} />
            <Route
              path="/"
              element={
                <div style={{ width: '100%' }}>
                  <HomePage />
                  <PostsList />
                </div>
              }
            />
            <Route path="/movies" element={<MoviePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
