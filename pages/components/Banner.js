import React from "react";
import styles from "../styles/Baner.module.css";

const Banner = () => {
  return (
    <section className={styles.banner} id='home'>
      <h2>
        We Make
        <br />
        <span>Brands</span> Matter
      </h2>
    </section>
  );
};

export default Banner;
