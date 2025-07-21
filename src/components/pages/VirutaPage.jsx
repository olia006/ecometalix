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

export default function VirutaPage() {
  // FAQ structured data for SEO
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es la viruta fierrosa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La viruta fierrosa es el residuo metálico generado durante procesos de mecanizado, torneado o fresado de piezas de hierro y acero. Su aspecto es de pequeñas hebras o espirales metálicas. Es reciclable y se utiliza como materia prima para nueva producción de acero."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo se recicla la viruta fierrosa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La viruta fierrosa se recolecta, limpia y compacta para ser fundida en acererías, permitiendo su reutilización como materia prima. El reciclaje de viruta ayuda a reducir el consumo de recursos naturales y la generación de residuos industriales."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué aplicaciones tiene la viruta fierrosa reciclada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La viruta fierrosa reciclada se utiliza en la fabricación de nuevas piezas de acero, perfiles, varillas y componentes industriales, cerrando el ciclo del metal y favoreciendo la economía circular."
        }
      }
    ]
  };

  return (
    <>
      {/* SEO is now handled by App Router metadata in /app/materiales/viruta/page.tsx */}
      
      <FloatingCTA />
      
      <MaterialHero
        materialKey="viruta"
        name="Viruta Metálica"
        subtitle="Los residuos industriales con valor oculto"
                  image="/images/materials/viruta.jpg"
        tags={["Mixto", "Industrial", "Aceptado"]}
        stats={[
          { value: getPriceById("viruta")?.display || "$180", label: "Precio por kg" },
          { value: "1000°C", label: "Temperatura" },
          { value: "Tornos", label: "Origen" },
          { value: "WWII", label: "Valor histórico" }
        ]}
      />

      <div className={styles.container}>

        <div className={styles.content}>
          <section className={styles.section}>
            <SectionHeader 
              title="Características de la Viruta"
              subtitle="Residuos que valen oro"
            />
            <div className={styles.characteristics}>
              <div className={styles.characteristicItem}>
                <h4>Origen</h4>
                <p>Proceso de mecanizado: tornos, fresadoras, taladros</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Composición</h4>
                <p>Diferentes tipos de metales según la pieza trabajada</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Forma</h4>
                <p>Espirales, chips, polvo metálico fino</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Valor</h4>
                <p>Precio según pureza y tipo de metal predominante</p>
              </div>
            </div>
          </section>

          <article className={styles.section}>
            <div className={styles.storyContent}>
              <h3>Viruta Fierrosa: Origen, Reciclaje y Valor Industrial</h3>
              <p><em>
                De residuo industrial a materia prima estratégica: descubre cómo la viruta fierrosa se ha transformado en un componente clave de la economía circular moderna.
              </em></p>

              <p>
                La viruta fierrosa es uno de los residuos industriales más comunes en talleres mecánicos y fábricas de metalurgia en Chile. Se trata de fragmentos, hebras o espirales metálicas que resultan del mecanizado, corte, fresado y torneado de piezas de hierro y acero. Aunque tradicionalmente se consideraba un desecho, hoy la viruta es reconocida como una valiosa fuente de materia prima para el reciclaje y la producción de acero nuevo.
              </p>
              <p>
                El manejo adecuado de la viruta fierrosa es esencial para evitar la contaminación de suelos y aguas, y para optimizar los recursos en la industria. Una vez recolectada y separada de aceites o lubricantes, la viruta puede ser compactada en briquetas o fardos, facilitando su transporte y fundición en acererías. Este proceso contribuye directamente a la economía circular y reduce la necesidad de extraer minerales vírgenes, disminuyendo el impacto ambiental.
              </p>
              <p>
                En Chile, el reciclaje de viruta fierrosa permite la reincorporación de estos residuos en la cadena productiva, generando acero, perfiles, varillas y componentes industriales. Esta práctica, además de ser ambientalmente responsable, representa un ahorro energético significativo comparado con la producción tradicional de acero.
              </p>
              <p>
                La viruta fierrosa reciclada es clave para la industria, la sostenibilidad y la reducción de desechos en los procesos metalúrgicos modernos.
              </p>
            </div>
          </article>

          <section className={styles.section}>
            <SectionHeader 
              title="Curiosidades sobre la Viruta Fierrosa"
              subtitle="Datos fascinantes sobre este residuo valioso"
            />
            <div className={styles.curiositiesGrid}>
              <div className={styles.curiosityItem}>
                <h4>100% reciclable</h4>
                <p>
                  Toda la viruta de hierro y acero generada en talleres puede reciclarse y reincorporarse en nuevos procesos productivos, evitando el desperdicio de recursos.
                </p>
              </div>
              
              <div className={styles.curiosityItem}>
                <h4>Ahorro energético significativo</h4>
                <p>
                  El reciclaje de viruta fierrosa puede reducir el consumo energético en la producción de acero hasta en un 60%, comparado con el uso de mineral virgen.
                </p>
              </div>
              
              <div className={styles.curiosityItem}>
                <h4>Transformación eficiente</h4>
                <p>
                  La viruta se suele compactar en briquetas, lo que facilita su transporte, almacenamiento y fundición, aumentando la eficiencia del reciclaje.
                </p>
              </div>
              
              <div className={styles.curiosityItem}>
                <h4>Evita contaminación</h4>
                <p>
                  Un manejo inadecuado de la viruta puede causar contaminación de suelos y aguas; su reciclaje ayuda a minimizar este impacto.
                </p>
              </div>
              
              <div className={styles.curiosityItem}>
                <h4>Clave para la economía circular</h4>
                <p>
                  El reciclaje de viruta fierrosa fortalece la economía circular industrial, integrando residuos en nuevas cadenas productivas y reduciendo desechos.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <SectionHeader 
              title="¿Por qué la Viruta tiene precio variable?"
              subtitle="Factores que afectan la valorización"
            />
            <div className={styles.articleContent}>
              <p>
                <strong>Si produces viruta fierrosa en tu taller, es importante entender qué afecta su precio.</strong> La viruta no es un material homogéneo, y su valorización depende de varios factores técnicos y de mercado.
              </p>
              
              <div className={styles.priceFactors}>
                <div className={styles.priceFactor}>
                  <h4><Wrench size={16} /> Pureza del Material</h4>
                  <p>
                    La viruta mixta (diferentes metales) paga menos que la viruta pura de acero. La presencia de aceites, lubricantes o contaminantes también reduce el valor.
                  </p>
                </div>
                
                <div className={styles.priceFactor}>
                  <h4><Package size={16} /> Densidad y Compactación</h4>
                  <p>
                    La viruta suelta ocupa mucho espacio, encareciendo el transporte. La viruta compactada en briquetas o fardos obtiene mejor precio.
                  </p>
                </div>
                
                <div className={styles.priceFactor}>
                  <h4>🏭 Volumen de Producción</h4>
                  <p>
                    Los talleres con producción constante pueden negociar mejores precios por volumen y frecuencia de entrega.
                  </p>
                </div>
                
                <div className={styles.priceFactor}>
                  <h4>🌍 Demanda del Mercado</h4>
                  <p>
                    El precio fluctúa según la demanda de las acererías y la situación del mercado internacional del acero.
                  </p>
                </div>
              </div>
              
              <div className={styles.factBox}>
                <div className={styles.factIcon}><Lightbulb size={24} /></div>
                <div className={styles.factContent}>
                  <h4>Consejo para talleres</h4>
                  <p>
                    Para maximizar el valor de tu viruta: mantén separados los diferentes tipos de metales, drena aceites y lubricantes, y acumula cantidades significativas antes de vender. La viruta limpia y bien clasificada siempre paga mejor.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <SectionHeader 
              title="Especificaciones Técnicas"
              subtitle="Información relevante para el procesamiento"
            />
            <div className={styles.references}>
              <ul>
                <li>Procesamiento mediante compactación en briquetas de alta densidad</li>
                <li>Separación de aceites y lubricantes para purificación</li>
                <li>Clasificación por tipo de metal y grado de pureza</li>
                <li>Fundición en hornos especializados para recuperación total</li>
                <li>Integración en procesos de producción de acero secundario</li>
              </ul>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h3>¿Tienes viruta metálica para vender?</h3>
              <p>Evaluamos la composición de tu viruta para ofrecerte el mejor precio según el tipo de metal.</p>
              <SecondaryButton 
                href={CONTACT_URLS.whatsappWithText(WHATSAPP_MESSAGES.materialInquiry('viruta metálica'))}
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