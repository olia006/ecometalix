// src/components/MaterialCard.jsx
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import OptimizedImage from "./OptimizedImage";
import styles from "./MaterialCard.module.css";

export default function MaterialCard({ name, image, description, tags = [], articleLink }) {
  const cardContent = (
    <>
      <div className={styles.imageContainer}>
        <OptimizedImage
          src={image}
          alt={`Foto de ${name}`}
          className={styles.image}
          width={320}
          height={180}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
        <p className={styles.description}>{description}</p>
        {articleLink ? (
          <span className={styles.readMore}>
            Leer más →
          </span>
        ) : (
          <span className={styles.soon}>Más info pronto</span>
        )}
      </div>
    </>
  );

  if (articleLink) {
    return (
      <Link href={articleLink} className={styles.card} aria-label={`Ver información sobre ${name}`}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={styles.card} aria-label={name}>
      {cardContent}
    </div>
  );
}

MaterialCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  articleLink: PropTypes.string
};
