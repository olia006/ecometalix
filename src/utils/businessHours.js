// src/utils/businessHours.js

/**
 * Business hours configuration and utility functions
 * Can be used anywhere in the app without displaying the Clock component
 */

// Business configuration
export const BUSINESS_CONFIG = {
  openingHour: 8,      // 8:30 AM (hour)
  openingMinute: 30,   // 8:30 AM (minute)
  closingHour: 20,     // 8:00 PM (20:00)
  closingMinute: 0,    // 8:00 PM (minute)
  timezone: "America/Santiago"
};

/**
 * Get current Santiago time with fallback for older browsers
 * @param {Date} [currentTime] - Optional time to use (defaults to now)
 * @returns {Date} Santiago time
 */
export function getSantiagoTime(currentTime = new Date()) {
  try {
    // Try modern timezone support
    return new Date(
      currentTime.toLocaleString("en-US", { timeZone: BUSINESS_CONFIG.timezone })
    );
  } catch (error) {
    // Fallback for older browsers: UTC-4 (Santiago standard time)
    // Note: This doesn't account for DST automatically
    const utcTime = currentTime.getTime();
    const santiagoOffset = -4 * 60 * 60 * 1000; // UTC-4 in milliseconds
    return new Date(utcTime + santiagoOffset);
  }
}

/**
 * Check if business is currently open
 * @param {Date} [currentTime] - Optional time to check (defaults to now)
 * @returns {boolean} True if business is open
 */
export function isBusinessOpen(currentTime = new Date()) {
  const santiagoTime = getSantiagoTime(currentTime);
  const hours = santiagoTime.getHours();
  const minutes = santiagoTime.getMinutes();
  
  // Convert to minutes since midnight for easier comparison
  const currentMinutes = hours * 60 + minutes;
  const openingMinutes = BUSINESS_CONFIG.openingHour * 60 + BUSINESS_CONFIG.openingMinute;
  const closingMinutes = BUSINESS_CONFIG.closingHour * 60 + BUSINESS_CONFIG.closingMinute;
  
  return currentMinutes >= openingMinutes && currentMinutes < closingMinutes;
}

/**
 * Get business status with detailed information
 * @param {Date} [currentTime] - Optional time to check (defaults to now)
 * @returns {Object} Business status object
 */
export function getBusinessStatus(currentTime = new Date()) {
  const santiagoTime = getSantiagoTime(currentTime);
  const hours = santiagoTime.getHours();
  const minutes = santiagoTime.getMinutes();
  const isOpen = isBusinessOpen(currentTime);
  
  // Calculate time until closing (if open) or opening (if closed)
  let hoursLeft, minutesLeft, timeUntilChange;
  
  if (isOpen) {
    // Calculate time until closing (20:00)
    const currentMinutes = hours * 60 + minutes;
    const closingMinutes = BUSINESS_CONFIG.closingHour * 60 + BUSINESS_CONFIG.closingMinute;
    const minutesUntilClosing = closingMinutes - currentMinutes;
    
    hoursLeft = Math.floor(minutesUntilClosing / 60);
    minutesLeft = minutesUntilClosing % 60;
    timeUntilChange = `${hoursLeft}h ${minutesLeft}m until closing`;
  } else {
    // Calculate time until opening (8:30 AM)
    const currentMinutes = hours * 60 + minutes;
    const openingMinutes = BUSINESS_CONFIG.openingHour * 60 + BUSINESS_CONFIG.openingMinute;
    
    let minutesUntilOpening;
    if (currentMinutes < openingMinutes) {
      // Same day opening
      minutesUntilOpening = openingMinutes - currentMinutes;
    } else {
      // Next day opening (24 hours + opening time - current time)
      minutesUntilOpening = (24 * 60) + openingMinutes - currentMinutes;
    }
    
    hoursLeft = Math.floor(minutesUntilOpening / 60);
    minutesLeft = minutesUntilOpening % 60;
    
    if (hoursLeft >= 24) {
      hoursLeft -= 24;
      timeUntilChange = `${hoursLeft}h ${minutesLeft}m until opening tomorrow`;
    } else {
      timeUntilChange = `${hoursLeft}h ${minutesLeft}m until opening`;
    }
  }
  
  return {
    isOpen,
    santiagoTime,
    hours,
    minutes,
    hoursLeft,
    minutesLeft,
    timeUntilChange,
    statusText: isOpen ? "ABIERTO" : "Abre a las 8:30",
    statusTextLong: isOpen ? `cerramos en ${hoursLeft}h ${minutesLeft}m` : "Abre a las 8:30"
  };
}

/**
 * Get formatted time string
 * @param {Date} [currentTime] - Optional time to format (defaults to now)
 * @param {boolean} [showDots] - Whether to show dots in time (defaults to true)
 * @returns {string} Formatted time string
 */
export function getFormattedTime(currentTime = new Date(), showDots = true) {
  const santiagoTime = getSantiagoTime(currentTime);
  const hours = santiagoTime.getHours();
  const minutes = santiagoTime.getMinutes();
  
  const separator = showDots ? ':' : ' ';
  return `${hours.toString().padStart(2, '0')}${separator}${minutes.toString().padStart(2, '0')}`;
}

/**
 * Check if business will be open at a specific time
 * @param {Date} checkTime - Time to check
 * @returns {boolean} True if business will be open at that time
 */
export function willBeOpen(checkTime) {
  return isBusinessOpen(checkTime);
}

/**
 * Get business hours for display
 * @returns {string} Human-readable business hours
 */
export function getBusinessHours() {
  const openingTime = `${BUSINESS_CONFIG.openingHour}:${BUSINESS_CONFIG.openingMinute.toString().padStart(2, '0')}`;
  const closingTime = `${BUSINESS_CONFIG.closingHour}:${BUSINESS_CONFIG.closingMinute.toString().padStart(2, '0')}`;
  return `${openingTime} - ${closingTime}`;
} 