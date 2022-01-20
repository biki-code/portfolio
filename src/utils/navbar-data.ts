type navbarDataTypes = {
  key: number;
  title: string;
  linkTo: string;
}[];

export const NAV_DATA: navbarDataTypes = [
  {
    key: 0,
    title: "Homepage",
    linkTo: "/",
  },
  {
    key: 1,
    title: "Projects",
    linkTo: "/projects",
  },
  {
    key: 2,
    title: "CV",
    linkTo: "/cv",
  },
];
