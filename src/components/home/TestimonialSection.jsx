// src/components/home/TestimonialSection.jsx
import React, { useState, useEffect } from "react";
import styles from "./TestimonialSection.module.css";
import Background from "../Background";
import TestimonialCard from "../TestimonialCard";
import SectionHeader from "../SectionHeader";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import testimonialImage from "../../assets/images/hometestimonial.jpg";

// Example testimonials — replace with dynamic content later if needed
const testimonials = [
  {
    name: "Carlos R.",
    text: "Muy buena atención y pago inmediato. Todo claro y transparente.",
    rating: 5
  },
  {
    name: "Ana P.",
    text: "Vendí mi chatarra de cobre y recibí el dinero al instante. Súper recomendado.",
    rating: 5
  },
  {
    name: "Empresa Recimex",
    text: "Servicio profesional, confiable y rápido. Siempre los elegimos.",
    rating: 4
  },
  {
    name: "Pedro M.",
    text: "Excelente servicio. La balanza es confiable y el pago inmediato como prometen.",
    rating: 5
  },
  {
    name: "Construcciones Silva",
    text: "Llevamos años trabajando con ellos. Siempre cumplen con los pagos y horarios.",
    rating: 5
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); // Change every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrev = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Background image={testimonialImage}>
      <section
        className={styles.testimonialSection}
        aria-label="Testimonios de clientes satisfechos"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <SectionHeader>
          Lo que dicen nuestros clientes
        </SectionHeader>

        <div className={styles.carouselContainer}>
          <button 
            className={styles.navButton} 
            onClick={goToPrev}
            aria-label="Testimonio anterior"
          >
            <FaChevronLeft />
          </button>

          <div className={styles.carouselTrack}>
            <div 
              className={styles.carouselContent}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className={styles.carouselSlide}>
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          <button 
            className={styles.navButton} 
            onClick={goToNext}
            aria-label="Siguiente testimonio"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots indicator */}
        <div className={styles.dotsContainer}>
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Ir al testimonio ${idx + 1}`}
            />
          ))}
        </div>
      </section>
    </Background>
  );
}
