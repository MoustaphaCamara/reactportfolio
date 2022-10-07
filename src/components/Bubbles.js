import React from "react";

const Bubbles = () => {
  const bubbleMaker = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    bubble_container.appendChild(bubble);

    const size = Math.random() * 300 + "px";
    bubble.style.height = size;
    bubble.style.width = size;
    bubble.style.top = Math.random() * 400 + "%";
    bubble.style.left = Math.random() * 300 + "%";

    setTimeout(() => {
      bubble.style.transition = "all .1s ease";
      bubble.style.opacity = 0.1;
      bubble.remove();
    }, 10000);
  };

  setInterval(bubbleMaker, 300);

  return <div id="bubble_container"></div>;
};

export default Bubbles;
