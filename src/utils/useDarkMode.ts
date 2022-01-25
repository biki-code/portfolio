import { useState } from "react";

export const useDarkMode = (): [string, () => void] => {
  const defaultDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const themePreference = window.localStorage.getItem("theme");

  const localTheme = themePreference ? themePreference : defaultDark ? "dark" : "light";

  const [theme, setTheme] = useState<string>(localTheme);

  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === "dark" ? setMode("light") : setMode("dark");
  };

  return [theme, toggleTheme];
};
