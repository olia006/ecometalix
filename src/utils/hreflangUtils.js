// src/utils/hreflangUtils.js

// Define URL mappings for Spanish and English versions
const pageMapping = {
  '/': {
    es: 'https://ecometalix.cl/',
    en: 'https://ecometalix.cl/en/'
  },
  '/por-que-nosotros': {
    es: 'https://ecometalix.cl/por-que-nosotros',
    en: 'https://ecometalix.cl/en/why-us'
  },
  '/precios': {
    es: 'https://ecometalix.cl/precios',
    en: 'https://ecometalix.cl/en/prices'
  },
  '/faq': {
    es: 'https://ecometalix.cl/faq',
    en: 'https://ecometalix.cl/en/faq'
  },
  '/contacto': {
    es: 'https://ecometalix.cl/contacto',
    en: 'https://ecometalix.cl/en/contact'
  },
  '/en/': {
    es: 'https://ecometalix.cl/',
    en: 'https://ecometalix.cl/en/'
  },
  '/en/why-us': {
    es: 'https://ecometalix.cl/por-que-nosotros',
    en: 'https://ecometalix.cl/en/why-us'
  },
  '/en/prices': {
    es: 'https://ecometalix.cl/precios',
    en: 'https://ecometalix.cl/en/prices'
  },
  '/en/faq': {
    es: 'https://ecometalix.cl/faq',
    en: 'https://ecometalix.cl/en/faq'
  },
  '/en/contact': {
    es: 'https://ecometalix.cl/contacto',
    en: 'https://ecometalix.cl/en/contact'
  }
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
    return `https://ecometalix.cl${path}`;
  }

  return mapping[lang] || mapping.es || `https://ecometalix.cl${path}`;
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