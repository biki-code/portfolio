import React from "react";
import styles from "./LogoComponent.module.scss";

type LogoComponentProps = {};

const LogoComponent: React.FC<LogoComponentProps> = () => {
  return (
    <a className={styles.logo} href="/">
      <span>BikiCode</span>
    </a>
  );
};

export default LogoComponent;
