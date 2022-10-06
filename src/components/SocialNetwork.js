import React from "react";

const SocialNetwork = () => {
  const anim = () => {
    // effect1

    const icons = document.querySelectorAll(".social-network a");
    icons.forEach((icon) => {
      icon.addEventListener("mouseover", (e) => {
        icon.style.transform = `translate(${e.offsetX - 20}px,${
          e.offsetY - 13
        }px)`;
      });
      icon.addEventListener("mouseleave", () => {
        icon.style.transform = "";
      });
    });

    // effect2
    // const links = document.querySelectorAll(".social-network i");
    // links.forEach((link) => {
    //   link.addEventListener("mousemove", (e) => {
    //     const x = e.layerX - 60;
    //     const y = e.layerY - 60;
    //     e.target.style.transform = `translate(${x / 15}px, ${y / 15}px)`;
    //   });
    //   link.addEventListener("mouseleave", (e) => {
    //     e.target.style.transform = "translate(0,0)";
    //   });
    // });
  };

  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://www.linkedin.com/in/camara-moustapha/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseMove={anim}
        >
          <li>
            <i className="fab fa-linkedin"></i>
          </li>
        </a>
        <a
          href="https://github.com/MoustaphaCamara"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseMove={anim}
        >
          <li>
            <i className="fab fa-github"></i>
          </li>
        </a>
        <a
          href="https://codepen.io/moustaphacamara"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseMove={anim}
        >
          <li>
            <i className="fa-brands fa-codepen"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;
