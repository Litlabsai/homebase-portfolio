import { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useTerminal } from '../hooks/useTerminal.js';
import './Terminal.css';

const Terminal = () => {
  const [input, setInput] = useState('');
  const { history, loading, executeCommand, clear } = useTerminal();
  const endOfOutputRef = useRef(null);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    await executeCommand(input);
    setInput('');
  };

  useEffect(() => {
    endOfOutputRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        clear();
      }
      if (e.key === 'Escape') {
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [clear]);

  return (
    <motion.div 
      className="terminal-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={handleTerminalClick}
    >
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="button red"></span>
          <span className="button yellow"></span>
          <span className="button green"></span>
        </div>
        <div className="terminal-title">Termux</div>
      </div>
      <div className="terminal-body">
        <div className="output-area">
          {loading && <div>Loading terminal history...</div>}
          <AnimatePresence>
            {history.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={`output-line ${line.type}`}
              >
                {line.type === 'command' && <span className="prompt-symbol">$ </span>}
                <span className="output-text">
                  {line.text}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={endOfOutputRef} />
        </div>

        <form onSubmit={handleFormSubmit} className="terminal-input-form">
          <span className="prompt">
            <span className="prompt-user">homebase</span>
            <span className="prompt-at">@</span>
            <span className="prompt-host">pro</span>
            <span className="prompt-symbol">:$ </span>
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            className="terminal-input"
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
          <motion.span 
            className="cursor"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            ▋
          </motion.span>
        </form>
      </div>

      <div className="terminal-footer">
        <span className="terminal-hint">
          <kbd>Ctrl</kbd> + <kbd>L</kbd> to clear • Type <code>help</code> for commands
        </span>
      </div>
    </motion.div>
  );
};

export default Terminal;