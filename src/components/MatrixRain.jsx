import { useEffect, useRef } from 'react'
import './MatrixRain.css'

function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    // Honeycomb hex chars + tech symbols
    const chars = '⬡⬢⬣⬤⬥⬦▲▼◀▶◆◇●○◐◑◒◓★☆✦✧✪✯⌂⌘⌥⌫⌧⏎⚡⚙⚛⚠⚡⛓✓✗⟁⟐⟑⦀⦁⦂⦃⦄⦅⦆⦇⦈⦉⦊⦋⦌⦍⦎⦏⦐⦑⦒⦓⦔⦕⦖⧇⧈⧉⧊⧋⧌⧍⧎⧏⧐⧑⧒⧓⧔⧕⧖⧗⧘⧙⧚⧛⧜⧝⧞⧟⧠⧡⧢⧣⧤⧥⧦⧧⧨⧩⧪⧫⧬⧭⧮⧯⧰⧱⧲⧳⧴⧵⧶⧷⧸⧹⧺⧻⧼⧽⧾⧿'
    
    const fontSize = 24
    const columns = canvas.width / fontSize
    
    const drops = []
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * -100
    }
    
    // Golden honeycomb palette
    const colors = ['#FFD700', '#FFA500', '#FF8C00', '#DAA520', '#B8860B', '#FFD700']
    
    const draw = () => {
      // Dark amber trail effect
      ctx.fillStyle = 'rgba(10, 5, 0, 0.04)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      ctx.font = fontSize + 'px monospace'
      
      for (let i = 0; i < drops.length; i++) {
        // Cycle through golden colors
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]
        
        const text = chars.charAt(Math.floor(Math.random() * chars.length))
        
        // Add glow effect
        ctx.shadowColor = '#FFD700'
        ctx.shadowBlur = 10
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        
        // Reset shadow for performance
        ctx.shadowBlur = 0
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }
    
    const interval = setInterval(draw, 40)
    
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  return <canvas ref={canvasRef} className="matrix-rain" />
}

export default MatrixRain
