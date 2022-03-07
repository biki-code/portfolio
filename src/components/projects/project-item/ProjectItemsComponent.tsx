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
    <div className={styles.project__body}>
      <a key={0} href={linkTo} target="_blank" rel="noreferrer">
        {projectName}
      </a>
    </div>
  );
};

export default ProjectItemsComponent;
