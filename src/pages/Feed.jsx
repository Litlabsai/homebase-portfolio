import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import MatrixRain from "../components/MatrixRain"
import { playSound } from "../utils/sounds"
import { 
  db, auth, 
  collection, addDoc, query, orderBy, onSnapshot, serverTimestamp,
  updateDoc, doc, increment,
  signInAnonymously, onAuthStateChanged 
} from "../firebase"
import "./Feed.css"

function Feed() {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState("")
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      } else {
        signInAnonymously(auth).catch(console.error)
      }
    })
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"))
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate()
      }))
      setPosts(postsData)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const handlePost = async () => {
    if (!newPost.trim() || !user) return
    
    playSound('transmit')
    
    try {
      await addDoc(collection(db, "posts"), {
        content: newPost,
        userId: user.uid,
        user: "U0_A242",
        avatar: "😈",
        timestamp: serverTimestamp(),
        likes: 0
      })
      setNewPost("")
    } catch (error) {
      console.error("Error posting:", error)
      alert("Transmission failed.")
    }
  }

  const handleLike = async (postId) => {
    playSound('click')
    try {
      const postRef = doc(db, "posts", postId)
      await updateDoc(postRef, {
        likes: increment(1)
      })
    } catch (error) {
      console.error("Error liking:", error)
    }
  }

  const handleType = (e) => {
    setNewPost(e.target.value)
    if (e.target.value.length % 3 === 0) {
      playSound('typing')
    }
  }

  const formatTime = (timestamp) => {
    if (!timestamp) return "now"
    const now = new Date()
    const diff = Math.floor((now - timestamp) / 1000 / 60)
    if (diff < 1) return "now"
    if (diff < 60) return `${diff}m ago`
    const hours = Math.floor(diff / 60)
    if (hours < 24) return `${hours}h ago`
    return `${Math.floor(hours / 24)}d ago`
  }

  return (
    <div className="universe">
      <MatrixRain />
      <nav className="nav-bar evil-nav">
        <Link to="/" className="nav-logo">L1T.GRID</Link>
        <div className="nav-links">
          <Link to="/feed" onClick={() => playSound('hover')}>FEED</Link>
          <Link to="/media" onClick={() => playSound('hover')}>U0_STREAM</Link>
          <Link to="/profile" onClick={() => playSound('hover')}>ARCHITECT</Link>
        </div>
      </nav>

      <div className="feed-container">
        <div className="create-post evil-post">
          <div className="post-header-input">
            <span className="user-avatar">😈</span>
            <span className="user-name">U0_A242</span>
            <span className={`protocol-badge-small ${user ? 'connected' : ''}`}>
              {user ? "⚡ CONNECTED" : "CONNECTING..."}
            </span>
          </div>
          <textarea 
            placeholder="Broadcast to the grid..."
            value={newPost}
            onChange={handleType}
            disabled={!user}
            className="evil-textarea"
          />
          <button 
            onClick={handlePost} 
            disabled={!user || !newPost.trim()}
            className="transmit-btn"
            onMouseEnter={() => playSound('hover')}
          >
            [ TRANSMIT ]
          </button>
        </div>

        {loading ? (
          <div className="loading-grid">
            <div className="pulse">INITIALIZING U0 PROTOCOL...</div>
          </div>
        ) : (
          <div className="posts">
            {posts.map(post => (
              <div key={post.id} className="post-card evil-card">
                <div className="post-header">
                  <span className="avatar">{post.avatar}</span>
                  <div className="post-meta">
                    <h4>{post.user}</h4>
                    <span className="time">{formatTime(post.timestamp)}</span>
                  </div>
                </div>
                <p className="post-content">{post.content}</p>
                <div className="post-actions">
                  <button 
                    className="like-btn" 
                    onClick={() => handleLike(post.id)}
                    onMouseEnter={() => playSound('hover')}
                  >
                    ⚡ {post.likes || 0}
                  </button>
                  <button className="action-btn" onMouseEnter={() => playSound('hover')}>💬</button>
                  <button className="action-btn" onMouseEnter={() => playSound('hover')}>↗️</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <footer className="system-footer">
        <span>L1T.GRID v1.0.24</span>
        <span className="separator">|</span>
        <span className="protocol-id blink">U0_A242</span>
        <span className="separator">|</span>
        <span>{user ? "⚡ NODE: ONLINE" : "⚠️ NODE: OFFLINE"}</span>
      </footer>
    </div>
  )
}

export default Feed
