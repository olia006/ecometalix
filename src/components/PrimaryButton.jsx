// src/components/PrimaryButton.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ children, onClick, className, ...props }) => {
  return (
    <div className={styles.primaryButtonWrap}>
      <div className={styles.primaryButtonShadow}></div>
      <button
        className={`${styles.primaryBtn} ${className || ""}`}
        onClick={onClick}
        {...props}
      >
        <span className={styles.primaryBtnText}>
          {children}
        </span>
      </button>
    </div>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default PrimaryButton;
