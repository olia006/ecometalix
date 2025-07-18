// src/components/Clock.jsx
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Clock.module.css";
import { Clock as ClockIcon, MapPin } from "lucide-react";

export default function Clock({ variant = "default" }) {
  const [now, setNow] = useState(new Date());
  const [showDots, setShowDots] = useState(true);

  // Santiago timezone offset (UTC-4), adjust if needed for DST
  const closingHour = 20;

  useEffect(() => {
    // Update time every second for smoother animation
    const timeInterval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    // Animate dots every 500ms
    const dotsInterval = setInterval(() => {
      setShowDots(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timeInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  const santiagoTime = new Date(
    now.toLocaleString("en-US", { timeZone: "America/Santiago" })
  );

  const hours = santiagoTime.getHours();
  const minutes = santiagoTime.getMinutes();

  // Format time manually to control the dots animation
  const timeStr = `${hours.toString().padStart(2, '0')}${showDots ? ':' : ' '}${minutes.toString().padStart(2, '0')}`;

  const hoursLeft = closingHour - hours - (minutes > 0 ? 1 : 0);
  const minutesLeft = (60 - minutes) % 60;

  const openNow = hours < closingHour && hours >= 8;

  if (variant === "minimal") {
    return (
      <div className={styles.minimal}>
        <div className={styles.locationTimeLine}>
          <span className={styles.location}>
            Stgo., Chile
          </span>
          <span className={styles.time}>
            {timeStr}
          </span>
        </div>
        <div className={styles.statusLine}>
          <span className={openNow ? styles.open : styles.closed}>
            {openNow ? "ABIERTO" : "CERRADO"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.clockWrap}>
                <ClockIcon className={styles.icon} />
      <div className={styles.timeDisplay}>
        <span className={styles.timeLabel}>
          <MapPin className={styles.locationIcon} />
          Santiago, Chile
        </span>
        <span className={styles.timeValue}>{timeStr}</span>
        <span className={styles.statusText}>
          {openNow ? (
            `Cerramos en ${hoursLeft}h ${minutesLeft}m`
          ) : (
            "Cerrado"
          )}
        </span>
      </div>
    </div>
  );
}

Clock.propTypes = {
  variant: PropTypes.oneOf(["default", "minimal"])
};
