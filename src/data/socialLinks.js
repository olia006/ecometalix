// src/data/socialLinks.js
// CENTRALIZED SOCIAL LINKS CONFIGURATION
// Update social media links here and they will change across the entire website

import { Send, Instagram, Facebook, Twitter } from "lucide-react";
import WhatsAppIcon from "../components/WhatsAppIcon";

export const socialLinksData = [
  {
    id: "whatsapp",
    href: "https://wa.me/56940244042",
    iconComponent: WhatsAppIcon,
    label: "WhatsApp Ecometalix",
    brand: "whatsapp",
    priority: 1 // Higher priority = more prominent
  },
  {
    id: "instagram", 
    href: "https://www.instagram.com/ecometalix_spa",
    iconComponent: Instagram,
    label: "Instagram Ecometalix",
    brand: "instagram",
    priority: 2
  },
  {
    id: "facebook",
    href: "https://www.facebook.com/ecometalix.spa", 
    iconComponent: Facebook,
    label: "Facebook Ecometalix",
    brand: "facebook",
    priority: 3
  },
  {
    id: "twitter",
    href: "https://twitter.com/ecometalix_spa",
    iconComponent: Twitter,
    label: "Twitter Ecometalix", 
    brand: "twitter",
    priority: 4
  },
  {
    id: "telegram",
    href: "https://t.me/ecometalix_spa",
    iconComponent: Send,
    label: "Telegram Ecometalix",
    brand: "telegram",
    priority: 5
  }
];

// Helper functions
export const getSocialLinkById = (id) => {
  return socialLinksData.find(link => link.id === id);
};

export const getSocialLinksByPriority = (maxCount = null) => {
  const sorted = [...socialLinksData].sort((a, b) => a.priority - b.priority);
  return maxCount ? sorted.slice(0, maxCount) : sorted;
};

export const getMainSocialLinks = () => {
  return getSocialLinksByPriority(3); // Top 3 for main areas
};

export const getWhatsAppLink = () => {
  return getSocialLinkById("whatsapp");
}; 