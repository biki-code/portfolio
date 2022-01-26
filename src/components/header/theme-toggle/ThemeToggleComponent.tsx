import React from "react";
import { useThemeContext } from "../../../contexts/ThemeProvider";
import styles from "./ThemeToggleComponent.module.scss";

type ThemeToggleComponentProps = {};

const ThemeToggleComponent: React.FC<ThemeToggleComponentProps> = () => {
  const { theme, toggleTheme } = useThemeContext();

  const getClassNames = () => {
    if (theme === "dark") return `${styles["toggle-inner"]} ${styles["toggle-active"]}`;
    return styles["toggle-inner"];
  };

  return (
    <>
      <div className={styles.toggle} onClick={toggleTheme}>
        <span className={getClassNames()}></span>
      </div>
    </>
  );
};

export default ThemeToggleComponent;
