import React from "react";
import styles from './LegalNotice.module.css';

const LegalNotice = ({
  className = "",
  style = {},
  children,
}) => {
  const defaultNotice = (
    <>
      *Precios referenciales. Pueden variar según el mercado y el estado del material.<br />
      Pago inmediato sujeto a verificación y condiciones legales.<br />
      Empresa autorizada por el Ministerio del Medio Ambiente.<br />
      Consulta nuestra <a href="/privacy">Política de Privacidad</a>.
    </>
  );

  return (
    <section
      className={`${styles.legalNotice} ${className}`.trim()}
      style={{
        marginTop: '2rem',
        color: 'var(--color-muted)',
        fontSize: 'var(--font-size-sm)',
        textAlign: 'center',
        lineHeight: 1.5,
        ...style,
      }}
      aria-label="Aviso legal"
    >
      <small>
        {children || defaultNotice}
      </small>
    </section>
  );
};

export default LegalNotice;
