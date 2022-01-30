import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./LogoComponent.module.scss";

type LogoComponentProps = {};

const LogoComponent: React.FC<LogoComponentProps> = () => {
  return (
    <NavLink className={styles.logo} to="/">
      <span>BikiCode</span>
    </NavLink>
  );
};

export default LogoComponent;
