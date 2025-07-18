import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { materials } from "../data/materials";
import OptimizedImage from "./OptimizedImage";
import styles from "./MaterialNavigation.module.css";

export default function MaterialNavigation() {
  const pathname = usePathname();
  const currentPath = pathname;

  return (
    <section className={styles.navigation}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3>Explorar Otros Materiales</h3>
          <p>Navega entre nuestros diferentes tipos de chatarra</p>
        </div>
        
        <div className={styles.materialsGrid}>
          {materials.map((material) => {
            const isActive = currentPath === material.articleLink;
            
            return (
              <Link
                key={material.key}
                href={material.articleLink}
                className={`${styles.materialCard} ${isActive ? styles.active : ''}`}
              >
                <div className={styles.imageWrapper}>
                  <OptimizedImage
                    src={material.image}
                    alt={material.name}
                    className={styles.image}
                  />
                  <div className={styles.overlay}>
                    {isActive && (
                      <div className={styles.activeIndicator}>
                        <span>Actual</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className={styles.info}>
                  <h4 className={styles.name}>{material.name}</h4>
                  <div className={styles.tags}>
                    {material.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        
        <div className={styles.footer}>
          <Link href="/materiales" className={styles.viewAllLink}>
            Ver todos los materiales →
          </Link>
        </div>
      </div>
    </section>
  );
} 