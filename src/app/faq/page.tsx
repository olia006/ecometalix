import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import FloatingCTA from '../../components/FloatingCTA';
import TrustCues from '../../components/TrustCues';
import FAQAccordion from '../../components/FAQAccordion';
import PageHeader from '../../components/PageHeader';
import styles from '../../pages/FAQPage.module.css';

// Metadata for the FAQ page
export const metadata = {
  title: 'Preguntas Frecuentes - Dudas sobre Compra de Chatarra',
  description: 'Resuelve todas tus dudas sobre venta de chatarra: proceso, precios, requisitos, pagos y más. Respuestas claras a las consultas más frecuentes.',
  keywords: 'preguntas frecuentes, FAQ chatarra, dudas reciclaje, proceso venta, requisitos, pagos',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'Preguntas Frecuentes sobre Chatarra | Ecometalix',
    description: 'Resuelve todas tus dudas sobre venta de chatarra: proceso, precios, requisitos y más.',
    type: 'website',
    locale: 'es_CL',
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
        question: "¿Puedo ver el peso de mi chatarra?",
        answer:
          "¡Por supuesto! Nuestro proceso es 100% transparente. Te invitamos a acompañar todo el proceso de pesaje y podrás ver directamente en la pantalla digital el peso bruto, tara y peso neto de tu material. También proporcionamos un ticket impreso con todos los datos del pesaje: fecha, hora, tipo de material, peso y precio aplicado. Esta transparencia es parte de nuestro compromiso con la confianza.",
      },
      {
        question: "¿Qué pasa si no estoy de acuerdo con el peso?",
        answer:
          "Si tienes alguna duda sobre el pesaje, podemos realizar una segunda medición sin costo adicional. Nuestra balanza está certificada y calibrada regularmente, pero entendemos que la transparencia genera confianza. También puedes solicitar el certificado de calibración de nuestra balanza y, si lo deseas, realizar el pesaje en otra balanza certificada para comparar resultados.",
      },
      {
        question: "¿Separan los materiales antes de pesar?",
        answer:
          "Sí, separamos cuidadosamente todos los materiales según su tipo antes del pesaje: cobre, aluminio, fierro, bronce, etc. Cada material tiene un precio diferente, por lo que la separación correcta asegura que recibas el mejor valor por tu chatarra. Nuestro equipo está capacitado para identificar y clasificar correctamente cada tipo de metal, maximizando tu ganancia.",
      },
    ],
  },
  {
    title: "Materiales y Clasificación",
    faqs: [
      {
        question: "¿Qué tipos de chatarra compran?",
        answer:
          "Compramos una amplia variedad de metales: cobre (cables, tuberías, chapas), aluminio (perfiles, latas, radiadores), fierro y acero (estructuras, vigas, chapas), bronce (grifería, accesorios), materiales eléctricos (motores, transformadores), chatarra mixta y viruta metálica. Si tienes dudas sobre un material específico, envíanos una foto por WhatsApp y te confirmaremos si lo recibimos.",
      },
      {
        question: "¿Cómo sé si mi material es cobre, aluminio o fierro?",
        answer:
          "Te ayudamos a identificar tus materiales: el cobre tiene color rojizo y es pesado, el aluminio es plateado y muy liviano, el fierro se pega a un imán. En nuestras instalaciones, nuestro equipo experto realiza la clasificación final usando herramientas especializadas y años de experiencia. No te preocupes si no estás seguro - nosotros nos encargamos de identificar correctamente cada material.",
      },
      {
        question: "¿Reciben chatarra mixta o solo materiales separados?",
        answer:
          "Recibimos tanto materiales separados como chatarra mixta. Si traes materiales ya separados, obtendrás mejores precios al recibir la tarifa específica de cada metal. La chatarra mixta también la recibimos, pero el precio será menor ya que incluye el costo de separación. Te recomendamos separar lo que puedas en casa - cobre, aluminio y fierro - para maximizar tus ganancias.",
      },
      {
        question: "¿Hay materiales que no reciben?",
        answer:
          "No recibimos materiales peligrosos como asbesto, materiales radiactivos, baterías de auto (ácidas), tubos fluorescentes, materiales con pintura de plomo, tanques de combustible sin limpiar, y materiales contaminados con químicos. También evitamos chatarra muy oxidada o en mal estado. Si tienes dudas sobre un material específico, consúltanos antes de traerlo.",
      },
    ],
  },
  {
    title: "Requisitos y Documentación",
    faqs: [
      {
        question: "¿Qué documentos necesito para vender chatarra?",
        answer:
          "Para personas naturales: cédula de identidad chilena vigente. Para empresas: RUT de la empresa, representación legal del vendedor, y factura o guía de despacho según corresponda. Para extranjeros: pasaporte vigente y, si aplica, permiso de trabajo. Todos los documentos deben estar vigentes y en buen estado. Mantenemos un registro completo según las normativas legales vigentes.",
      },
      {
        question: "¿Puedo vender chatarra sin ser chileno?",
        answer:
          "Sí, los extranjeros pueden vender chatarra presentando pasaporte vigente y, dependiendo del monto, permiso de trabajo o visa vigente. Cumplimos con todas las normativas legales para operaciones con extranjeros. El proceso es igual de simple y rápido, solo necesitas la documentación correspondiente. Si tienes dudas sobre tus documentos específicos, contáctanos antes de tu visita.",
      },
      {
        question: "¿Hay límites de cantidad para vender?",
        answer:
          "No tenemos límites mínimos ni máximos estrictos. Recibimos desde pequeñas cantidades (algunos kilos) hasta grandes volúmenes de empresas constructoras. Para cantidades muy grandes (+5 toneladas), te recomendamos coordinar previamente para asegurar disponibilidad de espacio y optimizar la atención. Nuestras instalaciones están preparadas para manejar cualquier volumen con eficiencia.",
      },
      {
        question: "¿Necesito algún permiso especial?",
        answer:
          "Para ventas ocasionales de chatarra doméstica o personal, no necesitas permisos especiales, solo tu identificación. Las empresas que venden regularmente deben tener sus documentos comerciales al día. Si eres empresa de reciclaje o mantienes un volumen constante, podemos asesorarte sobre los requisitos específicos según la normativa vigente.",
      },
    ],
  },
  {
    title: "Horarios y Ubicación",
    faqs: [
      {
        question: "¿Cuáles son los horarios de atención?",
        answer:
          "Atendemos de lunes a viernes de 8:00 a 18:00 horas, y sábados de 8:00 a 14:00 horas. Domingos y festivos permanecemos cerrados. Te recomendamos llegar al menos 30 minutos antes del cierre para completar el proceso sin apuros. Para grandes volúmenes, podemos coordinar horarios especiales previo acuerdo.",
      },
      {
        question: "¿Dónde están ubicados?",
        answer:
          "Estamos ubicados en Santiago, con fácil acceso para todo tipo de vehículos incluidos camiones de gran tonelaje. Nuestra dirección específica y mapas de ubicación están disponibles en nuestra página web y al contactarnos por WhatsApp. Contamos con amplio espacio de maniobra y estacionamiento para facilitar la descarga de tu material.",
      },
      {
        question: "¿Puedo ir cualquier día sin avisar?",
        answer:
          "Sí, atendemos sin cita previa durante nuestros horarios regulares. Sin embargo, para volúmenes grandes (+2 toneladas) o si vienes desde lejos, te recomendamos contactarnos antes para confirmar disponibilidad y evitar esperas innecesarias. Así podemos preparar todo para atenderte de la manera más eficiente posible.",
      },
      {
        question: "¿Tienen servicio de retiro a domicilio?",
        answer:
          "Ofrecemos servicio de retiro a domicilio para volúmenes grandes (generalmente +500kg) dentro de Santiago y alrededores. El costo del retiro se evalúa según la distancia y cantidad de material. Para solicitar este servicio, contáctanos por WhatsApp con detalles de ubicación, tipo y cantidad aproximada de chatarra. Te daremos una cotización sin compromiso.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <Breadcrumb />
      <FloatingCTA />
      
      <main className={styles.main}>
        <PageHeader 
          title="Preguntas Frecuentes"
          subtitle="Resuelve todas tus dudas sobre la venta de chatarra"
        />
        
        <div className={styles.container}>
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