import { useState } from "react";
import InputField from "../Form/InputField";
import Period from "../Form/Period";
import Education from "./Education";

function EducationItem({ idKey, handleDelete, handleChangeResume }) {
  const [education, setEducation] = useState({
    id: idKey,
    schoolName: "",
    degreeName: "",
    start: "",
    end: "",
    location: "",
  });
  const [isExpanded, setIsExpanded] = useState(false);

  function handleEducationChange(event) {
    if (event.target.name == "school") {
      setEducation({ ...education, schoolName: event.target.value });
      handleChangeResume({ ...education, schoolName: event.target.value });
    }
    if (event.target.name == "degree") {
      setEducation({ ...education, degreeName: event.target.value });
      handleChangeResume({ ...education, degreeName: event.target.value });
    }
    if (event.target.name == "period start") {
      setEducation({ ...education, start: event.target.value });
      handleChangeResume({ ...education, start: event.target.value });
    }
    if (event.target.name == "period end") {
      setEducation({ ...education, end: event.target.value });
      handleChangeResume({ ...education, end: event.target.value });
    }
    if (event.target.name == "location") {
      setEducation({ ...education, location: event.target.value });
      handleChangeResume({ ...education, location: event.target.value });
    }
  }

  function handleExpandEducation() {
    isExpanded ? setIsExpanded(false) : setIsExpanded(true);
  }

  return (
    <div className="education">
      <div className="education-upper">
        <button className="education-upper-btn" onClick={handleExpandEducation}>
          <div id="education-upper-summary">
            <div
              id={
                education.schoolName && education.degreeName
                  ? "status-valid"
                  : "status"
              }
            >
              {education.schoolName && education.degreeName ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                </svg>
              )}
            </div>
            <div id="summary">
              <h1>
                {education.schoolName || education.degreeName
                  ? (education.schoolName ? education.schoolName : "") +
                    (education.degreeName ? " - " + education.degreeName : "")
                  : "Untitled"}
              </h1>
              <p>
                {education.start || education.end
                  ? (education.start ? education.start : "") +
                    (education.end ? " - " + education.end : "")
                  : "Start - End"}
              </p>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={
              isExpanded ? "expandEducation" : "expandEducation expanded"
            }
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 9l6 6l6 -6" />
          </svg>
        </button>

        <button
          className="delete-education"
          onClick={() => handleDelete(idKey)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7h16" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            <path d="M10 12l4 4m0 -4l-4 4" />
          </svg>
        </button>
      </div>
      <div className={isExpanded ? "education-form" : "education-form hidden"}>
        <div className="job-company">
          <InputField
            name="school"
            label="School/University"
            handleChange={handleEducationChange}
          />
          <InputField
            name="degree"
            label="Degree"
            handleChange={handleEducationChange}
          />
        </div>

        <div className="period-location">
          <Period handleChange={handleEducationChange} />
          <InputField
            name="location"
            label="Location"
            handleChange={handleEducationChange}
          />
        </div>
      </div>
    </div>
  );
}

export default EducationItem;
