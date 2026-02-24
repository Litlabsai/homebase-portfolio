import Projects from './components/Projects'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Feed from './pages/Feed'
import Media from './pages/Media'
import Profile from './pages/Profile'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/media" element={<Media />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
