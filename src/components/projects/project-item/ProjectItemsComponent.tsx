import React from "react";
import styles from "./ProjectItemsComponent.module.scss";

type ProjectItemsComponentProps = {
  project: {
    linkTo: string;
    projectName: string;
  };
};

const ProjectItemsComponent: React.FC<ProjectItemsComponentProps> = ({ project }) => {
  const { linkTo, projectName } = project;
  return (
    <a className={styles.project__body} key={0} href={linkTo} target="_blank" rel="noreferrer">
      <div>{projectName}</div>
    </a>
  );
};

export default ProjectItemsComponent;
