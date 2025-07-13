// src/components/TestimonialCard.jsx
import React from "react";
import styles from "./TestimonialCard.module.css";
import { FaStar } from "react-icons/fa";

export default function TestimonialCard({ name, text, rating = 5 }) {
  return (
    <article className={styles.card} aria-label={`Testimonio de ${name}`}>
      <div className={styles.content}>
        <p className={styles.text}>"{text}"</p>
        <div className={styles.stars} aria-hidden="true">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              key={i}
              className={`${styles.star} ${i < rating ? styles.filled : styles.empty}`}
            />
          ))}
        </div>
        <div className={styles.author}>— {name}</div>
      </div>
    </article>
  );
}
