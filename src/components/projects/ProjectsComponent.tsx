import React from "react";
import styles from "./ProjectsComponent.module.scss"
type ProjectsComponentProps = {};

const ProjectsComponent: React.FC<ProjectsComponentProps> = () => {
  return(
  <div>
  <ul className={styles.list1}>
    <li>vv</li>
    <li>vv</li>
    <li>vv</li>
  </ul>

  <ul className={styles.list2}>
    <li>List-item 1</li>
    <li>List-item 2</li>
    <li>List-item 3</li>
  </ul>
</div>
  )
};

export default ProjectsComponent;
