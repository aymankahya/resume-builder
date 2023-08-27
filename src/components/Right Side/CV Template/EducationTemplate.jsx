function EducationTempalte({ education }) {
  return (
    <div className="education-item">
      <div className="education-item-upper">
        <div className="education-item-upper-title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
              strokeWidth="0"
              fill="grey"
            />
          </svg>
          <h1>
            {education.degree || education.school
              ? education.degree + " - " + education.school
              : "Degree Title - School/University"}
          </h1>
        </div>
        <h4>
          {education.start || education.end
            ? education.start + " - " + education.end
            : "Start - End"}
        </h4>
      </div>
      <div className="experience-item-description">
        <p>{education.location ? education.location : "Location"}</p>
      </div>
    </div>
  );
}

export default EducationTempalte;
