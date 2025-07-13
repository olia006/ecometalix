// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initWebVitals } from './utils/webVitals.js';

// 🌐 Import global styles (theme.css and media.css are imported within global.css)
import './styles/global.css';

// Mount the app at #root inside public/index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Initialize Web Vitals tracking
initWebVitals();

// Register Service Worker for PWA functionality
/*
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then((registration) => {
      console.log('Service Worker registered:', registration);
    })
    .catch((error) => {
      console.log('Service Worker registration failed:', error);
    });
}
*/
