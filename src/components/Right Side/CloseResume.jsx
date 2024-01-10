import React from "react";
import { IconContext } from "react-icons";
import { IoIosCloseCircle } from "react-icons/io";

function CloseResume() {
  const handleCloseResume = () => {
    const resumePage = document.querySelector(".main-app-rightSide.visible");
    resumePage.classList.remove("visible");
  };

  return (
    <button className="close-resume" onClick={handleCloseResume}>
      <IconContext.Provider value={{ className: "close-resume-icon" }}>
        <IoIosCloseCircle />
      </IconContext.Provider>
    </button>
  );
}

export default CloseResume;
