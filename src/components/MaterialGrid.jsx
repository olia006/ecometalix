// src/components/MaterialGrid.jsx
import React from "react";
import gridStyles from "./MaterialGrid.module.css";
import bgStyles from "./Background.module.css"; // For background variants if needed
import { materials } from "../data/materials";
import MaterialCard from "./MaterialCard";

export default function MaterialGrid() {
  return (
    <section
      className={`${gridStyles.materialGridSection} ${bgStyles.section1}`}
      aria-label="Materiales que recibimos"
    >
      <h2 className={gridStyles.heading}>¿Qué materiales recibimos?</h2>
      <div className={gridStyles.grid}>
        {materials.map((mat) => {
          const { key, ...materialProps } = mat;
          return (
            <MaterialCard key={key} {...materialProps} />
          );
        })}
      </div>
    </section>
  );
}
