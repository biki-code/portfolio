import React from "react";
import HeaderComponent from "../components/header/HeaderComponent";
import AboutComponent from "../components/about/AboutComponent";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <>
      <HeaderComponent />
      <AboutComponent />
    </>
  );
};

export default About;
