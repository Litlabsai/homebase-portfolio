import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: '1rem',
      background: 'rgba(0,0,0,0.8)',
      zIndex: 10,
      borderBottom: '1px solid #0f0'
    }}>
      <Link to="/" style={{ color: '#0f0', textDecoration: 'none', marginRight: '2rem' }}>Home</Link>
      <Link to="/terminal" style={{ color: '#0f0', textDecoration: 'none' }}>Terminal</Link>
    </nav>
  )
}

export default Navbar
