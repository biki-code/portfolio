import React, { useState, createContext, useContext } from "react";
import { ThemeContextType } from "../utils/types";

const ThemeContext = createContext<ThemeContextType>({ theme: "light" });
export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
  const defaultDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const themePreference = window.localStorage.getItem("theme");

  const localTheme = themePreference ? themePreference : defaultDark ? "dark" : "light";

  const [theme, setTheme] = useState<string>(localTheme);

  const toggleTheme = () => {
    const mode = theme === "dark" ? "light" : "dark";

    // persist the theme choice in local storage
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

