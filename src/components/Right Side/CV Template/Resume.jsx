import { Fragment } from "react";
import "../../../styles/resume.scss";
import EducationTemplate from "./EducationTemplate";
import ExperienceTemplate from "./ExperienceTemplate";

function Resume({
  firstName,
  lastName,
  jobTitle,
  additionalInfo,
  ppURL,
  experiences,
  educations,
}) {
  return (
    <div className="resume-container">
      <div className="resume-page" page-number="1">
        <div className="resume-page-upper">
          <div className="profile-details">
            {ppURL && <img src={ppURL} />}
            <div className="fullname-job">
              <h1>{firstName + " " + lastName}</h1>
              <p>{jobTitle}</p>
            </div>
          </div>
          <div className="personal-info">
            <p className="address">
              <b>{additionalInfo.address}</b>
            </p>
            <p className="phone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
              {additionalInfo.phone}
            </p>
            <p className="email">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
              {additionalInfo.email}
            </p>
          </div>
        </div>
        <div className="resume-page-main">
          <div className="resume-section experience">
            {experiences.length > 0 && (
              <Fragment>
                <h1>EXPERIENCES</h1>
                <div className="experiences">
                  {experiences.map((item) => (
                    <ExperienceTemplate key={item.id} experience={item} />
                  ))}
                </div>
              </Fragment>
            )}
          </div>

          <div className="resume-section education">
            {educations.length > 0 && (
              <Fragment>
                <h1>EDUCATION</h1>
                <div className="educations">
                  {educations.map((item) => (
                    <EducationTemplate key={item.id} education={item} />
                  ))}
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
