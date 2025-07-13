import React from "react";
import Seo from "../../components/seo/Seo";
import FloatingCTA from "../../components/FloatingCTA";
import MaterialHero from "../../components/MaterialHero";
import MaterialNavigation from "../../components/MaterialNavigation";
import SectionHeader from "../../components/SectionHeader";
import PrimaryButton from "../../components/PrimaryButton";
import styles from "./MaterialPage.module.css";
import electricoImg from "../../assets/images/materials/electrico.jpg";

export default function ElectricoPage() {
  return (
    <>
      <Seo
        title="Residuos Electrónicos: Reciclaje y Recuperación | Ecometalix Spa"
        description="Reciclaje de residuos electrónicos: placas, circuitos, computadores, TV. Recuperación de metales preciosos como oro, plata y cobre de componentes electrónicos."
        canonical="/materiales/electrico"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "¿Qué son los residuos electrónicos?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Los residuos electrónicos (e-waste) incluyen placas de circuitos, componentes de computadores, TV, celulares y equipos electrónicos. Contienen metales preciosos como oro, plata y cobre que pueden ser recuperados."
              }
            },
            {
              "@type": "Question",
              "name": "¿Qué componentes electrónicos tienen mayor valor?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Las placas madre, procesadores, memorias RAM y tarjetas gráficas tienen mayor valor por su contenido de oro. Los conectores dorados y circuitos integrados también son muy valorados."
              }
            },
            {
              "@type": "Question",
              "name": "¿Por qué es importante el reciclaje de electrónicos?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "El reciclaje de electrónicos recupera metales preciosos, evita la contaminación por elementos tóxicos y reduce la necesidad de minería. Es fundamental para la economía circular y la protección ambiental."
              }
            }
          ]
        }}
      />
      
      <FloatingCTA />
      
      <MaterialHero
        materialKey="electrico"
        name="Electrónicos"
        subtitle="Residuos electrónicos con metales preciosos recuperables"
        image={electricoImg}
        tags={["Electrónicos", "Metales preciosos", "Aceptado"]}
        stats={[
          { value: "Variable", label: "Precio por kg" },
          { value: "Au + Ag", label: "Oro y plata" },
          { value: "50M ton", label: "E-waste mundial" }
        ]}
      />

      <div className={styles.container}>
        <div className={styles.content}>
          <section className={styles.section}>
            <SectionHeader 
              title="Tipos de Residuos Electrónicos"
              subtitle="Componentes con mayor valor de recuperación"
            />
            <div className={styles.characteristics}>
              <div className={styles.characteristicItem}>
                <h4>Placas de Circuitos</h4>
                <p>Placas madre, tarjetas gráficas, memorias. Alto contenido de oro y plata</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Procesadores</h4>
                <p>CPU, chips, microprocesadores. Máximo valor por gramo</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Conectores</h4>
                <p>Conectores dorados, pines, terminales. Oro puro recuperable</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Componentes TV</h4>
                <p>Placas de TV, monitores, equipos de sonido. Cobre y metales básicos</p>
              </div>
            </div>
          </section>

          <article className={styles.section}>
            <div className={styles.storyContent}>
              <h3>Residuos Electrónicos: La Mina Urbana del Siglo XXI</h3>
              <p><em>
                Los desechos electrónicos contienen más oro por tonelada que las minas tradicionales. Descubre cómo el reciclaje de e-waste se ha convertido en una industria multimillonaria y una necesidad ambiental urgente.
              </em></p>

              <p>
                Los residuos electrónicos representan una de las fuentes más ricas de metales preciosos en el mundo moderno. Una tonelada de placas de circuitos puede contener más oro que una tonelada de mineral aurífero, convirtiendo a los desechos electrónicos en verdaderas &ldquo;minas urbanas&rdquo;. Esta realidad ha transformado el reciclaje de e-waste en una industria especializada y altamente rentable.
              </p>
              <p>
                El crecimiento exponencial de la tecnología ha generado una avalancha de residuos electrónicos. Computadores, celulares, televisores y equipos electrónicos contienen una compleja mezcla de metales preciosos como oro, plata, paladio y platino, además de metales básicos como cobre y aluminio. Esta diversidad de materiales valiosos hace del e-waste un recurso estratégico para la economía circular.
              </p>
              <p>
                El procesamiento de residuos electrónicos requiere tecnología especializada y procesos controlados. Las plantas de reciclaje utilizan técnicas de separación física, química y metalúrgica para recuperar cada metal con la mayor pureza posible. Este proceso no solo recupera materiales valiosos, sino que también neutraliza elementos tóxicos como plomo, mercurio y cadmio presentes en los dispositivos electrónicos.
              </p>
              <p>
                En Chile, el reciclaje de residuos electrónicos está regulado por la Ley de Responsabilidad Extendida del Productor (REP), que establece metas de recolección y reciclaje para equipos electrónicos. Esta legislación ha impulsado el desarrollo de una industria formal de reciclaje de e-waste, creando oportunidades económicas y reduciendo el impacto ambiental de los desechos tecnológicos.
              </p>
            </div>
          </article>

          <section className={styles.section}>
            <SectionHeader 
              title="Datos fascinantes sobre residuos electrónicos"
              subtitle="La mina urbana más rica del planeta"
            />
            <div className={styles.curiositiesGrid}>
              <div className={styles.curiosityItem}>
                <h4>Más oro que las minas</h4>
                <p>
                  Una tonelada de placas de circuitos contiene entre 200-300 gramos de oro, mientras que una tonelada de mineral aurífero contiene solo 1-5 gramos. Los e-waste son literalmente más valiosos que el oro.
                </p>
              </div>

              <div className={styles.curiosityItem}>
                <h4>Tabla periódica completa</h4>
                <p>
                  Un smartphone contiene más de 60 elementos diferentes de la tabla periódica, incluyendo 16 de los 17 metales de tierras raras. Es como tener un laboratorio químico en el bolsillo.
                </p>
              </div>

              <div className={styles.curiosityItem}>
                <h4>Crecimiento exponencial</h4>
                <p>
                  El mundo genera más de 50 millones de toneladas de e-waste anualmente, equivalente al peso de todos los aviones comerciales jamás construidos. Solo el 20% se recicla formalmente.
                </p>
              </div>

              <div className={styles.curiosityItem}>
                <h4>Oro en las conexiones</h4>
                <p>
                  El oro se usa en electrónicos porque no se oxida ni corroe, garantizando conexiones perfectas. Un solo computador puede contener hasta 0.2 gramos de oro en sus circuitos.
                </p>
              </div>

              <div className={styles.curiosityItem}>
                <h4>Recuperación de plata</h4>
                <p>
                  Los residuos electrónicos contienen más plata que las minas tradicionales. Las placas de circuitos pueden tener hasta 2,000 gramos de plata por tonelada, versus 200-300 gramos en minas convencionales.
                </p>
              </div>

              <div className={styles.curiosityItem}>
                <h4>Impacto ambiental</h4>
                <p>
                  Reciclar un millón de celulares recupera 13 toneladas de cobre, 15 kilos de plata y 1.4 kilos de oro, evitando la extracción de 75,000 toneladas de mineral virgen.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <SectionHeader 
              title="Maximiza el valor de tus electrónicos"
              subtitle="Guía para obtener el mejor precio"
            />
            <div className={styles.articleContent}>
              <div className={styles.priceFactors}>
                <div className={styles.priceFactor}>
                  <h4>🔍 Separar por tipo</h4>
                  <p>
                    Separa placas madre, procesadores, memorias RAM y tarjetas gráficas. Cada tipo tiene un precio diferente según su contenido de metales preciosos.
                  </p>
                </div>
                
                <div className={styles.priceFactor}>
                  <h4>🏆 Componentes premium</h4>
                  <p>
                    Procesadores Intel/AMD, memorias de servidores y tarjetas gráficas gaming tienen mayor valor. Identifica los componentes de alta gama para mejor precio.
                  </p>
                </div>
                
                <div className={styles.priceFactor}>
                  <h4>⚡ Quitar carcasas</h4>
                  <p>
                    Remueve carcasas plásticas y metálicas para acceder a las placas. Los plásticos reducen el valor y complicar el procesamiento de los metales.
                  </p>
                </div>
                
                <div className={styles.priceFactor}>
                  <h4>📦 Volumen mínimo</h4>
                  <p>
                    Acumula cantidad suficiente antes de vender. Los compradores especializados requieren volúmenes mínimos para hacer rentable el procesamiento.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <SectionHeader 
              title="Fuentes y referencias"
              subtitle="Información respaldada por la industria"
            />
            <div className={styles.references}>
              <ul>
                <li><a href="https://www.mma.gob.cl/ley-rep/" rel="noopener noreferrer" target="_blank">Ministerio del Medio Ambiente - Ley REP</a></li>
                <li><a href="https://www.itu.int/en/ITU-T/climatechange/emf/Pages/Global-Ewaste-Monitor-2020.aspx" rel="noopener noreferrer" target="_blank">Global E-waste Monitor</a></li>
                <li><a href="https://www.unep.org/resources/report/global-e-waste-monitor-2020" rel="noopener noreferrer" target="_blank">UNEP - Global E-waste Monitor</a></li>
                <li><a href="https://www.cochilco.cl" rel="noopener noreferrer" target="_blank">Comisión Chilena del Cobre</a></li>
              </ul>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h3>¿Tienes residuos electrónicos para reciclar?</h3>
              <p>Procesamos placas, componentes y equipos electrónicos. Recuperamos metales preciosos con tecnología especializada.</p>
              <PrimaryButton 
                href="https://wa.me/56912345678?text=Hola,%20tengo%20residuos%20electrónicos%20para%20reciclar"
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