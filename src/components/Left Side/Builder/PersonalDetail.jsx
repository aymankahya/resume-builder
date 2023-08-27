import { Fragment, useState } from "react";
import InputField from "../Form/InputField";

function PersonalDetail({ isExpanded, handleChange }) {
  const [expandInfo, setExpandInfo] = useState(false);

  function handleExpandInfo() {
    expandInfo ? setExpandInfo(false) : setExpandInfo(true);
  }

  return (
    <Fragment>
      <div className={"form" + (isExpanded ? " shown" : "")}>
        <div className="job-title">
          <InputField
            name="jobTitle"
            label="Job Title"
            handleChange={handleChange}
          />
        </div>
        <div className="user-full-name">
          <InputField
            name="firstName"
            label="First Name"
            handleChange={handleChange}
          />
          <InputField
            name="lastName"
            label="Last Name"
            handleChange={handleChange}
          />
        </div>

        <div className="email">
          <InputField
            name="emailAddress"
            label="Email Address"
            handleChange={handleChange}
          />
        </div>

        <div className={"additional-info" + (expandInfo ? "shown" : "")}>
          <InputField
            name="address"
            label="Address"
            handleChange={handleChange}
          />
          <InputField
            name="phone"
            label="Phone Number"
            handleChange={handleChange}
          />
        </div>

        <button className="additional-info-btn" onClick={handleExpandInfo}>
          Edit additional info
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={expandInfo ? "enabled" : "disabled"}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 9l6 6l6 -6" />
          </svg>
        </button>
      </div>
    </Fragment>
  );
}

export default PersonalDetail;
