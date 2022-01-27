import React from "react";
import styles from "./HeroComponent.module.scss";

type HeroComponentProps = {};

const HeroComponent: React.FC<HeroComponentProps> = () => {
  return (
    <>
      <div className={styles.hero}>
        {" "}
        Bikiltu Terfa, Computer Programming student.
      </div>
    </>
  );
};

export default HeroComponent;
