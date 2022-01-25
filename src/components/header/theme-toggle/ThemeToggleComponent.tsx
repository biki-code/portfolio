import React from "react";
import styles from "./ThemeToggleComponent.module.scss";

type ThemeToggleComponentProps = {
  toggleTheme: () => void;
};

const ThemeToggleComponent: React.FC<ThemeToggleComponentProps> = ({ toggleTheme }) => {
  const dark = true
  return (
    <>
      <span className={styles.toggle}>
        <span className={`${styles["toggle-inner"]} ${dark && styles["toggle-active"]}`} onClick={toggleTheme}></span>
      </span>
    </>
  );
};

export default ThemeToggleComponent;
