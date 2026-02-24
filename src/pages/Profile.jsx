import { Link } from "react-router-dom"
import MatrixRain from "../components/MatrixRain"
import { playSound } from "../utils/sounds"
import "./Profile.css"

function Profile() {
  const logs = [
    "02:24:15 - U0_A242 ACCESS GRANTED",
    "02:24:18 - FIREWALL BYPASS COMPLETE",
    "02:24:22 - NODE: TERMINUX CONNECTED",
    "02:24:25 - GRID SYNC SUCCESSFUL"
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

      <div className="architect-container">
        <div className="architect-terminal evil-terminal">
          <div className="terminal-header">
            <div className="status-lights">
              <span className="light red blink"></span>
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
              <h1 className="glitch-text" data-text="U0_A242">U0_A242</h1>
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
                <button className="auth-btn" onClick={() => playSound('click')}>SYSTEM LOGS</button>
                <button className="auth-btn" onClick={() => playSound('click')}>USER MANAGEMENT</button>
                <button className="auth-btn red" onClick={() => playSound('glitch')}>KILL SWITCH</button>
              </div>
            </div>
          </div>
        </div>

        <div className="system-logs evil-terminal">
          <div className="terminal-header">
            <span className="terminal-title">SYSTEM_LOG_DUMP.txt</span>
          </div>
          <div className="log-content">
            {logs.map((log, i) => (
              <p key={i} className="log-line">&gt; {log}</p>
            ))}
            <p className="log-line blink">&gt; _</p>
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

export default Profile
