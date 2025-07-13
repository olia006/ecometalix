import React from "react";
import Seo from "../../components/seo/Seo";
import FloatingCTA from "../../components/FloatingCTA";
import MaterialHero from "../../components/MaterialHero";
import MaterialNavigation from "../../components/MaterialNavigation";
import SectionHeader from "../../components/SectionHeader";
import PrimaryButton from "../../components/PrimaryButton";
import styles from "./MaterialPage.module.css";
import fierroCortoImg from "../../assets/images/materials/FierroCorto.jpg";

export default function FierroCortoPage() {
  // FAQ structured data for SEO
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es el Fierro Corto?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El Fierro Corto es chatarra ferrosa de dimensiones medianas a pequeñas, como perfiles cortados, trozos de varillas y vigas recortadas. Se utiliza ampliamente en construcción, desarme y reciclaje industrial por su facilidad de manejo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo se diferencia del Fierro Largo y la Lata?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Se diferencia por su tamaño y espesor: Fierro Corto incluye trozos de acero industrial cortados, mientras que Fierro Largo son perfiles enteros y Lata comprende piezas más delgadas como chapas galvanizadas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuáles son las ventajas del Fierro Corto en reciclaje?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El Fierro Corto ofrece ventajas como mayor pureza, facilidad de clasificación, transporte eficiente y procesamiento optimizado en plantas de reciclaje, lo que se traduce en mejor valorización del material."
        }
      }
    ]
  };

  return (
    <>
      <Seo
        title="Fierro Corto: Usos, Mercado y Curiosidades | EcoMetalix Santiago"
        description="Descubre el Fierro Corto: qué es, cómo se clasifica, su valor en Chile y datos interesantes. Todo sobre su reciclaje y relevancia local."
        canonical="/materiales/fierro-corto"
        keywords="fierro corto, fierro reciclaje chile, chatarra fierro corto, precios fierro corto, reciclaje fierro"
        structuredData={faqStructuredData}
      />
      
      <FloatingCTA />
      
      <MaterialHero
        materialKey="fierro-corto"
        name="Fierro Corto"
        subtitle="Piezas metálicas compactas de gran utilidad"
        image={fierroCortoImg}
        tags={["Ferroso", "Compacto", "Aceptado"]}
        stats={[
          { value: "<1m", label: "Longitud máx." },
          { value: "$100", label: "Tornillo titanio" },
          { value: "75%", label: "Ahorro energía" }
        ]}
      />

      <div className={styles.container}>

        <div className={styles.content}>
          <section className={styles.section}>
            <SectionHeader 
              title="Características del Fierro Corto"
              subtitle="Versatilidad en formato compacto"
            />
            <div className={styles.characteristics}>
              <div className={styles.characteristicItem}>
                <h4>Tamaño</h4>
                <p>Piezas de fierro menores a 1 metro de longitud</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Variedad</h4>
                <p>Tornillos, pernos, pequeñas piezas industriales</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Facilidad</h4>
                <p>Fácil de transportar y manejar</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Valoración</h4>
                <p>Precio según peso y condición del material</p>
              </div>
            </div>
          </section>

          <article className={styles.section}>
            <div className={styles.storyContent}>
              <h3>Fierro Corto: Eficiencia y Valor en el Reciclaje Industrial</h3>
              <p><em>
                Maximizando el potencial de cada pieza: descubre cómo el fierro corto se ha convertido en el material preferido por su eficiencia operativa y alta valorización en el mercado.
              </em></p>

              <p>
                El Fierro Corto constituye una categoría especializada de chatarra ferrosa que se distingue por su tamaño optimizado y alta eficiencia en el procesamiento. Este material comprende piezas de acero y hierro de dimensiones medianas a pequeñas, incluyendo perfiles cortados, fragmentos de varillas y secciones de vigas que han sido recortadas para facilitar su manipulación y transporte.
              </p>
              <p>
                Su clasificación estratégica en el mercado del reciclaje responde a ventajas operativas significativas. Las dimensiones compactas del Fierro Corto permiten una densidad de carga superior durante el transporte, optimizando los costos logísticos y mejorando la eficiencia del proceso de acopio. Esta característica lo posiciona como un material preferido en operaciones de reciclaje que priorizan la eficiencia y la rentabilidad.
              </p>
              <p>
                La pureza relativa del Fierro Corto representa otro factor diferenciador importante. Al provenir generalmente de procesos industriales controlados o de desarmes planificados, este material tiende a presentar menor contaminación en comparación con chatarra de origen menos controlado. Esta característica se traduce en un procesamiento más eficiente y en una valorización superior en el mercado del reciclaje.
              </p>
              <p>
                El impacto económico del Fierro Corto en la industria del reciclaje es considerable. Su procesamiento genera empleos especializados en clasificación, manejo y procesamiento, contribuyendo al desarrollo de competencias técnicas en el sector. Además, su reciclaje eficiente apoya la economía circular al reducir la demanda de materias primas vírgenes y minimizar el impacto ambiental asociado a la producción de acero primario.
              </p>
            </div>
          </article>

          <section className={styles.section}>
            <SectionHeader 
              title="Datos Interesantes sobre el Fierro Corto"
              subtitle="Características que lo hacen especial"
            />
            <div className={styles.curiositiesGrid}>
              <div className={styles.curiosityItem}>
                <h4>Superior valorización por pureza</h4>
                <p>
                  La naturaleza controlada de su origen industrial permite obtener un material con menor contaminación, lo que se traduce en precios más competitivos y procesamiento más eficiente.
                </p>
              </div>
              
              <div className={styles.curiosityItem}>
                <h4>Optimización logística</h4>
                <p>
                  Su tamaño compacto permite cargas más densas durante el transporte, reduciendo costos logísticos y mejorando la eficiencia operativa en toda la cadena de reciclaje.
                </p>
              </div>
              
              <div className={styles.curiosityItem}>
                <h4>Impulso a la economía local</h4>
                <p>
                  El procesamiento de Fierro Corto genera empleos especializados y fortalece la cadena de valor del reciclaje, contribuyendo al desarrollo económico sustentable de las comunidades.
                </p>
              </div>
              
              <div className={styles.curiosityItem}>
                <h4>Eficiencia energética</h4>
                <p>
                  Su reciclaje requiere significativamente menos energía que la producción de acero primario, contribuyendo a la reducción de la huella de carbono industrial.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <SectionHeader 
              title="¿Por qué el Fierro Corto paga más?"
              subtitle="Ventajas para vendedores"
            />
            <div className={styles.articleContent}>
              <p>
                <strong>Si tienes fierro corto para vender, tienes una ventaja: este material generalmente paga mejor que otros tipos de chatarra ferrosa.</strong> Esta diferencia de precio no es casualidad, sino que responde a características específicas que lo hacen más valioso para los procesadores.
              </p>
              
              <div className={styles.priceFactors}>
                <div className={styles.priceFactor}>
                  <h4>⚡ Mayor Densidad</h4>
                  <p>
                    El fierro corto es más compacto y pesado. Esto significa que ocupas menos espacio en el transporte para el mismo peso, reduciendo costos logísticos y mejorando la eficiencia operativa.
                  </p>
                </div>
                
                <div className={styles.priceFactor}>
                  <h4>🔬 Mejor Pureza</h4>
                  <p>
                    Generalmente proviene de procesos industriales controlados, con menos contaminación que chatarra doméstica. Menos impurezas significa procesamiento más eficiente y menor costo de refinación.
                  </p>
                </div>
                
                <div className={styles.priceFactor}>
                  <h4>⚙️ Procesamiento Directo</h4>
                  <p>
                    Su tamaño y forma permiten alimentar directamente hornos de fundición sin necesidad de compactación previa, ahorrando tiempo y costos de procesamiento.
                  </p>
                </div>
                
                <div className={styles.priceFactor}>
                  <h4>📈 Menor Oferta</h4>
                  <p>
                    Es menos común que la lata doméstica, lo que mantiene una oferta más controlada y precios más estables al alza.
                  </p>
                </div>
              </div>
              
              <div className="fact-box">
                <div className="fact-icon">💰</div>
                <div className="fact-content">
                  <h4>Consejo para maximizar valor</h4>
                  <p>
                    Para obtener el mejor precio por tu fierro corto: mantén las piezas libres de basura, plástico, goma y otros contaminantes, separa por grosor y calidad, y presenta el material limpio y organizado. Los compradores pagan más por material que requiere menos procesamiento adicional.
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
                <li>Dimensiones optimizadas para transporte eficiente</li>
                <li>Clasificación según densidad y composición metálica</li>
                <li>Compatibilidad con sistemas de fundición convencionales</li>
                <li>Procesamiento mediante separación magnética avanzada</li>
              </ul>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h3>¿Tienes fierro corto para vender?</h3>
              <p>Aceptamos piezas pequeñas de fierro y acero. Cada kilogramo cuenta.</p>
              <PrimaryButton 
                href="https://wa.me/56912345678?text=Hola,%20tengo%20fierro%20corto%20para%20vender"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cotizar por WhatsApp
              </PrimaryButton>
            </div>
          </section>
        </div>
      </div>
      
      <MaterialNavigation />
    </>
  );
} 