// src/utils/hreflangUtils.js
import { SEO_CONFIG } from '../config/constants';

// Define URL mappings for Spanish and English versions
const BASE_URL = SEO_CONFIG.baseUrl;
const pageMapping = {
  '/': {
    es: `${BASE_URL}/`,
    en: `${BASE_URL}/en/`
  },
  '/por-que-nosotros': {
    es: `${BASE_URL}/por-que-nosotros`,
    en: `${BASE_URL}/en/why-us`
  },
  '/precios': {
    es: `${BASE_URL}/precios`,
    en: `${BASE_URL}/en/prices`
  },
  '/faq': {
    es: `${BASE_URL}/faq`,
    en: `${BASE_URL}/en/faq`
  },

  '/en/': {
    es: `${BASE_URL}/`,
    en: `${BASE_URL}/en/`
  },
  '/en/why-us': {
    es: `${BASE_URL}/por-que-nosotros`,
    en: `${BASE_URL}/en/why-us`
  },
  '/en/prices': {
    es: `${BASE_URL}/precios`,
    en: `${BASE_URL}/en/prices`
  },
  '/en/faq': {
    es: `${BASE_URL}/faq`,
    en: `${BASE_URL}/en/faq`
  },

};

/**
 * Generate hreflang links for a given page path
 * @param {string} currentPath - Current page path (e.g., '/', '/precios')
 * @returns {Array} Array of hreflang objects
 */
export function generateHreflangs(currentPath) {
  const mapping = pageMapping[currentPath];
  
  if (!mapping) {
    // If no mapping exists, return empty array
    return [];
  }

  const hreflangs = [];

  // Add Spanish version
  if (mapping.es) {
    hreflangs.push({
      hrefLang: 'es',
      href: mapping.es
    });
  }

  // Add English version
  if (mapping.en) {
    hreflangs.push({
      hrefLang: 'en',
      href: mapping.en
    });
  }

  // Add default language (x-default) - use Spanish as default
  if (mapping.es) {
    hreflangs.push({
      hrefLang: 'x-default',
      href: mapping.es
    });
  }

  return hreflangs;
}

/**
 * Get canonical URL for a given path
 * @param {string} path - Page path
 * @param {string} lang - Language (es or en)
 * @returns {string} Canonical URL
 */
export function getCanonicalUrl(path, lang = 'es') {
  const mapping = pageMapping[path];
  
  if (!mapping) {
    return `${BASE_URL}${path}`;
  }

  return mapping[lang] || mapping.es || `${BASE_URL}${path}`;
}

/**
 * Check if a page has multilingual versions
 * @param {string} path - Page path
 * @returns {boolean} True if multilingual versions exist
 */
export function hasMultilingualVersions(path) {
  const mapping = pageMapping[path];
  return mapping && mapping.es && mapping.en;
} 