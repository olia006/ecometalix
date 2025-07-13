// Simple main.jsx for testing
import React from 'react';
import ReactDOM from 'react-dom/client';

function SimpleApp() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>🚀 React is Working!</h1>
      <p>Basic React rendering test</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleApp />
  </React.StrictMode>
); 