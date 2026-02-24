import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import MatrixRain from './components/MatrixRain'
import Landing from './pages/Landing'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="loading-screen" style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
        color: '#0f0',
        fontFamily: 'monospace',
        fontSize: '1.5rem'
      }}>
        <div className="loader">Initializing Matrix...</div>
      </div>
    )
  }

  return (
    <div className="app" style={{ position: 'relative', minHeight: '100vh' }}>
      <MatrixRain />
      <div className="content" style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
