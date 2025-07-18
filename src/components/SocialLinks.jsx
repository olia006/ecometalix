import React from "react";

import styles from "./SocialLinks.module.css";
import { socialLinksData, getMainSocialLinks } from "../data/socialLinks";

export default function SocialLinks({ className = "", maxCount = 3 }) {
  const links = maxCount ? getMainSocialLinks() : socialLinksData;
  
  return (
    <nav className={`${styles.socialLinks} ${className}`} aria-label="Redes sociales">
      {links.map(link => {
        const IconComponent = link.iconComponent;
        return (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.link} ${styles[link.brand]}`}
            aria-label={link.label}
          >
            <IconComponent />
          </a>
        );
      })}
    </nav>
  );
}


