import React from "react";
import HeaderComponent from "../components/header/HeaderComponent";
import ProjectsComponent from "../components/projects/ProjectsComponent";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <>
      <HeaderComponent />
      <ProjectsComponent />
    </>
  );
};

export default Projects;
