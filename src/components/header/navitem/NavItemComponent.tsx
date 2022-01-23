import React from "react";
import styles from "./NavItemComponent.module.scss";

type NavItemComponentProps = {
  title: string;
  linkTo: string;
};

const NavItemComponent: React.FC<NavItemComponentProps> = ({ title, linkTo }) => {
  return (
    <>
      <a className={styles.navlink} href={linkTo}>
        <span>{title}</span>
      </a>
    </>
  );
};

export default NavItemComponent;
