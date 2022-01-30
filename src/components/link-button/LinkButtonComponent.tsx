import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./LinkButtonComponent.module.scss";

type LinkButtonComponentProps = {
  name: string;
  linkTo: string;
  inverted?: boolean;
};

const LinkButtonComponent: React.FC<LinkButtonComponentProps> = ({ name, linkTo, inverted=false}) => {
  return (
    <>
      <NavLink className={styles.anchor} to={linkTo}>
        {inverted ? <button className={styles.inverted}>{name}</button> : <button>{name}</button>}
      </NavLink>
    </>
  );
};

export default LinkButtonComponent;
