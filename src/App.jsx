import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

const Home = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h1 style={{ color: '#00d4ff' }}>👿 Fallen Angel</h1>
    <p style={{ color: '#aaa' }}>Portfolio loaded</p>
  </div>
);

const Projects = () => (
  <div style={{ padding: '2rem' }}>
    <h2 style={{ color: '#00d4ff' }}>Projects</h2>
    <p style={{ color: '#aaa' }}>Coming soon</p>
  </div>
);

const Contact = () => (
  <div style={{ padding: '2rem' }}>
    <h2 style={{ color: '#00d4ff' }}>Contact</h2>
    <p style={{ color: '#aaa' }}>fallen@dev.io</p>
  </div>
);

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', background: '#0f0f1a' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
