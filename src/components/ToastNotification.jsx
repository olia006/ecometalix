import React, { useEffect } from "react";
import styles from "./ToastNotification.module.css";
import { FaCheckCircle, FaTimesCircle, FaExclamationCircle, FaInfoCircle } from "react-icons/fa";

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
      Icon = FaCheckCircle;
      break;
    case "error":
      Icon = FaTimesCircle;
      break;
    case "warning":
      Icon = FaExclamationCircle;
      break;
    default:
      Icon = FaInfoCircle;
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
