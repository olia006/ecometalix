// src/components/Calculator.jsx
import React, { useState } from "react";
import styles from "./Calculator.module.css";
import { calculatorPrices } from "../data/prices";

export default function Calculator() {
  const [entries, setEntries] = useState([{ metal: "", kg: "" }]);

  const handleChange = (index, field, value) => {
    const updated = [...entries];
    updated[index][field] = field === "kg" ? parseFloat(value) || "" : value;
    setEntries(updated);
  };

  const handleAdd = () => {
    setEntries([...entries, { metal: "", kg: "" }]);
  };

  const handleRemove = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  const total = entries.reduce((sum, { metal, kg }) => {
    const price = calculatorPrices[metal] || 0;
    return sum + (price * (parseFloat(kg) || 0));
  }, 0);

  return (
    <div className={styles.calculator}>
      <h3 className={styles.heading}>Calcula tu ganancia estimada</h3>
      <p className={styles.note}>
        Los valores son estimaciones referenciales basadas en los precios de hoy.
      </p>
      <div className={styles.rows}>
        {entries.map((entry, i) => (
          <div key={i} className={styles.row}>
            <select
              value={entry.metal}
              onChange={(e) => handleChange(i, "metal", e.target.value)}
              className={styles.select}
            >
              <option value="">Seleccionar metal</option>
              {Object.keys(calculatorPrices).map((metal) => (
                <option key={metal} value={metal}>{metal}</option>
              ))}
            </select>
            <input
              type="number"
              min="0"
              step="0.1"
              placeholder="Kg"
              value={entry.kg}
              onChange={(e) => handleChange(i, "kg", e.target.value)}
              className={styles.input}
            />
            {entries.length > 1 && (
              <button
                className={styles.remove}
                onClick={() => handleRemove(i)}
                aria-label="Eliminar"
              >
                ✕
              </button>
            )}
          </div>
        ))}
      </div>
      <button onClick={handleAdd} className={styles.add}>+ Añadir otro</button>
      <div className={styles.result}>
        <strong>Total estimado:</strong> ${total.toLocaleString("es-CL")}
      </div>
      <p className={styles.disclaimer}>
        Precio válido solo para la fecha mostrada. El valor final puede variar según el estado del material, impurezas y peso exacto medido en nuestras balanzas certificadas.
      </p>
    </div>
  );
}
