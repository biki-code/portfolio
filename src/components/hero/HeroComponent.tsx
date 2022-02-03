import React from "react";
import HeroNavComponent from "../heronav/HeroNavComponent";
import styles from "./HeroComponent.module.scss";

type HeroComponentProps = {};

const HeroComponent: React.FC<HeroComponentProps> = () => {
  return (
    <>
      <main className={styles.hero}>
        <section>
          <h1>
            <span style={{ color: "#9fa3ad" }}>Hello! Moi! ¡Holá! Bonjour! Привет!</span>
            &nbsp; I'm Biki, a <span className={styles.emphasized}>Software Developer</span> 👩🏾‍💻 currently working with
            C#, SQL, NOSQL, React and Typescript
          </h1>
          <HeroNavComponent />
        </section>
      </main>
    </>
  );
};

export default HeroComponent;
