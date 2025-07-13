import React from "react";
import PropTypes from "prop-types";
import Seo from "../components/seo/Seo";
import Breadcrumb from "../components/Breadcrumb";
import FloatingCTA from "../components/FloatingCTA";
import TrustCues from "../components/TrustCues";
import FAQAccordion from "../components/FAQAccordion";
import { generateHreflangs } from "../utils/hreflangUtils";
import PageHeader from "../components/PageHeader";
import styles from './FAQPage.module.css';

// FAQ DATA
const faqCategories = [
  {
    title: "Pago y Precios",
    faqs: [
      {
        question: "¿Cuándo y cómo me pagan por mi chatarra?",
        answer:
          "En Ecometalix realizamos pagos inmediatos el mismo día que entregas tu chatarra. Una vez que completamos el pesaje certificado con nuestra balanza oficial, puedes elegir recibir tu dinero en efectivo al instante o mediante transferencia bancaria. No hay tiempos de espera ni trámites burocráticos - nuestro proceso está diseñado para que obtengas tu pago de forma rápida y segura.",
      },
      {
        question: "¿Pagan en efectivo o por transferencia bancaria?",
        answer:
          "Ofrecemos ambas opciones de pago para tu comodidad. Puedes recibir tu dinero en efectivo inmediatamente después del pesaje, ideal para transacciones rápidas. También disponemos de transferencia bancaria instantánea para montos mayores o si prefieres esta modalidad. Ambos métodos son seguros y se realizan en el momento, sin demoras ni comisiones adicionales.",
      },
      {
        question: "¿Por qué cambian los precios de la chatarra?",
        answer:
          "Los precios de la chatarra fluctúan diariamente debido a varios factores del mercado internacional: la demanda global de metales, los precios en las bolsas de Londres y Nueva York, la situación económica mundial, y la oferta local en Chile. En Ecometalix actualizamos nuestros precios cada día para ofrecerte las mejores tarifas del mercado, siempre transparentes y competitivas.",
      },
      {
        question: "¿Tienen precios especiales para grandes volúmenes o empresas?",
        answer:
          "Sí, ofrecemos tarifas preferenciales para empresas, constructoras, talleres mecánicos y clientes que manejan grandes volúmenes de chatarra. Nuestros precios mayoristas pueden ser hasta un 10-15% superiores a las tarifas estándar, dependiendo del tipo de material y la cantidad. Solicita tu cotización personalizada por WhatsApp o teléfono para conocer nuestros precios especiales.",
      },
      {
        question: "¿Cómo puedo saber el precio actual antes de ir?",
        answer:
          "Puedes consultar nuestros precios actualizados de varias maneras: enviando un mensaje por WhatsApp con el tipo de material que tienes, visitando nuestra página web donde publicamos los precios diarios, o llamándonos directamente. También puedes enviar fotos de tu chatarra por WhatsApp para una evaluación más precisa. Actualizamos los precios cada mañana según las cotizaciones internacionales.",
      },
    ],
  },
  {
    title: "Pesaje y Proceso",
    faqs: [
      {
        question: "¿Cómo se pesa la chatarra?",
        answer:
          "Utilizamos una balanza certificada de alta precisión con capacidad para camiones de hasta 80 toneladas y 18 metros de largo. El proceso es completamente transparente: primero pesamos tu vehículo con la carga, luego sin ella, y la diferencia nos da el peso exacto de tu chatarra. Nuestro sistema de pesaje está calibrado y certificado por organismos oficiales para garantizar mediciones precisas.",
      },
      {
        question: "¿La balanza es certificada/oficial?",
        answer:
          "Absolutamente. Nuestra balanza cuenta con certificación oficial del Instituto Nacional de Normalización (INN) y es inspeccionada regularmente por organismos competentes. Cumple con todas las normativas chilenas para pesaje comercial y emitimos comprobantes oficiales de peso. Esto garantiza que recibas el pago exacto por el peso real de tu material.",
      },
      {
        question: "¿Puedo ver el pesaje de mi material?",
        answer:
          "Por supuesto. Nuestro proceso es 100% transparente y te invitamos a presenciar todo el pesaje. Puedes ver la pantalla de la balanza, verificar las mediciones, y nuestro personal te explicará cada paso del proceso. La transparencia es fundamental en nuestro servicio - queremos que te sientas seguro y confiado en cada transacción.",
      },
      {
        question: "¿Qué necesito llevar para vender chatarra?",
        answer:
          "Solo necesitas traer tu cédula de identidad chilena (o carnet de extranjería) y tu chatarra. Para personas naturales, es suficiente con estos documentos. Si representas a una empresa, necesitarás además el RUT de la empresa y autorización para vender. Podemos emitir boleta o factura según tus necesidades. No se requieren permisos especiales para vender chatarra doméstica o industrial común.",
      },
      {
        question: "¿Cuánto tarda el proceso de venta?",
        answer:
          "El proceso completo toma entre 15 a 30 minutos desde tu llegada. Esto incluye: registro inicial (2-3 minutos), pesaje del vehículo cargado y vacío (5-10 minutos), clasificación y evaluación del material (5-10 minutos), y pago inmediato (2-3 minutos). Para grandes volúmenes o materiales que requieren separación, puede tomar un poco más, pero siempre mantenemos la eficiencia.",
      },
    ],
  },
  {
    title: "Materiales y Aceptación",
    faqs: [
      {
        question: "¿Qué tipos de metales compran?",
        answer:
          "Compramos una amplia variedad de metales: cobre (cable, tubería, lámina), aluminio (perfiles, latas, radiadores), bronce, latón, hierro, acero inoxidable, zinc, y plomo. También aceptamos chatarra mixta, electrodomésticos, baterías de auto, y chatarra electrónica. Cada material tiene precios diferenciados según su pureza y demanda. Si tienes dudas sobre algún material específico, consúltanos por WhatsApp.",
      },
      {
        question: "¿Compran electrodomésticos, baterías o chatarra electrónica?",
        answer:
          "Sí, aceptamos electrodomésticos completos (refrigeradores, lavadoras, estufas), baterías de automóvil, y chatarra electrónica (computadores, cables, transformadores). Estos materiales requieren procesamiento especial para separar los diferentes metales, por lo que tienen precios específicos. Te recomendamos consultar previamente por WhatsApp enviando fotos para una evaluación más precisa y ahorrarte el viaje.",
      },
      {
        question: "¿Aceptan chatarra de empresas/industrias?",
        answer:
          "Definitivamente. Trabajamos con empresas constructoras, talleres mecánicos, fábricas, y proyectos industriales. Ofrecemos servicio personalizado para grandes volúmenes, contratos a largo plazo, y precios preferenciales para clientes corporativos. Podemos coordinar retiros programados, emitir facturas, y manejar toda la documentación necesaria para tu empresa. Contáctanos para servicios empresariales especializados.",
      },
    ],
  },
  {
    title: "Ubicación y Horario",
    faqs: [
      {
        question: "¿Dónde están ubicados y cómo llego?",
        answer:
          "Estamos ubicados en una zona accesible de Santiago con fácil acceso para vehículos de carga. Nuestra dirección exacta y mapa de ubicación los encontrarás en nuestra página de contacto. Contamos con amplio espacio para maniobrar camiones y estacionamiento seguro. Si vienes por primera vez, puedes llamarnos y te daremos indicaciones detalladas desde tu punto de partida.",
      },
      {
        question: "¿Atienden fines de semana y feriados?",
        answer:
          "Trabajamos los 7 días de la semana de 8:00 AM a 8:00 PM, incluyendo sábados y domingos. En feriados también atendemos en horario normal. Somos uno de los pocos centros de reciclaje que opera sin descanso para tu comodidad. Puedes venir cualquier día de la semana en nuestro horario de atención.",
      },
      {
        question: "¿Puedo vender sin cita previa?",
        answer:
          "Sí, puedes venir directamente en nuestro horario de atención sin cita previa. Atendemos por orden de llegada y normalmente el tiempo de espera es mínimo. Sin embargo, para grandes volúmenes (más de 1 tonelada) o materiales especiales, te recomendamos avisar con anticipación para preparar el equipo necesario y reducir tu tiempo de espera.",
      },
    ],
  },
  {
    title: "Empresas y Contratos",
    faqs: [
      {
        question: "¿Pueden firmar contratos con empresas?",
        answer:
          "Sí, trabajamos frecuentemente con empresas bajo contratos formales. Ofrecemos acuerdos comerciales para constructoras, talleres, fábricas, y proyectos de demolición. Nuestros contratos incluyen precios preferenciales, condiciones de pago, y servicios adicionales como retiro en obra. Podemos establecer contratos por proyecto específico o acuerdos de suministro continuo según las necesidades de tu empresa.",
      },
      {
        question: "¿Ofrecen facturas y comprobantes?",
        answer:
          "Por supuesto. Emitimos toda la documentación tributaria necesaria: boletas para personas naturales, facturas para empresas, y comprobantes de pesaje certificado. Estamos al día con todas las obligaciones tributarias y contamos con sistema de facturación electrónica. Todos los documentos se entregan al momento del pago para que tengas respaldo completo de tu transacción.",
      },
    ],
  },
  {
    title: "Seguridad y Legalidad",
    faqs: [
      {
        question: "¿Están autorizados por el Ministerio del Medio Ambiente?",
        answer:
          "Sí, contamos con todas las autorizaciones y permisos requeridos por la normativa chilena. Estamos registrados ante el Ministerio del Medio Ambiente, cumplimos con las regulaciones de manejo de residuos, y operamos bajo estrictos protocolos ambientales. Nuestras operaciones contribuyen a la economía circular y al reciclaje responsable de materiales metálicos en Chile.",
      },
      {
        question: "¿Es seguro vender mi chatarra en Ecometalix?",
        answer:
          "Absolutamente. Nuestras instalaciones cuentan con sistemas de seguridad, cámaras de vigilancia, y personal capacitado que te acompañará durante todo el proceso. Además, cumplimos con todas las normativas de seguridad laboral y ambiental. Tu seguridad y la de tu carga son nuestra prioridad desde que ingresas hasta que sales de nuestras instalaciones.",
      },
    ],
  },
  {
    title: "Contacto y Cotización",
    faqs: [
      {
        question: "¿Cómo puedo pedir una cotización rápida?",
        answer:
          "La forma más rápida es a través de nuestro WhatsApp, donde respondemos en tiempo real durante horario comercial. También puedes completar nuestro formulario de contacto en la web, llamarnos directamente, o enviar fotos de tu material por WhatsApp para una evaluación visual. Nuestro equipo está capacitado para darte precios inmediatos y orientación sobre el mejor momento para vender.",
      },
      {
        question: "¿Puedo enviar fotos de mi material por WhatsApp?",
        answer:
          "Sí, es muy recomendable. Enviar fotos por WhatsApp nos permite identificar el tipo de material, estimar cantidades, y darte un precio aproximado antes de que te traslades. Esto te ahorra tiempo y combustible. Procura enviar fotos claras, desde diferentes ángulos, y menciona las dimensiones aproximadas o peso estimado si lo conoces.",
      },
      {
        question: "¿Tienen WhatsApp para consultas inmediatas?",
        answer:
          "Sí, nuestro WhatsApp es atendido por personal especializado, no por robots automáticos. Puedes consultar precios, enviar fotos, coordinar horarios, y resolver cualquier duda en tiempo real. El botón de WhatsApp está siempre visible en nuestro sitio web para tu comodidad. Respondemos rápidamente durante horario comercial y lo antes posible fuera de horario.",
      },
    ],
  },
  {
    title: "Reciclaje y Sostenibilidad",
    faqs: [
      {
        question: "¿Qué hacen con la chatarra que reciben?",
        answer:
          "Procesamos toda la chatarra de manera responsable y sostenible. Los metales se clasifican, limpian, y envían a fundiciones certificadas donde se transforman en materia prima para nuevos productos. Este proceso evita la extracción de minerales vírgenes, reduce el impacto ambiental, y contribuye a la economía circular. Tu chatarra se convierte en nuevos productos metálicos, cerrando el ciclo de reciclaje.",
      },
      {
        question: "¿Contribuyo al reciclaje y cuidado ambiental al vender mi chatarra?",
        answer:
          "Definitivamente. Cada kilogramo de chatarra que nos vendes evita la extracción de minerales vírgenes, reduce las emisiones de CO2, y disminuye los desechos que van a vertederos. El reciclaje de metales ahorra hasta 95% de la energía necesaria para producir metal nuevo. Al elegirnos, participas activamente en la protección del medio ambiente y contribuyes a un futuro más sostenible para Chile.",
      },
    ],
  },
];

// FAQPage Schema for Google (FAQ rich results)
function FAQSchema({ categories }) {
  const faqList = categories.flatMap((cat) =>
    cat.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    }))
  );
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqList,
      }),
    }} />
  );
}

FAQSchema.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      faqs: PropTypes.arrayOf(
        PropTypes.shape({
          question: PropTypes.string.isRequired,
          answer: PropTypes.string.isRequired
        })
      ).isRequired
    })
  ).isRequired
};

export default function FAQPage() {
  return (
    <>
      <Seo
        title="Preguntas Frecuentes | Ecometalix Spa"
        description="Resuelve todas tus dudas sobre la compra y venta de chatarra: pago inmediato, precios, balanza, logística y más."
        canonical="/faq"
        hreflangs={generateHreflangs('/faq')}
      />
      <FAQSchema categories={faqCategories} />
      
      {/* Breadcrumb navigation */}
      <div className="container">
        <Breadcrumb />
      </div>
      
      <PageHeader
        title="Preguntas Frecuentes"
        subtitle="Resuelve todas tus dudas sobre la compra y venta de chatarra, pago inmediato y más."
        variant="accent"
      />
      
      <FloatingCTA />
      
      <main className={styles.faqPageSection}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Preguntas Frecuentes sobre Compra de Chatarra</h1>
          <p className={styles.intro}>
            Aquí resolvemos las dudas más comunes sobre precios, pagos, materiales, proceso y mucho más. Si no encuentras tu respuesta, contáctanos por WhatsApp.
          </p>
          
          <FAQAccordion 
            categories={faqCategories}
            variant="default"
            showOneAtTime={false}
          />
        </div>
        
        <TrustCues />
      </main>
    </>
  );
}
