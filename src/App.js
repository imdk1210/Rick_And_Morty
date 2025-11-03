import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import EpisodesCarousel from "./components/EpisodesCarousel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EpisodesPage from "./pages/EpisodesPage";
import EpisodesListPage from "./pages/EpisodesListPage";
import EpisodeDetail from "./pages/EpisodeDetail";
import CharacterDetail from "./pages/CharacterDetail";
import FavoritesPage from "./pages/FavoritePage";
import RegistrationPage from "./pages/RegistrationPage";
import Login from "./pages/Login";
import Users from "./pages/Users";
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
            <Route path="/episodes/:id" element={<EpisodeDetail />} />
            <Route path="/characters/:id" element={<CharacterDetail />} />
            <Route
              path="/"
              element={
                <div style={{ width: '100%' }}>
                  <HomePage />
                  <EpisodesCarousel />
                </div>
              }
            />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/episodes" element={<EpisodesPage />} />
            <Route path="/episodes-list" element={<EpisodesListPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
