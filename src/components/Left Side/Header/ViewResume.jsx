import React from "react";
import { IconContext } from "react-icons";
import { BiSolidShow } from "react-icons/bi";

function ViewResume() {
  const handleShowResume = () => {
    const resumeContainer = document.querySelector(".main-app-rightSide");
    resumeContainer.classList.add("visible");
  };

  return (
    <button className="view-resume" onClick={handleShowResume}>
      <IconContext.Provider value={{ className: "view-resume-icon" }}>
        <BiSolidShow />
      </IconContext.Provider>
    </button>
  );
}

export default ViewResume;
