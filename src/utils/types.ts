export type NavbarItemType = {
  key: number;
  title: string;
  linkTo: string;
};

export type ThemeContextType = {
  theme: string;
  toggleTheme?: () => void;
};
