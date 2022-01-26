import React from "react";
import HeaderComponent from "../components/header/HeaderComponent";
import HeroComponent from "../components/hero/HeroComponent";

type IndexProps = {};

const Index: React.FC<IndexProps> = () => {
  return (
    <>
      <HeaderComponent />
      <HeroComponent />
    </>
  );
};

export default Index;
