import { Link } from "react-router-dom"
import "./Media.css"

function Media() {
  return (
    <div className="universe">
      <nav className="nav-bar">
        <Link to="/" className="nav-logo">L1T.GRID</Link>
        <div className="nav-links">
          <Link to="/feed">FEED</Link>
          <Link to="/media">U0_STREAM</Link>
          <Link to="/profile">ARCHITECT</Link>
        </div>
      </nav>
      
      <div className="stream-container">
        <div className="stream-header">
          <h1>U0_STREAM</h1>
          <span className="protocol-badge">PROTOCOL: U0_A242</span>
        </div>
        
        <div className="media-grid">
          <div className="stream-category">
            <div className="cat-icon">📡</div>
            <h3>LIVE FEED</h3>
            <p className="status-online">● ONLINE</p>
          </div>
          <div className="stream-category">
            <div className="cat-icon">🎬</div>
            <h3>ARCHIVE</h3>
            <p>1,337 TITLES</p>
          </div>
          <div className="stream-category">
            <div className="cat-icon">🎵</div>
            <h3>AUDIO</h3>
            <p>UNLIMITED</p>
          </div>
          <div className="stream-category">
            <div className="cat-icon">📁</div>
            <h3>VAULT</h3>
            <p>SECURE</p>
          </div>
        </div>
      </div>
      
      <footer className="system-footer">
        <span>L1T.GRID v1.0.24</span>
        <span className="separator">|</span>
        <span className="protocol-id">U0_A242</span>
        <span className="separator">|</span>
        <span>NODE: TERMINUX</span>
      </footer>
    </div>
  )
}

export default Media
