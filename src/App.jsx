import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Projects from './components/Projects';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import Media from './pages/Media';

const Contact = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2 style={{ color: '#00d4ff' }}>Contact</h2>
    <p style={{ color: '#aaa' }}>fallen@dev.io</p>
  </div>
);

function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#0f0f1a' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
