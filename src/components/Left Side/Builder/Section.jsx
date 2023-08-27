import { useState } from "react";
import "../../../styles/section.scss";
import PersonalDetail from "./PersonalDetail";
import Experience from "./Experience";
import Education from "./Education";

function Section({ title, handleAdd, handleDelete, handleChange, handleName }) {
  const [sectionExpanded, setSectionExpanded] = useState(false);

  function handleExpandSection() {
    sectionExpanded ? setSectionExpanded(false) : setSectionExpanded(true);
  }

  return (
    <div className={"section" + (!sectionExpanded ? " hidden" : "")}>
      <button
        className={"section-title" + (!sectionExpanded ? " hidden" : "")}
        onClick={handleExpandSection}
      >
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="section-expanded"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 9l6 6l6 -6" />
        </svg>
      </button>

      <div className="section-form">
        {title == "Your Details" && (
          <PersonalDetail
            isExpanded={sectionExpanded}
            handleChange={handleName}
          />
        )}

        {title == "Your Experience" && (
          <Experience
            isExpanded={sectionExpanded}
            addExperienceResume={handleAdd}
            deleteExperienceResume={handleDelete}
            changeExperienceResume={handleChange}
          />
        )}

        {title == "Your Education" && (
          <Education
            isExpanded={sectionExpanded}
            addEducationResume={handleAdd}
            deleteEducationResume={handleDelete}
            changeEducationResume={handleChange}
          />
        )}
      </div>
    </div>
  );
}

export default Section;
