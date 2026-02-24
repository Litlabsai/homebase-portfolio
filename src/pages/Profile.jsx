import { Link } from "react-router-dom"
import "./Profile.css"

function Profile() {
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

      <div className="architect-terminal">
        <div className="terminal-header">
          <div className="status-lights">
            <span className="light red"></span>
            <span className="light yellow"></span>
            <span className="light green"></span>
          </div>
          <span className="terminal-title">ROOT ACCESS TERMINAL</span>
        </div>

        <div className="architect-profile">
          <div className="avatar-section">
            <div className="architect-avatar">😈</div>
            <div className="authority-badge">SYSTEM ARCHITECT</div>
          </div>
          
          <div className="architect-info">
            <h1>U0_A242</h1>
            <div className="clearance-level">CLEARANCE: LEVEL 5 (ROOT)</div>
            
            <div className="system-stats">
              <div className="stat">
                <span className="stat-label">INTEGRITY</span>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '100%'}}></div>
                </div>
                <span className="stat-value">100%</span>
              </div>
              
              <div className="stat-row">
                <span>UPTIME: 99.9%</span>
                <span>NODE: TERMINUX</span>
                <span>PROTOCOL: ACTIVE</span>
              </div>
            </div>

            <div className="authority-actions">
              <button className="auth-btn">SYSTEM LOGS</button>
              <button className="auth-btn">USER MANAGEMENT</button>
              <button className="auth-btn red">KILL SWITCH</button>
            </div>
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

export default Profile
