import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ToastNotification.module.css";
import { CheckCircle, XCircle, AlertCircle, Info } from "lucide-react";

/**
 * ToastNotification
 * @param {string} type - 'success' | 'error' | 'info' | 'warning'
 * @param {string} message - Message to display
 * @param {function} onClose - Callback to close toast
 * @param {number} duration - Auto-close after ms (default: 3500)
 * @param {boolean} show - Controls toast visibility
 */
export default function ToastNotification({
  type = "info",
  message = "",
  onClose,
  duration = 3500,
  show = false,
}) {
  useEffect(() => {
    if (show && duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  // Select the appropriate icon
  let Icon;
  switch (type) {
    case "success":
      Icon = CheckCircle;
      break;
    case "error":
      Icon = XCircle;
      break;
    case "warning":
      Icon = AlertCircle;
      break;
    default:
      Icon = Info;
  }

  return (
    <div className={`${styles.toast} ${styles[type]}`} role="alert" aria-live="polite">
      <Icon className={styles.icon} aria-hidden="true" />
      <span className={styles.message}>{message}</span>
      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Cerrar notificación"
        tabIndex={0}
        type="button"
      >
        ×
      </button>
    </div>
  );
}

ToastNotification.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
  message: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  duration: PropTypes.number,
  show: PropTypes.bool,
}; 