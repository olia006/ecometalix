import React, { useState, useEffect } from 'react';

const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
              backgroundColor: 'var(--color-warning)',
              color: 'var(--color-white)',
      padding: '8px 16px',
      textAlign: 'center',
      fontSize: '14px',
      zIndex: 9999
    }}>
      Sin conexión a internet. Algunas funciones pueden no estar disponibles.
    </div>
  );
};

export default OfflineIndicator; 