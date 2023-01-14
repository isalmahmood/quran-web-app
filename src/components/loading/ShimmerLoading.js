import React from "react";
import styles from "./shimmer-style.module.css";

export const ShimmerLoading = () => {
  return (
    <>
      <div className={styles.shimmer__loading}>

      <div className={styles.placeholder}></div>
      </div>
    </>
  );
};
