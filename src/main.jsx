import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/aurora.css';
import './index.css';

import { NotificationProvider } from './components/Notification';
import EasterEggs from './components/EasterEggs';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NotificationProvider>
        <EasterEggs />
        <App />
      </NotificationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
