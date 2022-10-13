import React from "react";

const SocialNetwork = () => {
  const anim = () => {
    // effect1

    const icons = document.querySelectorAll(".social-network li");
    icons.forEach((icon) => {
      const link = icon.firstChild;
      icon.addEventListener("mousemove", (e) => {
        const x = e.layerX - 50;
        const y = e.layerY - 50;
        link.style.transform = `translate(${x / 5}px, ${y / 5}px)`;
        // link.style.transform = `translate(${e.offsetX - 20}px,${e.offsetY - 13}px)`;
      });
      icon.addEventListener("mouseleave", () => {
        link.style.transform = "";
      });
    });
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
