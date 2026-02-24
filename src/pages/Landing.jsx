import React, { useState } from 'react';
import { Link } from "react-router-dom"
import MatrixRain from "../components/MatrixRain"
import Projects from "../components/Projects"
import { playSound, playAmbient } from "../utils/sounds"
import "./Landing.css"

function Landing() {
  const [text, setText] = useState("")
  const [glitch, setGlitch] = useState(false)
  const fullText = "> INITIALIZING EVIL PROTOCOL..."
  
  useEffect(() => {
    // Start ambient sound
    const stopAmbient = playAmbient()
    
    // Typing animation
    let i = 0
    const interval = setInterval(() => {
      setText(fullText.slice(0, i))
      if (i > 0 && i < fullText.length) {
        playSound('typing')
      }
      i++
      if (i > fullText.length) {
        clearInterval(interval)
        // Random glitch effect
        setInterval(() => {
          setGlitch(true)
          playSound('glitch')
          setTimeout(() => setGlitch(false), 100)
        }, 5000)
      }
    }, 80)
    
    return () => stopAmbient()
  }, [])
  
  const handleHover = () => {
    playSound('hover')
  }
  
  const handleClick = () => {
    playSound('click')
  }

  return (
    <div className="matrix">
      <MatrixRain />
      <div className={`glitch-overlay ${glitch ? 'active' : ''}`} />
      <div className="logo-badge">L1T.GRID</div>
      <h1 className={glitch ? 'glitch-text' : ''} data-text="U0_A242">U0_A242</h1>
      <p className="subtitle">System Architect | Mobile Dev | Terminal Warrior</p>
      <div className="terminal evil-terminal">
        <p>{text}<span className="cursor blink">_</span></p>
      </div>
      <Link to="/feed">
        <button 
          className="enter-btn evil-btn" 
          onMouseEnter={handleHover}
          onClick={handleClick}
        >
          <span className="btn-text">[ ENTER THE GRID ]</span>
          <span className="btn-glitch"></span>
        </button>
      </Link>
      
      <Projects />
    </div>
  )
}

export default Landing
