import { Link } from "react-router-dom"
import MatrixRain from "../components/MatrixRain"
import { playSound } from "../utils/sounds"
import "./Media.css"

function Media() {
  const transmissions = [
    { id: 1, type: "VIDEO", title: "GRID_SURVEILLANCE_01", status: "ENCRYPTED" },
    { id: 2, type: "AUDIO", title: "VOICE_LOG_A242", status: "DECRYPTED" },
    { id: 3, type: "DATA", title: "CORE_DUMP_0224", status: "LOCKED" },
  ]

  return (
    <div className="universe">
      <MatrixRain />
      <nav className="nav-bar evil-nav">
        <Link to="/" className="nav-logo">L1T.GRID</Link>
        <div className="nav-links">
          <Link to="/feed" onMouseEnter={() => playSound('hover')}>FEED</Link>
          <Link to="/media" onMouseEnter={() => playSound('hover')}>U0_STREAM</Link>
          <Link to="/profile" onMouseEnter={() => playSound('hover')}>ARCHITECT</Link>
        </div>
      </nav>
      
      <div className="stream-container">
        <div className="stream-header">
          <h1 className="glitch-text" data-text="U0_STREAM">U0_STREAM</h1>
          <span className="protocol-badge">PROTOCOL: U0_A242</span>
        </div>
        
        <div className="media-grid">
          <div className="stream-category evil-card" onClick={() => playSound('click')}>
            <div className="cat-icon">📡</div>
            <h3>LIVE FEED</h3>
            <p className="status-online pulse">● ONLINE</p>
          </div>
          <div className="stream-category evil-card" onClick={() => playSound('click')}>
            <div className="cat-icon">🎬</div>
            <h3>ARCHIVE</h3>
            <p>1,337 TITLES</p>
          </div>
          <div className="stream-category evil-card" onClick={() => playSound('click')}>
            <div className="cat-icon">🎵</div>
            <h3>AUDIO</h3>
            <p>UNLIMITED</p>
          </div>
          <div className="stream-category evil-card" onClick={() => playSound('click')}>
            <div className="cat-icon">📁</div>
            <h3>VAULT</h3>
            <p>SECURE</p>
          </div>
        </div>

        <div className="recent-transmissions evil-terminal">
          <h3>[ RECENT TRANSMISSIONS ]</h3>
          <div className="trans-list">
            {transmissions.map(t => (
              <div key={t.id} className="trans-item">
                <span className="trans-type">[{t.type}]</span>
                <span className="trans-title">{t.title}</span>
                <span className={`trans-status ${t.status.toLowerCase()}`}>{t.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <footer className="system-footer">
        <span>L1T.GRID v1.0.24</span>
        <span className="separator">|</span>
        <span className="protocol-id blink">U0_A242</span>
        <span className="separator">|</span>
        <span>NODE: TERMINUX</span>
      </footer>
    </div>
  )
}

export default Media
