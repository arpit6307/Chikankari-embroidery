import React, { useEffect } from 'react';
import { Alert } from 'react-bootstrap';

const AlertToast = ({ message, type, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Disappears after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div className={`toast-notification ${show ? 'show' : ''}`}>
      <Alert variant={type} onClose={onClose} dismissible>
        {message}
      </Alert>
    </div>
  );
};

export default AlertToast;
