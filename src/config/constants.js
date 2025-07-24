/**
 * Application Constants - Single Source of Truth
 * Update values here and they will change across the entire app
 */

// Business Information
export const BUSINESS_INFO = {
  name: "Ecometalix Spa",
  legalName: "Ecometalix Spa",
  phone: "56940244042", // ✅ Real phone number
  phoneFormatted: "+56 9 4024 4042",
  whatsapp: "56940244042", // WhatsApp number (same as phone)
  email: "contacto@ecometalix.cl",
  domain: "ecometalix.cl",
  maps: "https://maps.app.goo.gl/wXznrHdkKCL1Ej5LA", // ✅ Real Google Maps URL
  address: {
    street: "Calle Ficticia 1234", // TODO: Update with real address
    city: "Santiago",
    region: "Región Metropolitana",
    country: "Chile",
    postalCode: "8320000"
  },
  coordinates: {
    latitude: "-33.4489", // TODO: Update with real coordinates
    longitude: "-70.6693"
  }
};

// Contact URLs
export const CONTACT_URLS = {
  whatsapp: `https://wa.me/${BUSINESS_INFO.phone}`,
  whatsappWithText: (message) => `https://wa.me/${BUSINESS_INFO.phone}?text=${encodeURIComponent(message)}`,
  phone: `tel:+${BUSINESS_INFO.phone}`,
  email: `mailto:${BUSINESS_INFO.email}`,
  googleMaps: "https://maps.app.goo.gl/wXznrHdkKCL1Ej5LA", // ✅ Real Google Maps URL
  googleBusiness: "https://maps.app.goo.gl/wXznrHdkKCL1Ej5LA" // ✅ Real Google Business URL
};

// Default WhatsApp Messages
export const WHATSAPP_MESSAGES = {
  general: "Hola, quisiera cotizar el precio de mi chatarra",
  priceInquiry: "Hola, quisiera cotizar el precio de mi chatarra",
  materialInquiry: (material) => `Hola, tengo ${material} para vender`,
  notifications: "Quiero recibir alertas de precios",
  support: "Hola, necesito ayuda",
  process: "Hola, quiero empezar el proceso para vender mi chatarra"
};

// Business Hours
export const BUSINESS_HOURS = {
  open: 8,
  close: 20,
  timezone: "America/Santiago",
  daysOpen: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  closedDays: ["Sunday"]
};

// Social Media
export const SOCIAL_MEDIA = {
  instagram: "https://www.instagram.com/ecometalix_spa",
  facebook: "https://www.facebook.com/ecometalix.spa",
  twitter: "https://twitter.com/ecometalix_spa",
  telegram: "https://t.me/ecometalix_spa"
};

// SEO Configuration
export const SEO_CONFIG = {
  baseUrl: `https://${BUSINESS_INFO.domain}`,
  defaultTitle: "Compra y Venta de Chatarra en Santiago | Ecometalix Spa",
  defaultDescription: "Ecometalix Spa: Compra y venta de chatarra, pago inmediato, horario extendido, balanza certificada. Santiago. Recibe tu dinero al instante.",
  defaultImage: "/images/og-image.jpg", // TODO: Create OG image
  twitterHandle: "@ecometalix_spa"
};

// API Configuration
export const API_CONFIG = {
  googlePlacesApiKey: "", // TODO: Set NEXT_PUBLIC_GOOGLE_PLACES_API_KEY in .env.local
  googlePlaceId: "", // TODO: Set NEXT_PUBLIC_GOOGLE_PLACE_ID in .env.local
  corsProxy: "https://api.allorigins.win/get?url=" // Consider using your own proxy
};

// Price Update Configuration
export const PRICE_UPDATE_CONFIG = {
  updateTime: '15:00',
  timezone: 'America/Santiago',
  
  // Generate dynamic date string
  getDynamicDate: () => {
    const now = new Date();
    const options = {
      day: 'numeric',
      month: 'long', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/Santiago'
    };
    return now.toLocaleDateString('es-CL', options);
  },
  
  // Get last business day update
  getLastUpdateDate: () => {
    const now = new Date();
    const today = now.getDay(); // 0 = Sunday, 6 = Saturday
    
    // If today is Sunday (0) or Monday (1), show Friday's date
    let daysBack = 0;
    if (today === 0) daysBack = 2; // Sunday -> Friday
    else if (today === 1) daysBack = 3; // Monday -> Friday
    
    const updateDate = new Date(now);
    updateDate.setDate(updateDate.getDate() - daysBack);
    
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'America/Santiago'
    };
    
    return `${updateDate.toLocaleDateString('es-CL', options)}, ${PRICE_UPDATE_CONFIG.updateTime}`;
  }
};

// Cache Configuration
export const CACHE_CONFIG = {
  reviewsCacheDuration: 3600000, // 1 hour
  pricesCacheDuration: 1800000,  // 30 minutes
  generalCacheDuration: 3600000   // 1 hour
}; 