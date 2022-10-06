import React from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";
import Rotate from "../components/Rotate";

const Project2 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Rotate />
        <Navigation />
        <Logo />
        <Project projectNumber={1} />
        <Buttons left={"/projet-1"} right={"/projet-3"} />
      </div>
    </main>
  );
};

export default Project2;
