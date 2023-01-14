import React from "react";
import styles from './loading-style.module.css'

const LoadingAnimate = () => {
  return (
    <>
      <div className={`${styles.container__animate}`}>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
    </>
  );
};

export default LoadingAnimate;
