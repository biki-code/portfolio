import React from "react";
import styles from "./HeroComponent.module.scss";

type HeroComponentProps = {};

const HeroComponent: React.FC<HeroComponentProps> = () => {
  return (
    <>
      <div className={styles.hero}>HeroComponent</div>
    </>
  );
};

export default HeroComponent;
