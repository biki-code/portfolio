import React from "react";
import HeaderComponent from "../components/header/HeaderComponent";

type IndexProps = {
  toggleTheme: () => void;
};

const Index: React.FC<IndexProps> = ({ toggleTheme }) => {
  return (
    <>
      <HeaderComponent toggleTheme={toggleTheme} />
    </>
  );
};

export default Index;
