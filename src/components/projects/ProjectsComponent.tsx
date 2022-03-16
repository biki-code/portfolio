import React from "react";
import styles from "./ProjectsComponent.module.scss";
import ProjectItemsComponent from "./project-item/ProjectItemsComponent";

type ProjectsComponentProps = {};

type PROJECTSInterface = {
  linkTo: string;
  projectName: string;
}[];

const PROJECTS: PROJECTSInterface = [
  {
    linkTo: "https://github.com/varia-ict/varia-agile-20C-ryhma-1",
    projectName: "Wolf Adventure game - Group project",
  },
  {
    linkTo: "https://biki-portfolio.web.app/about",
    projectName: "React Portfolio Website",
  },

  {
    linkTo: "https://play.unity.com/u/BikiTerfa",
    projectName: "Unity Personal Games",
  },

  {
    linkTo: "https://github.com/biki-code/web-developement-tutorials",
    projectName: "Fullstack Project",
  },
  {linkTo: "https://github.com/biki-code/express_backend",
  projectName: "Express-Backend",
}
];

const ProjectsComponent: React.FC<ProjectsComponentProps> = () => {
  return (
    <>
      <main className={styles.main}>
        <section>
          {PROJECTS.map((project, index) => (
            <ProjectItemsComponent key={index} project={project} />
          ))}
        </section>
      </main>
    </>
  );
};

export default ProjectsComponent;
