import React from "react";
import styles from "./ProjectsComponent.module.scss";

type ProjectsComponentProps = {};

type PROJECTSInterface = {
  key: number;
  linkTo: string;
  projectName: string
}[];

const PROJECTS: PROJECTSInterface = [
  {
    key: 0,
    linkTo: "https://github.com/varia-ict/varia-agile-20C-ryhma-1",
    projectName: "Project1"
  },
  {
    key: 1,
    linkTo: "",
    projectName: ""
  },
];

const ProjectsComponent: React.FC<ProjectsComponentProps> = () => {
  return (
    <>
      <main className={styles.main}>
        <div>
          {PROJECTS.map(({ key, linkTo, projectName }) => (
            <a key={key} href={linkTo} target="_blank" rel="noreferrer">{projectName}</a>
          ))}
        </div>
      </main>
    </>
  );
};

export default ProjectsComponent;
