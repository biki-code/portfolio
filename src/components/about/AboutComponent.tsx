import React from "react";
import styles from "./AboutComponent.module.scss";

type AboutComponentProps = {};

const AboutComponent: React.FC<AboutComponentProps> = () => {
  return (
    <>
      <main className={styles.about}>
        <section>About</section>
      </main>
    </>
  );
};

export default AboutComponent;
  