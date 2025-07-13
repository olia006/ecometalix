// src/utils/languageUtils.js

/**
 * Detect current language from URL path
 * @param {string} pathname - Current pathname (e.g., '/en/prices')
 * @returns {string} Language code ('es' or 'en')
 */
export function detectLanguage(pathname = window.location.pathname) {
  return pathname.startsWith('/en') ? 'en' : 'es';
}

/**
 * Get localized path for a given route
 * @param {string} path - Base path (e.g., '/prices')
 * @param {string} lang - Language code ('es' or 'en')
 * @returns {string} Localized path
 */
export function getLocalizedPath(path, lang = 'es') {
  if (lang === 'en') {
    return `/en${path}`;
  }
  return path;
}

/**
 * Get alternate language URL for current page
 * @param {string} currentPath - Current path
 * @returns {object} Object with Spanish and English URLs
 */
export function getAlternateUrls(currentPath) {
  const isEnglish = currentPath.startsWith('/en');
  
  if (isEnglish) {
    // Currently on English page, get Spanish equivalent
    const spanishPath = currentPath.replace('/en', '') || '/';
    return {
      es: `https://ecometalix.cl${spanishPath}`,
      en: `https://ecometalix.cl${currentPath}`
    };
  } else {
    // Currently on Spanish page, get English equivalent
    const englishPath = `/en${currentPath === '/' ? '' : currentPath}`;
    return {
      es: `https://ecometalix.cl${currentPath}`,
      en: `https://ecometalix.cl${englishPath}`
    };
  }
}

/**
 * Generate hreflang data for current page
 * @param {string} currentPath - Current page path
 * @returns {Array} Hreflang objects array
 */
export function generateBilingualHreflangs(currentPath) {
  const urls = getAlternateUrls(currentPath);
  
  return [
    { hrefLang: 'es', href: urls.es },
    { hrefLang: 'en', href: urls.en },
    { hrefLang: 'x-default', href: urls.es } // Spanish as default
  ];
}

/**
 * Content management for bilingual pages
 */
export const content = {
  // Homepage content
  home: {
    es: {
      title: "Compra y Venta de Chatarra en Santiago | Ecometalix Spa",
      description: "Ecometalix Spa: Compra y venta de chatarra, pago inmediato, horario extendido, balanza certificada. Santiago. Recibe tu dinero al instante. ¡Contáctanos por WhatsApp!",
      hero: {
        title: "Vende tu chatarra y recibe el pago al instante",
        subtitle: "Compra y reciclaje de chatarra y metales en Santiago — pesaje certificado, atención personalizada y cotización por WhatsApp.",
        lastUpdated: "8 de julio 2025"
      },
      prices: {
        title: "Precios Destacados",
        subtitle: "Consulta los metales más vendidos y sus precios actualizados.",
        ctaText: "Ver todos los precios",
        whatsappText: "Hola, quisiera cotizar el precio de mi chatarra"
      },
      faqPreview: [
        { question: "¿Qué tipos de metales compran?", answer: "Cobre, aluminio, hierro, bronce y más." },
        { question: "¿Cómo puedo cotizar por WhatsApp?", answer: "Haz click en el ícono de WhatsApp para atención inmediata." },
        { question: "¿Es seguro vender en Ecometalix?", answer: "Sí, estamos certificados y tu seguridad es prioridad." }
      ]
    },
    en: {
      title: "Scrap Metal Buying & Selling in Santiago | Ecometalix Spa",
      description: "Ecometalix Spa: Scrap metal buying & selling, immediate payment, extended hours, certified scale. Santiago. Get your money instantly. Contact us on WhatsApp!",
      hero: {
        title: "Sell your scrap metal and get paid instantly",
        subtitle: "Buying and recycling scrap metal in Santiago — certified weighing, personalized attention and WhatsApp quotes.",
        lastUpdated: "July 8, 2025"
      },
      prices: {
        title: "Featured Prices",
        subtitle: "Check the most sold metals and their updated prices.",
        ctaText: "View all prices",
        whatsappText: "Hello, I would like to quote the price of my scrap metal"
      },
      faqPreview: [
        { question: "What types of metals do you buy?", answer: "Copper, aluminum, iron, bronze and more." },
        { question: "How can I get a quote via WhatsApp?", answer: "Click on the WhatsApp icon for immediate attention." },
        { question: "Is it safe to sell at Ecometalix?", answer: "Yes, we are certified and your safety is our priority." }
      ]
    }
  },
  
  // Prices page content
  prices: {
    es: {
      title: "Precios de chatarra en Santiago 2025 | Ecometalix Spa",
      description: "Consulta precios actualizados de cobre, aluminio, hierro y otros metales en Ecometalix Spa. Pago inmediato y pesaje certificado. ¡Cotiza tu precio por WhatsApp!",
      hero: {
        title: "Precios de chatarra actualizados",
        subtitle: "Consulta nuestros precios para cobre, aluminio, hierro y más. Pago inmediato, pesaje certificado. Actualizado cada día hábil.",
        lastUpdated: "8 de julio 2025, 15:00"
      },
      cta: {
        title: "¿Quieres cotizar tu precio en tiempo real?",
        description: "Contáctanos por WhatsApp para una cotización inmediata y personalizada.",
        ctaText: "Cotizar por WhatsApp"
      }
    },
    en: {
      title: "Scrap Metal Prices in Santiago 2025 | Ecometalix Spa",
      description: "Check updated prices for copper, aluminum, iron and other metals at Ecometalix Spa. Immediate payment and certified weighing. Get your quote via WhatsApp!",
      hero: {
        title: "Updated scrap metal prices",
        subtitle: "Check our prices for copper, aluminum, iron and more. Immediate payment, certified weighing. Updated every business day.",
        lastUpdated: "July 8, 2025, 3:00 PM"
      },
      cta: {
        title: "Want to quote your price in real time?",
        description: "Contact us via WhatsApp for an immediate and personalized quote.",
        ctaText: "Quote via WhatsApp"
      }
    }
  }
};

/**
 * Get content for current language
 * @param {string} page - Page key (e.g., 'home', 'prices')
 * @param {string} lang - Language code ('es' or 'en')
 * @returns {object} Content object for the page and language
 */
export function getContent(page, lang = 'es') {
  return content[page]?.[lang] || content[page]?.es || {};
} 