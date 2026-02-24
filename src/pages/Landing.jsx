import React, { useState, useEffect } from 'react';
import MatrixRain from '../components/MatrixRain';
import './Landing.css';

const Typewriter = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return <span>{displayText}<span className="cursor">|</span></span>;
};

export default function Landing() {
  return (
    <div className="landing-container">
      <MatrixRain />
      <motion.div 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="glitch">
          <Typewriter text="FALLEN ANGEL" speed={100} />
        </h1>
        <p className="subtitle">Mobile Dev • Terminal Mastery • Code God</p>
        <div className="buttons">
          <motion.button 
            className="btn-primary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            View Work
          </motion.button>
          <motion.button 
            className="btn-secondary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
