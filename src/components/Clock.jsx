"use client";

// src/components/Clock.jsx
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Clock.module.css";
import { Clock as ClockIcon, MapPin } from "lucide-react";

export default function Clock({ variant = "default" }) {
  const [now, setNow] = useState(new Date());
  const [showDots, setShowDots] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Business hours configuration
  const openingHour = 8;
  const openingMinute = 30;
  const closingHour = 20; // 8 PM
  const closingMinute = 0;

  // Prevent hydration mismatch by only showing time after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let tickCount = 0;
    
    // Single optimized timer - updates time every second, dots every 500ms
    const timer = setInterval(() => {
      tickCount++;
      
      // Update time every second (every 2 ticks)
      if (tickCount % 2 === 0) {
        setNow(new Date());
      }
      
      // Toggle dots every 500ms (every tick)
      setShowDots(prev => !prev);
    }, 500);

    // Initialize time immediately to prevent delay
    setNow(new Date());

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Get Santiago time with fallback for older browsers
  const santiagoTime = (() => {
    try {
      // Try modern timezone support
      return new Date(
        now.toLocaleString("en-US", { timeZone: "America/Santiago" })
      );
    } catch (error) {
      // Fallback for older browsers: UTC-4 (Santiago standard time)
      // Note: This doesn't account for DST automatically
      const utcTime = now.getTime();
      const santiagoOffset = -4 * 60 * 60 * 1000; // UTC-4 in milliseconds
      return new Date(utcTime + santiagoOffset);
    }
  })();

  const hours = santiagoTime.getHours();
  const minutes = santiagoTime.getMinutes();

  // Format time manually to control the dots animation
  const timeStr = mounted ? `${hours.toString().padStart(2, '0')}${showDots ? ':' : ' '}${minutes.toString().padStart(2, '0')}` : '--:--';

  // Calculate time until closing
  const currentMinutes = hours * 60 + minutes;
  const openingMinutes = openingHour * 60 + openingMinute;
  const closingMinutes = closingHour * 60 + closingMinute;
  
  const openNow = mounted ? (currentMinutes >= openingMinutes && currentMinutes < closingMinutes) : true;
  
  // Calculate time left until closing
  const minutesUntilClosing = closingMinutes - currentMinutes;
  const hoursLeft = Math.floor(minutesUntilClosing / 60);
  const minutesLeft = minutesUntilClosing % 60;

  if (variant === "minimal") {
    return (
      <span 
        className={openNow ? styles.open : styles.closed}
        role="status"
        aria-live="polite"
                  aria-label={`Estado del negocio: ${mounted ? (openNow ? "Abierto" : "Abre a las 8:30") : "Abierto"}`}
        >
          {mounted ? (openNow ? "ABIERTO" : "Abre a las 8:30") : "ABIERTO"}
      </span>
    );
  }

  return (
    <div className={styles.clockWrap} role="region" aria-label="Horarios de atención comercial">
      <ClockIcon className={styles.icon} aria-hidden="true" />
      <div className={styles.timeDisplay}>
        <span className={styles.timeLabel} aria-label="Ubicación del negocio">
          <MapPin className={styles.locationIcon} aria-hidden="true" />
          Santiago, Chile
        </span>
        <time 
          className={styles.timeValue}
          dateTime={mounted ? santiagoTime.toISOString() : new Date().toISOString()}
          aria-label={`Hora actual en Santiago: ${timeStr}`}
          aria-live="polite"
        >
          {timeStr}
        </time>
        <span 
          className={styles.statusText}
          role="status"
          aria-live="polite"
          aria-label={openNow ? `Negocio abierto, cerramos en ${hoursLeft} horas y ${minutesLeft} minutos` : "Negocio abre a las 8:30"}
        >
          {openNow ? (
            `cerramos en ${hoursLeft}h ${minutesLeft}m`
          ) : (
            "Abre a las 8:30"
          )}
        </span>
      </div>
    </div>
  );
}

Clock.propTypes = {
  variant: PropTypes.oneOf(["default", "minimal"])
};
