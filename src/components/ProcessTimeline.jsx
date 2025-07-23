'use client';

import React from 'react';
import { 
  MessageCircle, 
  Truck, 
  Scale, 
  DollarSign
} from 'lucide-react';
import styles from './ProcessTimeline.module.css';

const ProcessTimeline = () => {

  return (
    <div className={styles.processContainer}>
      {/* Decorative Visual Timeline */}
      <div className={styles.visualTimeline}>
        <div className={styles.timelineSteps}>
          <div className={styles.stepLabel}>
            <MessageCircle size={20} />
            <span>Paso 1</span>
          </div>
          <div className={styles.connector}></div>
          <div className={styles.stepLabel}>
            <Truck size={20} />
            <span>Paso 2</span>
          </div>
          <div className={styles.connector}></div>
          <div className={styles.stepLabel}>
            <Scale size={20} />
            <span>Paso 3</span>
          </div>
          <div className={styles.connector}></div>
          <div className={styles.stepLabel}>
            <DollarSign size={20} />
            <span>Paso 4</span>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ProcessTimeline; 