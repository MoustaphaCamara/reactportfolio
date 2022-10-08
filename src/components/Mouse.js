import React, { useEffect } from "react";

const Mouse = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const outerCursor = document.querySelector(".outer-cursor");
    window.addEventListener("mousemove", (e) => {
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";
      outerCursor.style.left = e.pageX + "px";
      outerCursor.style.top = e.pageY + "px";
    });

    document.querySelectorAll(".hover").forEach((link) => {
      link.addEventListener("mouseover", () => {
        cursor.classList.add("hovered");
        cursor.style.transition = ".1s ease-out";
      });
      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("hovered");
        cursor.style.transition = "0s";
      });
    });
  }, []);

  return (
    <div>
      <span className="cursor"></span>
      <span className="outer-cursor"></span>
    </div>
  );
};

export default Mouse;
