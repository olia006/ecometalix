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
  email: "contacto@ecometalix.cl",
  domain: "ecometalix.cl",
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

// Cache Configuration
export const CACHE_CONFIG = {
  reviewsCacheDuration: 3600000, // 1 hour
  pricesCacheDuration: 1800000,  // 30 minutes
  generalCacheDuration: 3600000   // 1 hour
}; 