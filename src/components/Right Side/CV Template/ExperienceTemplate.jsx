function ExperienceTemplate({ experience }) {
  return (
    <div className="experience-item">
      <div className="experience-item-upper">
        <div className="experience-item-upper-title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
              strokeWidth="0"
              fill="grey"
            />
          </svg>
          <h1>
            {experience.title || experience.company
              ? experience.title + " - " + experience.company
              : "Job title - Company/Employer"}
          </h1>
        </div>
        <h4>
          {experience.start || experience.end
            ? experience.start + " - " + experience.end
            : "Start - End"}
        </h4>
      </div>

      <div className="experience-item-description">
        <p>
          {experience.description
            ? experience.description
            : "Job overview description "}
        </p>
      </div>
    </div>
  );
}

export default ExperienceTemplate;
