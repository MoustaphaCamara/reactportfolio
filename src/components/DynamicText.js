import React, { useEffect } from "react";

const DynamicText = () => {
  useEffect(() => {
    const target = document.getElementById("text-target");
    let array = ["Full-stack", "React", "PHP / MySQL"];
    let wordIndex = 0;
    let letterIndex = 0;

    const createLetter = () => {
      const letter = document.createElement("span");
      target.appendChild(letter);
      letter.classList.add("letter");
      letter.style.opacity = "0";
      letter.style.animation = "anim 5s ease forwards";
      letter.textContent = array[wordIndex][letterIndex];

      setTimeout(() => {
        letter.remove();
      }, 2000);
    };

    const loop = () => {
      setTimeout(() => {
        if (wordIndex >= array.length) {
          wordIndex = 0;
          letterIndex = 0;
          loop();
        } else if (letterIndex < array[wordIndex].length) {
          createLetter();
          letterIndex++;
          loop();
        } else {
          letterIndex = 0;
          wordIndex++;
          setTimeout(loop, 2000);
        }
      }, 80);
    };
    loop();
    const target2 = document.getElementById("text-target2");
    let array2 = ["Full-stack", "React", "PHP / MySQL"];
    const word = document.getElementById("word");
    let languages = 0;

    function wordChange() {
      setInterval(() => {
        target2.textContent = array2[languages];
        languages++;
        target2.classList.add("appear");
        if (array2[languages] == undefined) {
          languages = 0;
        }
      }, 3000);
    }
    wordChange();
  }, []);

  return (
    <span className="dynamic-text">
      <span>Développement web</span>
      {/* <span id="text-target"></span> */}
      <span id="text-target2"></span>
    </span>
  );
};

export default DynamicText;
