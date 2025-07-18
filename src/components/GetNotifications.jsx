"use client";

import React, { useState, useEffect, useCallback } from "react";
import styles from "./GetNotifications.module.css";
import { Bell } from "lucide-react";

// Utility: detect mobile device
const isMobile = () =>
  /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);

const STORAGE_KEY = "get_notification_dismissed";

export default function GetNotification({ triggerRef, 
  message = "¿Quieres recibir alertas de precios y ofertas?",
  ctaText = "Recibir alertas",
  ctaHref = "https://wa.me/56940244042?text=Quiero+recibir+alertas+de+precios",
  privacyNote = "Sin spam. Puedes darte de baja en cualquier momento."
}) {
  const [show, setShow] = useState(false);

  // Move function declarations to component root to avoid ESLint no-inner-declarations
  const handleMouseOut = useCallback((e) => {
    if (e.clientY <= 0) {
      setShow(true);
      window.removeEventListener("mouseout", handleMouseOut);
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (triggerRef && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.2) {
        setShow(true);
        window.removeEventListener("scroll", handleScroll);
      }
    }
  }, [triggerRef]);

  useEffect(() => {
    // Already dismissed or subscribed? Don't show
    if (localStorage.getItem(STORAGE_KEY)) return;

    // --- Desktop: Exit intent ---
    if (!isMobile()) {
      window.addEventListener("mouseout", handleMouseOut);
      return () => window.removeEventListener("mouseout", handleMouseOut);
    }

    // --- Mobile: Scroll past triggerRef ---
    if (isMobile() && triggerRef && triggerRef.current) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [triggerRef, handleMouseOut, handleScroll]);

  // Dismiss and never show again (unless you change STORAGE_KEY)
  function handleClose() {
    setShow(false);
    localStorage.setItem(STORAGE_KEY, "true");
  }

  // Handle CTA action (open WhatsApp, record conversion, etc)
  function handleSubscribe() {
    setShow(false);
    localStorage.setItem(STORAGE_KEY, "true");
    window.open(ctaHref, "_blank");
  }

  if (!show) return null;

  return (
    <div className={styles.toast} role="dialog" aria-live="polite">
      <button className={styles.closeBtn} onClick={handleClose} aria-label="Cerrar notificación">
        &times;
      </button>
      <Bell className={styles.icon} aria-hidden="true" />
      <div className={styles.message}>{message}</div>
      <button className={styles.cta} onClick={handleSubscribe}>{ctaText}</button>
      <div className={styles.privacy}>{privacyNote}</div>
    </div>
  );
}
