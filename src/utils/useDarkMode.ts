import { useState } from "react";

export const useDarkMode = (): [string, () => void] => {
  const localTheme = window.localStorage.getItem("theme")
    ? (window.localStorage.getItem("theme") as string)
    : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

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
