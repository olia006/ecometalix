// src/data/materials.js

export const materials = [
  {
    key: "cobre",
    name: "Cobre",
    image: "/images/materials/cobre.jpg",
    description: "Metal rojizo brillante, conductor y de alto valor. Se paga más si está limpio, sin soldaduras ni restos de plástico.",
    tags: ["No ferroso", "Alta demanda", "Aceptado"],
    articleLink: "/materiales/cobre"
  },
  {
    key: "bronce",
    name: "Bronce",
    image: "/images/materials/bronce.jpg",
    description: "Aleación de cobre y estaño. Color marrón dorado, no magnético. Mejor precio si está limpio.",
    tags: ["No ferroso", "Aceptado"],
    articleLink: "/materiales/bronce"
  },
  {
    key: "fierro-lata",
    name: "Fierro Lata",
    image: "/images/materials/FierroLata.jpg",
    description: "Chatarra ferrosa liviana: latas, chapas finas, estructuras ligeras. Magnético.",
    tags: ["Ferroso", "Aceptado"],
    articleLink: "/materiales/fierro-lata"
  },
  {
    key: "fierro-largo",
    name: "Fierro Largo",
    image: "/images/materials/FierroLargo.jpg",
    description: "Perfiles, vigas, barras de construcción. Material ferroso pesado de alta calidad.",
    tags: ["Ferroso", "Aceptado"],
    articleLink: "/materiales/fierro-largo"
  },
  {
    key: "fierro-corto",
    name: "Fierro Corto",
    image: "/images/materials/FierroCorto.jpg",
    description: "Chatarra ferrosa fragmentada: piezas pequeñas, tornillos, partes mecánicas.",
    tags: ["Ferroso", "Aceptado"],
    articleLink: "/materiales/fierro-corto"
  },
  {
    key: "aluminio",
    name: "Aluminio",
    image: "/images/materials/aluminium.jpg",
    description: "Metal plateado ligero, no magnético. Marcos, perfiles, latas. Mejor precio si está limpio.",
    tags: ["No ferroso", "Aceptado"],
    articleLink: "/materiales/aluminio"
  },
  {
    key: "viruta",
    name: "Viruta",
    image: "/images/materials/viruta.jpg",
    description: "Restos de mecanizado: virutas de torno, limaduras metálicas de diversos metales.",
    tags: ["Mixto", "Aceptado"],
    articleLink: "/materiales/viruta"
  },
  {
    key: "electrico",
    name: "Eléctrico",
    image: "/images/materials/electrico.jpg",
    description: "Cables, motores, transformadores, componentes eléctricos con contenido de cobre.",
    tags: ["Especializado", "Aceptado"],
    articleLink: "/materiales/electrico"
  },
  {
    key: "fierro-mixto",
    name: "Fierro Mixto",
    image: "/images/materials/fierromixto.JPG",
    description: "Chatarra ferrosa de diferentes tipos mezclada. Material magnético variado.",
    tags: ["Ferroso", "Aceptado"],
    articleLink: "/materiales/fierro-mixto"
  }
];

// Filter functions for easy categorization
export const getFerroMaterials = () => materials.filter(m => m.tags.includes("Ferroso"));
export const getNonFerroMaterials = () => materials.filter(m => m.tags.includes("No ferroso"));
export const getAcceptedMaterials = () => materials.filter(m => m.tags.includes("Aceptado"));

// Get material by key
export const getMaterialByKey = (key) => materials.find(m => m.key === key);

// Default export
export default materials;
