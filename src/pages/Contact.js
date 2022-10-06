import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Buttons from "../components/Buttons";
import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import { motion } from "framer-motion";
import Rotate from "../components/Rotate";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 180,
    },
  };
  return (
    <main>
      <Mouse />

      <motion.div
        className="contact"
        initial="out"
        animate="in"
        out="out"
        transition={{ duration: 0.5 }}
        variants={pageTransition}
      >
        <Navigation />
        <Logo />
        <Rotate />
        <ContactForm />

        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adresse</h4>
              <p>Lyon - Villeurbanne</p>
              <p>Rhône-Alpes</p>
            </div>
          </div>

          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <CopyToClipboard text="0783883175">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard hover"
                  onClick={() => alert("Numéro copié dans le presse-papier !")}
                >
                  07 83 88 31 75
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard text="cmr.mous@gmail.com">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard hover"
                  onClick={() => alert("Email copié dans le presse-papier !")}
                >
                  cmr.mous@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />

          <div className="credits">
            <p>Moustapha Camara - 2022</p>
          </div>
        </div>
        <Buttons left={"/projet-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;
