import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Event from './pages/Event';
import Message from './pages/Message';
import LogHours from './pages/LogHours';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="site-header">
          <div className="header-container">
            <div className="logo">PawsHome</div>
            <nav className="navbar">
              <Link to="/">HOME</Link>
              <Link to="/schedule">SCHEDULE</Link>
              <Link to="/event">EVENT</Link>
              <Link to="/message">MESSAGE</Link>
              <Link to="/loghours">LOG YOUR HOURS</Link>
            </nav>
          </div>
        </header>

        {/* main content area */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/event" element={<Event />} />
            <Route path="/message" element={<Message />} />
            <Route path="/loghours" element={<LogHours />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        {/* footer */}
        <footer>&copy; 2025 Paws Home</footer>
      </div>
    </Router>
  );
}

export default App;