"use client";

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SectionCard from './SectionCard';
import styles from './SectionCardsGrid.module.css';

// Material images for backgrounds (using public paths)

const SectionCardsGrid = ({ isEnglish = false }) => {
  // State to track which card is currently hovered
  // Default to 'materiales' so it appears active by default
  const [hoveredCard, setHoveredCard] = useState('materiales');

  const cards = [
    {
      id: 'proceso',
      title: isEnglish ? 'How it works?' : '¿Cómo funciona?',
      preview: isEnglish 
        ? 'Simple 4-step process: Contact, transport, certified weighing, and immediate guaranteed payment.' 
        : 'Proceso simple en 4 pasos: Contacto, traslado, pesaje y pago inmediato garantizado.',
      variant: 'accent',
      href: isEnglish ? '/en/how-it-works' : '/como-funciona',
      statsText: isEnglish ? 'Fast' : 'Rápido'
    },
    {
      id: 'materiales',
      title: isEnglish ? 'Accepted materials' : 'Materiales aceptados',
      preview: isEnglish 
        ? 'Copper, aluminum, iron, bronze, electronics. Updated prices and complete specifications.' 
        : 'Cobre, aluminio, fierro, bronce, electrónicos. Precios y detalles actualizados.',
      variant: 'neutral',
      href: isEnglish ? '/en/materials' : '/materiales',
      statsText: isEnglish ? 'WhatsApp' : 'WhatsApp'
    },
    {
      id: 'porque-nosotros',
      title: isEnglish ? 'Why choose us?' : '¿Por qué elegirnos?',
      preview: isEnglish 
        ? 'Immediate payment, INN certified scale, 10+ years of reliable experience.' 
        : 'Pago inmediato, balanza certificada INN, 10+ años de experiencia confiable.',
      variant: 'secondary',
      href: isEnglish ? '/en/why-us' : '/por-que-nosotros',
      statsText: isEnglish ? '500+ reviews' : '500+ reseñas'
    }
  ];

  // Handle card hover events
  const handleCardHover = (cardId) => {
    setHoveredCard(cardId);
  };

  // Handle when mouse leaves the entire grid
  const handleGridLeave = () => {
    setHoveredCard('materiales'); // Return to materials as default active
  };

  return (
    <section className={styles.sectionCardsGrid}>
      <div className={styles.container}>
        <div 
          className={styles.grid}
          onMouseLeave={handleGridLeave}
        >
          {cards.map((card) => (
            <div 
              key={card.id}
              onMouseEnter={() => handleCardHover(card.id)}
            >
              <SectionCard
                title={card.title}
                preview={card.preview}
                href={card.href}
                variant={card.variant}
                statsText={card.statsText}
                isActive={hoveredCard === card.id}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

SectionCardsGrid.propTypes = {
  isEnglish: PropTypes.bool,
};

export default SectionCardsGrid; 