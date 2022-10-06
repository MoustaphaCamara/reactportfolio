import React from "react";
import Buttons from "../components/Buttons";
import DynamicText from "../components/DynamicText";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import { motion } from "framer-motion";
import Rotate from "../components/Rotate";

const Home = () => {
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 1 },
      x: -300,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: -100,
    },
  };
  return (
    <div>
      <Mouse />
      <motion.div
        className="home"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
      >
        <Navigation />
        <SocialNetwork />
        <Rotate />
        <div className="home-main">
          <div className="main-content">
            <motion.h1
              className="hover"
              drag
              onDragEnd
              dragConstraints={{
                left: -250,
                right: 250,
                top: -250,
                bottom: 250,
              }}
            >
              M. CAMARA
            </motion.h1>
            <h2>
              <DynamicText />
            </h2>
            <h3>ReactJS - NextJS / Redux</h3>
            <h3>PHP / MySQL</h3>
            <br />
            <a href="./assets/CV.pdf" className="cv hover" target="_blank">
              <span>Télécharger CV (pdf) </span>
            </a>
          </div>
        </div>
        <Buttons right={"/projet-1"} />
      </motion.div>
    </div>
  );
};

export default Home;
