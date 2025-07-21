// src/data/prices.js
// SINGLE SOURCE OF TRUTH for all metal prices
// Update prices here and they will automatically change across the entire website

import { LAST_PRICE_UPDATE } from '../utils/dateUtils';

// Last update timestamp - imported from centralized date utility
export const lastUpdated = LAST_PRICE_UPDATE;

// Main price list - used in price table, calculator, and animations
export const metalPrices = [
  { 
    id: "fierro-lata",
    metal: "Fierro Lata", 
    price: 220,
    display: "$220 / kg",
    category: "ferroso",
    description: "Chatarra liviana y delgada"
  },
  { 
    id: "fierro-largo",
    metal: "Fierro Largo", 
    price: 240,
    display: "$240 / kg",
    category: "ferroso",
    description: "Barras, perfiles, tubos y vigas"
  },
  { 
    id: "fierro-corto",
    metal: "Fierro Corto", 
    price: 230,
    display: "$230 / kg",
    category: "ferroso",
    description: "Piezas menores a 1 metro"
  },
  { 
    id: "fierro-mixto",
    metal: "Fierro Mixto", 
    price: 215,
    display: "$215 / kg",
    category: "ferroso",
    description: "Mezcla de diferentes tipos"
  },
  { 
    id: "cobre",
    metal: "Cobre", 
    price: 4300,
    display: "$4.300 / kg",
    category: "no-ferroso",
    description: "Metal rojizo de alta conductividad"
  },
  { 
    id: "bronce",
    metal: "Bronce", 
    price: 2800,
    display: "$2.800 / kg",
    category: "no-ferroso",
    description: "Aleación de cobre y estaño"
  },
  { 
    id: "aluminio",
    metal: "Aluminio (diferente)", 
    price: 1350,
    display: "$1.350 / kg",
    category: "no-ferroso",
    description: "Ligero y no magnético"
  },
  { 
    id: "electrico",
    metal: "Chatarra Eléctrica", 
    price: null,
    display: "Consultar",
    category: "especial",
    description: "Residuos electrónicos"
  },
  { 
    id: "viruta",
    metal: "Viruta", 
    price: 180,
    display: "$180 / kg",
    category: "ferroso",
    description: "Restos de mecanizado y limaduras"
  },
  { 
    id: "grandes",
    metal: "Piezas Grandes", 
    price: null,
    display: "Consultar",
    category: "especial",
    description: "Volúmenes industriales"
  },
  { 
    id: "otros",
    metal: "Otros metales", 
    price: null,
    display: "Consultar por WhatsApp",
    category: "especial",
    description: "Materiales diversos"
  }
];

// Featured prices for homepage preview (top 3 most valuable)
export const featuredPrices = metalPrices
  .filter(item => item.price !== null)
  .sort((a, b) => b.price - a.price)
  .slice(0, 3);

// Animated prices for card rotation (exclude "Consultar" items)
export const animatedPrices = metalPrices
  .filter(item => item.price !== null)
  .map(item => ({
    material: item.metal.replace(" (diferente)", ""), // Clean up display name
    price: item.display.split(" / kg")[0], // Extract price part
    unit: "/ kg"
  }));

// Helper functions
export const getPriceById = (id) => {
  return metalPrices.find(item => item.id === id);
};

export const getPriceByMetal = (metalName) => {
  return metalPrices.find(item => item.metal === metalName);
};

export const getMetalsByCategory = (category) => {
  return metalPrices.filter(item => item.category === category);
}; 