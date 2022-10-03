import React, { useEffect } from "react";

const Mouse = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    window.addEventListener("mousemove", (e) => {
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";
    });

    document.querySelectorAll(".hover").forEach((link) => {
      link.addEventListener("mouseover", () => {
        cursor.classList.add("hovered");
        cursor.style.transition = ".1s ease-out";
      });
      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("hovered");
        cursor.style.transition = ".1s";
      });
    });
  }, []);

  return <span className="cursor"></span>;
};

export default Mouse;
