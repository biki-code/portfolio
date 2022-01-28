import React from "react";
import styles from "./LinkButtonComponent.module.scss";

type LinkButtonComponentProps = {
  name: string;
  linkTo: string;
  inverted: boolean;
};

const LinkButtonComponent: React.FC<LinkButtonComponentProps> = ({ name, linkTo, inverted }) => {
  return (
    <>
      <a className={styles.anchor} href={linkTo}>
        {inverted ? <button className={styles.inverted}>{name}</button> : <button>{name}</button>}
      </a>
    </>
  );
};

export default LinkButtonComponent;
