import React from "react";
import { Wrench, Package, Lightbulb } from "lucide-react";
// SEO now handled by App Router metadata
import FloatingCTA from "../../components/FloatingCTA";
import MaterialHero from "../../components/MaterialHero";
import MaterialNavigation from "../../components/MaterialNavigation";
import SectionHeader from "../../components/SectionHeader";
import SecondaryButton from "../../components/SecondaryButton";
import styles from "./MaterialPage.module.css";
// Image will be referenced directly as string path
import { getPriceById } from "../../data/prices";
import { CONTACT_URLS, WHATSAPP_MESSAGES } from "../../config/constants";

export default function FierroLataPage() {
  // FAQ structured data for SEO
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es el Fierro Lata y para qué se usa en Chile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El Fierro Lata es chatarra ferrosa en forma de lámina delgada, como envases, utensilios de cocina, techumbres y canaletas. Es ampliamente reciclado en Chile por su facilidad de procesamiento y su uso en la industria y construcción."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuál es la diferencia entre Fierro Lata y Fierro Grueso?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El Fierro Lata corresponde a piezas delgadas y livianas, generalmente galvanizadas, mientras que el Fierro Grueso es macizo y más pesado, usado en vigas y estructuras. Ambos tienen valor en reciclaje pero se pagan a precios distintos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Se puede reciclar el Fierro Lata?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, el Fierro Lata es altamente reciclable. Se procesa y funde en hornos especializados, permitiendo su reutilización en nuevos productos metálicos, apoyando la economía circular y reduciendo el impacto ambiental."
        }
      }
    ]
  };

  return (
    <>
      {/* SEO is now handled by App Router metadata in /app/materiales/fierro-lata/page.tsx */}
      
      <FloatingCTA />
      
      <MaterialHero
        materialKey="fierro-lata"
        name="Fierro Lata"
        subtitle="Chatarra liviana y versátil de uso cotidiano"
                  image="/images/materials/FierroLata.jpg"
        tags={["Ferroso", "Común", "Aceptado"]}
        stats={[
          { value: getPriceById("fierro-lata")?.display || "$220", label: "Precio por kg" },
          { value: "1800s", label: "Revolución" },
          { value: "50 años", label: "Sin abrelatas" }
        ]}
      />

      <div className={styles.container}>

        <div className={styles.content}>
          <section className={styles.section}>
            <SectionHeader 
              title="Características del Fierro Lata"
              subtitle="El material más común en chatarra"
            />
            <div className={styles.characteristics}>
              <div className={styles.characteristicItem}>
                <h4>Composición</h4>
                <p>Acero de bajo calibre, generalmente laminado en frío</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Espesor</h4>
                <p>Delgado y liviano, fácil de manejar y transportar</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Estado</h4>
                <p>Puede contener pintura, óxido o residuos industriales</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Aplicaciones</h4>
                <p>Latas, estanterías, láminas, electrodomésticos</p>
              </div>
            </div>
          </section>

          <article className={styles.section}>
            <div className={styles.storyContent}>
              <h3>Fierro Lata: El Material Versátil del Reciclaje Moderno</h3>
              <p><em>
                Innovación y sostenibilidad en cada pieza: descubre cómo el fierro lata se ha convertido en uno de los pilares de la economía circular urbana en Chile.
              </em></p>

              <p>
                El Fierro Lata representa una de las formas más eficientes de chatarra ferrosa en el mercado chileno. Este material, caracterizado por su estructura laminar delgada, abarca desde envases domésticos hasta componentes industriales como techumbres, canaletas y estructuras livianas. Su popularidad en el reciclaje se debe a su facilidad de procesamiento y su abundante disponibilidad en centros urbanos.
              </p>
              <p>
                En la industria del reciclaje nacional, el Fierro Lata se posiciona como un material de alto volumen y procesamiento eficiente. Su clasificación diferenciada respecto a otros tipos de chatarra ferrosa permite establecer precios específicos según su pureza y condición. Los centros de reciclaje especializados pueden procesar grandes volúmenes de este material, optimizando tanto el transporte como el almacenamiento previo a la fundición.
              </p>
              <p>
                La versatilidad del Fierro Lata galvanizado lo convierte en un recurso especialmente valioso. Su recubrimiento de zinc no solo proporciona resistencia a la corrosión, sino que también añade valor al material reciclado. Este proceso de galvanización, desarrollado industrialmente desde el siglo XIX, permite que productos como canaletas y techumbres mantengan su utilidad por décadas antes de ingresar al ciclo de reciclaje.
              </p>
              <p>
                El impacto ambiental del reciclaje de Fierro Lata es considerablemente positivo. Su procesamiento requiere significativamente menos energía que la producción de acero primario, contribuyendo a la reducción de emisiones de CO2 y al aprovechamiento responsable de recursos naturales. Esta práctica fortalece la economía circular urbana y genera oportunidades laborales en el sector de gestión de residuos.
              </p>
            </div>
          </article>

          <section className={styles.section}>
            <SectionHeader 
              title="Datos Fascinantes sobre el Fierro Lata"
              subtitle="Curiosidades que demuestran su importancia"
            />
            <div className={styles.curiositiesGrid}>
              <div className={styles.curiosityItem}>
                <h4>Separación magnética eficiente</h4>
                <p>
                  Su naturaleza ferromagnética permite una separación rápida y eficiente en plantas de reciclaje mediante sistemas de imanes potentes, facilitando el procesamiento industrial a gran escala.
                </p>
              </div>
              
              <div className={styles.curiosityItem}>
                <h4>Ahorro energético significativo</h4>
                <p>
                  El reciclaje de Fierro Lata puede reducir hasta un 60% del consumo energético necesario para producir acero nuevo, representando un impacto ambiental positivo considerable.
                </p>
              </div>
              
              <div className={styles.curiosityItem}>
                <h4>Omnipresencia urbana</h4>
                <p>
                  Este material se encuentra en prácticamente todos los hogares e industrias chilenas, desde utensilios de cocina hasta sistemas de techado, generando un flujo constante para el reciclaje.
                </p>
              </div>
              
              <div className={styles.curiosityItem}>
                <h4>Protección anticorrosiva</h4>
                <p>
                  El proceso de galvanización crea una capa protectora de zinc que puede extender la vida útil del material hasta 50 años, especialmente en ambientes húmedos costeros.
                </p>
              </div>
              
              <div className={styles.curiosityItem}>
                <h4>Motor de economía circular</h4>
                <p>
                  Su reciclaje genera empleos directos e indirectos en la cadena de valor, desde la recolección hasta el procesamiento final, fortaleciendo la economía local sustentable.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <SectionHeader 
              title="¿Por qué el Fierro Lata es más barato?"
              subtitle="Explicación para vendedores"
            />
            <div className={styles.articleContent}>
              <p>
                <strong>Si tienes fierro lata para vender, es importante entender por qué su precio es menor comparado con otros tipos de chatarra ferrosa.</strong> Esta diferencia no significa que tu material sea menos valioso, sino que responde a factores técnicos y logísticos específicos del proceso de reciclaje.
              </p>
              
              <div className={styles.priceFactors}>
                <div className={styles.priceFactor}>
                  <h4>🏋️ Peso y Densidad</h4>
                  <p>
                    El fierro lata es más liviano por metro cuadrado. Esto significa que necesitas más volumen para alcanzar el mismo peso que chatarra más densa, afectando los costos de transporte y almacenamiento.
                  </p>
                </div>
                
                <div className={styles.priceFactor}>
                  <h4><Wrench size={16} /> Procesamiento Adicional</h4>
                  <p>
                    Requiere pasos extra como limpieza de pintura, óxido o galvanizado. Estos procesos adicionales reducen la eficiencia operativa y se reflejan en el precio final.
                  </p>
                </div>
                
                <div className={styles.priceFactor}>
                  <h4><Package size={16} /> Compactación Necesaria</h4>
                  <p>
                    Su forma plana requiere compactación para optimizar el transporte. Este proceso adicional genera costos que se descuentan del precio de compra.
                  </p>
                </div>
                
                <div className={styles.priceFactor}>
                  <h4>🔄 Alto Volumen de Mercado</h4>
                  <p>
                    La abundancia de fierro lata en el mercado (latas, electrodomésticos, techumbres) mantiene la oferta alta, lo que naturalmente presiona los precios hacia abajo.
                  </p>
                </div>
              </div>
              
              <div className="fact-box">
                <div className="fact-icon"><Lightbulb size={24} /></div>
                <div className="fact-content">
                  <h4>Consejo para vendedores</h4>
                  <p>
                    Aunque el precio por kilo es menor, el fierro lata sigue siendo valioso. Para maximizar tus ingresos: limpia el material de basura, plástico, goma y contaminantes, separa piezas galvanizadas de las pintadas, y acumula cantidades significativas para reducir costos de transporte por viaje.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <SectionHeader 
              title="Información Técnica"
              subtitle="Datos relevantes para el reciclaje profesional"
            />
            <div className={styles.references}>
              <ul>
                <li>Procesamiento industrial mediante hornos de alta temperatura</li>
                <li>Clasificación según espesor y composición del material</li>
                <li>Compatibilidad con procesos de fundición estándar</li>
                <li>Aprovechamiento del recubrimiento galvanizado como valor agregado</li>
              </ul>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h3>¿Tienes fierro lata para vender?</h3>
              <p>Aceptamos fierro lata en cualquier condición. Pesaje justo y pago inmediato.</p>
              <SecondaryButton 
                href={CONTACT_URLS.whatsappWithText(WHATSAPP_MESSAGES.materialInquiry('fierro lata'))}
                target="_blank"
                rel="noopener noreferrer"
              >
                Cotizar por WhatsApp
              </SecondaryButton>
            </div>
          </section>
        </div>
      </div>
      
      <MaterialNavigation />
    </>
  );
} 