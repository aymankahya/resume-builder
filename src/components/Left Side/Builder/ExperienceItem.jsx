import { useState } from "react";
import InputField from "../Form/InputField";
import JobDescription from "../Form/JobDescription";
import Period from "../Form/Period";

function ExperienceItem({ idKey, handleDelete, handleChange }) {
  const [experience, setExperience] = useState({
    id: idKey,
    title: "",
    company: "",
    start: "",
    end: "",
    location: "",
  });
  const [isExpanded, setIsExpanded] = useState(false);

  function handleExperienceChange(event) {
    if (event.target.name == "jobTitle") {
      setExperience({ ...experience, title: event.target.value });
      handleChange({ ...experience, title: event.target.value });
    }
    if (event.target.name == "companyName") {
      setExperience({ ...experience, company: event.target.value });
      handleChange({ ...experience, company: event.target.value });
    }

    if (event.target.name == "period start") {
      setExperience({ ...experience, start: event.target.value });
      handleChange({ ...experience, start: event.target.value });
    }

    if (event.target.name == "period end") {
      setExperience({ ...experience, end: event.target.value });
      handleChange({ ...experience, end: event.target.value });
    }

    if (event.target.name == "job-description") {
      setExperience({ ...experience, description: event.target.value });
      handleChange({ ...experience, description: event.target.value });
    }
  }

  function handleExpandExperience() {
    isExpanded ? setIsExpanded(false) : setIsExpanded(true);
  }

  return (
    <div className="experience">
      <div className="experience-upper">
        <button
          className="experience-upper-btn"
          onClick={handleExpandExperience}
        >
          <div id="experience-upper-summary">
            <div
              id={
                experience.title && experience.company
                  ? "status-valid"
                  : "status"
              }
            >
              {experience.title && experience.company ? (
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
                {experience.title || experience.company
                  ? (experience.title ? experience.title : "") +
                    (experience.company ? " - " + experience.company : "")
                  : "Untitled"}
              </h1>
              <p>
                {experience.start || experience.end
                  ? (experience.start ? experience.start : "") +
                    (experience.end ? " - " + experience.end : "")
                  : "Start - End"}
              </p>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={
              isExpanded ? "expandExperience" : "expandExperience expanded"
            }
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 9l6 6l6 -6" />
          </svg>
        </button>
        <button
          className="delete-experience"
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
      <div
        className={isExpanded ? "experience-form" : "experience-form hidden"}
      >
        <div className="job-company">
          <InputField
            name="jobTitle"
            label="Job Title"
            handleChange={handleExperienceChange}
          />
          <InputField
            name="companyName"
            label="Company/Employer"
            handleChange={handleExperienceChange}
          />
        </div>

        <div className="period-location">
          <Period handleChange={handleExperienceChange} />
          <InputField
            name="location"
            label="Location"
            handleChange={handleExperienceChange}
          />
        </div>
        <JobDescription handleChange={handleExperienceChange} />
      </div>
    </div>
  );
}

export default ExperienceItem;
