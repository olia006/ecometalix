// src/data/materials.js

// Import actual images and placeholders for materials without images
import cobreImg from "../assets/images/materials/cobre.jpg";
import bronceImg from "../assets/images/materials/bronce.jpg";
import fierroLataImg from "../assets/images/materials/FierroLata.jpg";
import fierroLargoImg from "../assets/images/materials/FierroLargo.jpg";
import fierroCortoImg from "../assets/images/materials/FierroCorto.jpg";
import aluminioImg from "../assets/images/materials/aluminium.jpg";
import virutaImg from "../assets/images/materials/viruta.jpg";
import electricoImg from "../assets/images/materials/electrico.jpg";
import fierroMixtoImg from "../assets/images/materials/fierromixto.JPG";

export const materials = [
  {
    key: "cobre",
    name: "Cobre",
    image: cobreImg,
    description: "Metal rojizo brillante, conductor y de alto valor. Se paga más si está limpio, sin soldaduras ni restos de plástico.",
    tags: ["No ferroso", "Alta demanda", "Aceptado"],
    articleLink: "/materiales/cobre"
  },
  {
    key: "bronce",
    name: "Bronce",
    image: bronceImg,
    description: "Aleación de cobre y estaño. Color marrón dorado, no magnético. Mejor precio si está limpio.",
    tags: ["No ferroso", "Aceptado"],
    articleLink: "/materiales/bronce"
  },
  {
    key: "fierro-lata",
    name: "Fierro Lata",
    image: fierroLataImg,
    description: "Chatarra liviana y delgada, común en latas, estanterías y láminas. Puede contener pintura o residuos.",
    tags: ["Ferroso", "Común", "Aceptado"],
    articleLink: "/materiales/fierro-lata"
  },
  {
    key: "fierro-largo",
    name: "Fierro Largo",
    image: fierroLargoImg,
    description: "Barras, perfiles, tubos y vigas largas de fierro. Aceptado en piezas mayores a 1 metro.",
    tags: ["Ferroso", "Voluminoso", "Aceptado"],
    articleLink: "/materiales/fierro-largo"
  },
  {
    key: "fierro-corto",
    name: "Fierro Corto",
    image: fierroCortoImg,
    description: "Piezas de fierro menores a 1 metro. Se paga por peso y condición.",
    tags: ["Ferroso", "Aceptado"],
    articleLink: "/materiales/fierro-corto"
  },
  {
    key: "fierro-mixto",
    name: "Fierro Mixto",
    image: fierroMixtoImg,
    description: "Mezcla de diferentes tipos de fierro y otros metales. Consultar condiciones para mejor precio.",
    tags: ["Ferroso", "Mixto"],
    articleLink: "/materiales/fierro-mixto"
  },
  {
    key: "aluminio",
    name: "Aluminio",
    image: aluminioImg,
    description: "Ligero y no magnético. Se paga bien si está limpio y sin mezclas con otros materiales.",
    tags: ["No ferroso", "Ligero", "Aceptado"],
    articleLink: "/materiales/aluminio"
  },
  {
    key: "viruta",
    name: "Viruta Metálica",
    image: virutaImg,
    description: "Virutas y residuos metálicos de procesos industriales. Precio según tipo de metal y limpieza.",
    tags: ["Mixto", "Industrial", "Aceptado"],
    articleLink: "/materiales/viruta"
  },
  {
    key: "electrico",
    name: "Electrónicos",
    image: electricoImg,
    description: "Residuos electrónicos: placas, circuitos, componentes de computadores, TV y equipos. Contiene metales preciosos recuperables.",
    tags: ["Electrónicos", "Metales preciosos", "Aceptado"],
    articleLink: "/materiales/electrico"
  }
];
