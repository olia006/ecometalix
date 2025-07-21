// src/utils/dateUtils.js
// CENTRALIZED DATE MANAGEMENT for price updates and legal document dates

/**
 * Main price update timestamp - SINGLE SOURCE OF TRUTH
 * Update this date and it will automatically change across the entire website
 */
export const LAST_PRICE_UPDATE = "8 de julio 2025, 15:00";

/**
 * Legal documents update date
 */
export const LEGAL_DOCS_UPDATE = "8 de julio 2025";

/**
 * Format price update timestamp for different contexts
 * @param {string} lang - Language code ('es' or 'en')
 * @param {boolean} includeTime - Whether to include time
 * @returns {string} Formatted timestamp
 */
export function formatPriceUpdate(lang = 'es', includeTime = true) {
  if (lang === 'en') {
    return includeTime ? "July 8, 2025, 3:00 PM" : "July 8, 2025";
  }
  
  return includeTime ? LAST_PRICE_UPDATE : "8 de julio 2025";
}

/**
 * Format legal document date
 * @param {string} lang - Language code ('es' or 'en') 
 * @returns {string} Formatted date
 */
export function formatLegalDate(lang = 'es') {
  if (lang === 'en') {
    return "July 8, 2025";
  }
  
  return LEGAL_DOCS_UPDATE;
}

/**
 * Get contextual price update text
 * @param {string} lang - Language code ('es' or 'en')
 * @param {string} context - Context type ('short', 'full', 'hero')
 * @returns {string} Complete text with timestamp
 */
export function getPriceUpdateText(lang = 'es', context = 'full') {
  const timestamp = formatPriceUpdate(lang, context !== 'short');
  
  if (lang === 'en') {
    switch (context) {
      case 'short':
        return `Updated: ${timestamp}`;
      case 'hero':
        return `Prices updated: ${timestamp}`;
      case 'full':
      default:
        return `Prices updated: ${timestamp}`;
    }
  }
  
  switch (context) {
    case 'short':
      return `Actualizado: ${timestamp}`;
    case 'hero':
      return `Precios actualizados: ${timestamp}`;
    case 'full':
    default:
      return `Precios actualizados: ${timestamp}`;
  }
}

/**
 * Standard formats for reusability
 */
export const dateFormats = {
  es: {
    priceWithTime: "8 de julio 2025, 15:00",
    priceShort: "8 de julio 2025", 
    legal: "8 de julio 2025"
  },
  en: {
    priceWithTime: "July 8, 2025, 3:00 PM",
    priceShort: "July 8, 2025",
    legal: "July 8, 2025"
  }
}; 