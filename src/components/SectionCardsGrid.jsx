import React from 'react';
import PropTypes from 'prop-types';
import SectionCard from './SectionCard';
import styles from './SectionCardsGrid.module.css';

// Material images for backgrounds (using public paths)

const SectionCardsGrid = ({ isEnglish = false }) => {

  const cards = [
    {
      id: 'proceso',
      title: isEnglish ? 'How it works?' : '¿Cómo funciona?',
      preview: isEnglish 
        ? 'Discover our simple 4-step process: Contact → Transport → Certified weighing → Immediate payment. See the complete timeline and requirements.' 
        : 'Descubre nuestro proceso simple en 4 pasos: Contacto → Traslado → Pesaje certificado → Pago inmediato. Ve el cronograma completo y requisitos.',
      variant: 'accent',
      backgroundImage: '/images/materials/materialhero.jpg',
      href: isEnglish ? '/en/how-it-works' : '/como-funciona',
      statsText: isEnglish ? 'Personal attention, no bureaucracy' : 'Atención personalizada, sin burocracia'
    },
    {
      id: 'materiales',
      title: isEnglish ? 'Accepted materials' : 'Materiales aceptados',
      preview: isEnglish 
        ? 'Explore all metal types we accept: copper, aluminum, iron, bronze, electronics + detailed specs, current prices, and prohibited materials list.' 
        : 'Explora todos los tipos de metales que aceptamos: cobre, aluminio, fierro, bronce, electrónicos + especificaciones, precios y materiales prohibidos.',
      variant: 'neutral',
      backgroundImage: '/images/materials/fierromixto.JPG',
      href: isEnglish ? '/en/materials' : '/materiales',
      statsText: isEnglish ? 'Quote via WhatsApp' : 'Cotizar por WhatsApp'
    },
    {
      id: 'porque-nosotros',
      title: isEnglish ? 'Why choose us?' : '¿Por qué elegirnos?',
      preview: isEnglish 
        ? 'See our key advantages: immediate payment, extended hours 8-20h, INN certified scale, 10+ years experience, 500+ satisfied customers.' 
        : 'Ve nuestras ventajas clave: pago inmediato, horario extendido 8-20h, balanza certificada INN, 10+ años experiencia, 500+ clientes satisfechos.',
      variant: 'secondary',
      backgroundImage: '/images/materials/FierroLargo.jpg',
      href: isEnglish ? '/en/why-us' : '/por-que-nosotros',
      statsText: isEnglish ? '100% real Google reviews' : 'Opiniones 100% reales en Google'
    }
  ];

  return (
    <section className={styles.sectionCardsGrid}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {cards.map((card) => (
            <SectionCard
              key={card.id}
              title={card.title}
              preview={card.preview}
              variant={card.variant}
              backgroundImage={card.backgroundImage}
              href={card.href}
              statsText={card.statsText}
              ctaText={card.ctaText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

SectionCardsGrid.propTypes = {
  isEnglish: PropTypes.bool
};

export default SectionCardsGrid; 