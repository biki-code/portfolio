import React from "react";

type ThemeToggleComponentProps = {
  toggleTheme: () => void;
};

const ThemeToggleComponent: React.FC<ThemeToggleComponentProps> = ({ toggleTheme }) => {
  return (
    <>
      <input onClick={toggleTheme} type="checkbox" name="" id="" />
    </>
  );
};

export default ThemeToggleComponent;
