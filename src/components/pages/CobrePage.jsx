import React from "react";
import FloatingCTA from "../../components/FloatingCTA";
import MaterialHero from "../../components/MaterialHero";
import MaterialNavigation from "../../components/MaterialNavigation";
import SectionHeader from "../../components/SectionHeader";
import SecondaryButton from "../../components/SecondaryButton";
import styles from "./MaterialPage.module.css";
// Image will be referenced directly as string path
import { getPriceById } from "../../data/prices";
import { CONTACT_URLS, WHATSAPP_MESSAGES } from "../../config/constants";

export default function CobrePage() {
  return (
    <>
      {/* SEO is now handled by App Router metadata in /app/materiales/cobre/page.tsx */}
      
      <FloatingCTA />
      
      <MaterialHero
        materialKey="cobre"
        name="Cobre"
        subtitle="El metal rojizo de alta conductividad y valor excepcional"
                  image="/images/materials/cobre.jpg"
        tags={["No ferroso", "Alta demanda", "Aceptado"]}
        stats={[
          { value: getPriceById("cobre")?.display || "$4.300", label: "Precio por kg" },
          { value: "99.9%", label: "Pureza típica" },
          { value: "10,000", label: "Años de uso" }
        ]}
      />

      <div className={styles.container}>
        <div className={styles.content}>
          <section className={styles.section}>
            <SectionHeader 
              title="Características del Cobre"
              subtitle="Propiedades que lo hacen tan valioso"
            />
            <div className={styles.characteristics}>
              <div className={styles.characteristicItem}>
                <h4>Color y Apariencia</h4>
                <p>Rojizo brillante cuando está limpio, se oxida a verde azulado</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Conductividad</h4>
                <p>Excelente conductor de electricidad y calor</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Durabilidad</h4>
                <p>Resistente a la corrosión y muy maleable</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Valor</h4>
                <p>Uno de los metales más cotizados en el mercado de chatarra</p>
              </div>
            </div>
          </section>

          <article className={styles.section}>
            <div className={styles.storyContent}>
              <h3>El cobre: historia, poder y futuro del &ldquo;metal chileno&rdquo;</h3>
              <p><em>
                Desde civilizaciones antiguas hasta la innovación del siglo XXI, el cobre ha sido el metal que conecta la historia de Chile con el mundo moderno. Descubre por qué sigue siendo insustituible para el desarrollo humano y tecnológico.
              </em></p>

              <p>
                El cobre es uno de los metales fundamentales para el desarrollo de la humanidad. Descubierto y utilizado por civilizaciones antiguas como los sumerios, egipcios y chinos, su capacidad de conducir electricidad, su maleabilidad y su resistencia a la corrosión lo convirtieron en un material esencial en la evolución tecnológica.
              </p>
              <p>
                En América del Sur, los pueblos precolombinos ya empleaban el cobre para fabricar herramientas, armas y ornamentos. En Chile, vestigios arqueológicos demuestran que las culturas originarias extraían y trabajaban este metal mucho antes de la llegada de los europeos.
              </p>
              <p>
                Durante la Colonia, el cobre chileno fue reconocido internacionalmente por su alta pureza. El auge de la minería moderna en el siglo XX posicionó a Chile como el principal productor mundial: actualmente, más del 25% del cobre extraído a nivel global proviene de nuestro país (<a href="https://www.cochilco.cl" rel="noopener noreferrer" target="_blank">Cochilco</a>).
              </p>
              <p>
                El cobre no solo es clave para la economía nacional, sino también para la vida diaria moderna. Desde cables eléctricos, infraestructura de telecomunicaciones y vehículos eléctricos, hasta equipos médicos y tecnologías de energías renovables, el cobre está presente en casi todos los aspectos de la vida contemporánea.
              </p>
              <p>
                El reciclaje del cobre es fundamental para un desarrollo sostenible. El cobre puede reciclarse infinitamente sin perder sus propiedades, lo que reduce la necesidad de extraer nuevo mineral y disminuye el impacto ambiental (<a href="https://copperalliance.org/about-copper/recycling/" rel="noopener noreferrer" target="_blank">International Copper Association</a>).
              </p>
            </div>
          </article>

          <section className={styles.section}>
            <SectionHeader 
              title="Curiosidades sobre el cobre"
              subtitle="Datos fascinantes respaldados por la ciencia"
            />
            <div className={styles.curiositiesGrid}>
              <div className={styles.curiosityItem}>
                <h4>¿Por qué el cobre es rojizo?</h4>
                <p>
                  Es uno de los pocos metales (junto al oro) con color propio. El cobre absorbe y refleja la luz de manera única gracias a su estructura atómica (<a href="https://www.rsc.org/periodic-table/element/29/copper" rel="noopener noreferrer" target="_blank">Royal Society of Chemistry</a>).
                </p>
              </div>

              <div className={styles.curiosityItem}>
                <h4>Propiedades antimicrobianas</h4>
                <p>
                  Las superficies de cobre pueden eliminar hasta el 99,9% de bacterias y virus en pocas horas. Por eso hospitales modernos usan cobre en manillas, barandas y superficies críticas (<a href="https://www.epa.gov/antimicrobials/copper-alloy-surfaces" rel="noopener noreferrer" target="_blank">U.S. EPA</a>).
                </p>
              </div>

              <div className={styles.curiosityItem}>
                <h4>Reciclaje infinito</h4>
                <p>
                  El cobre puede reciclarse indefinidamente sin perder calidad. Más del 65% del cobre producido desde 1900 sigue en uso (<a href="https://www.icsg.org/" rel="noopener noreferrer" target="_blank">International Copper Study Group</a>).
                </p>
              </div>

              <div className={styles.curiosityItem}>
                <h4>Esencial para la vida</h4>
                <p>
                  El cobre es un oligoelemento esencial: ayuda a la formación de glóbulos rojos, el sistema nervioso y la producción de energía celular (<a href="https://ods.od.nih.gov/factsheets/Copper-HealthProfessional/" rel="noopener noreferrer" target="_blank">NIH</a>).
                </p>
              </div>

              <div className={styles.curiosityItem}>
                <h4>Un kilo, kilómetros de hilo</h4>
                <p>
                  Un solo kilo de cobre puede transformarse en más de 24 km de hilo conductor, clave para telecomunicaciones y energía.
                </p>
              </div>

              <div className={styles.curiosityItem}>
                <h4>El cobre en la arquitectura</h4>
                <p>
                  La &ldquo;pátina&rdquo; verde de estatuas como la Estatua de la Libertad se debe al óxido de cobre, que protege el metal contra la corrosión (<a href="https://www.si.edu/spotlight/statue-of-liberty-patina" rel="noopener noreferrer" target="_blank">Smithsonian Institution</a>).
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <SectionHeader 
              title="Fuentes y referencias"
              subtitle="Información respaldada por instituciones profesionales"
            />
            <div className={styles.references}>
              <ul>
                <li><a href="https://www.cochilco.cl" rel="noopener noreferrer" target="_blank">Comisión Chilena del Cobre (Cochilco)</a></li>
                <li><a href="https://copperalliance.org/about-copper/recycling/" rel="noopener noreferrer" target="_blank">International Copper Association</a></li>
                <li><a href="https://www.mnhn.gob.cl/" rel="noopener noreferrer" target="_blank">Museo Chileno de Historia Natural</a></li>
                <li><a href="https://www.epa.gov/antimicrobials/copper-alloy-surfaces" rel="noopener noreferrer" target="_blank">U.S. Environmental Protection Agency</a></li>
                <li><a href="https://www.icsg.org/" rel="noopener noreferrer" target="_blank">International Copper Study Group</a></li>
              </ul>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h3>¿Tienes cobre para vender?</h3>
              <p>Obtén el mejor precio por tu chatarra de cobre. Pesaje certificado y pago inmediato.</p>
              <SecondaryButton 
                href={CONTACT_URLS.whatsappWithText(WHATSAPP_MESSAGES.materialInquiry('cobre'))}
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