import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavItemComponent.module.scss";

type NavItemComponentProps = {
  title: string;
  linkTo: string;
};

const NavItemComponent: React.FC<NavItemComponentProps> = ({ title, linkTo }) => {
  return (
    <>
      <NavLink className={styles.navlink} to={linkTo}>
        <span>{title}</span>
      </NavLink>
    </>
  );
};

export default NavItemComponent;
