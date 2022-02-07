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
    projectName: "Wolf Adventure game - group project"
  },
  {
    key: 1,
    linkTo: "https://biki-code.github.io/portfolio/",
    projectName: "React Portfolio" 
  },
 
  {
    key: 2,
    linkTo: "",
    projectName: "Personal Unity game"
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
