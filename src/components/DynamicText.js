import React, { useEffect } from "react";

const DynamicText = () => {
  useEffect(() => {
    const target = document.getElementById("text-target2");
    let array = ["Full-stack", "React", "PHP / MySQL"];
    // const word = document.getElementById("word");
    let languages = 0;

    function wordChange() {
      setInterval(() => {
        target.textContent = array[languages];
        languages++;
        target.classList.add("appear");
        if (array[languages] == undefined) {
          languages = 0;
        }
      }, 3000);
    }
    wordChange();
  }, []);

  return (
    <span className="dynamic-text">
      <span>Développement web</span>
      <span id="text-target2"></span>
    </span>
  );
};

export default DynamicText;
