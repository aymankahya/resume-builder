import { useState } from "react";
import "./styles/app.scss";
import Header from "./components/Left Side/Header/Header";
import Section from "./components/Left Side/Builder/Section";
import Resume from "./components/Right Side/CV Template/Resume";
import PageScroller from "./components/Right Side/PageScroller";
import CloseResume from "./components/Right Side/CloseResume";

function App() {
  const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState({
    email: "",
    address: "",
    phone: "",
  });
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);

  function handleNameUpdate(event) {
    switch (event.target.name) {
      case "firstName":
        setFirstName(event.target.value);
        break;
      case "lastName":
        setLastName(event.target.value);
        break;
      case "jobTitle":
        setJobTitle(event.target.value);
        break;
      case "emailAddress":
        setAdditionalInfo({ ...additionalInfo, email: event.target.value });
        break;
      case "phone":
        setAdditionalInfo({ ...additionalInfo, phone: event.target.value });
        break;
      case "address":
        setAdditionalInfo({ ...additionalInfo, address: event.target.value });
    }
  }

  function handlePPUpdate(srcUrl) {
    setProfilePictureUrl(srcUrl);
  }

  function addExperienceResume(id) {
    setExperiences([
      ...experiences,
      { id: id, title: "", company: "", start: "", end: "", description: "" },
    ]);
  }

  function deleteExperienceResume(id) {
    setExperiences(experiences.filter((experience) => experience.id != id));
  }

  function addEducationResume(id) {
    setEducation([
      ...education,
      { id: id, school: "", degree: "", start: "", end: "", location: "" },
    ]);
  }

  function deleteEducationResume(id) {
    setEducation(education.filter((education) => education.id != id));
  }

  function handleEducationChange(newEducation) {
    education.map((item) => {
      if (item.id == newEducation.id) {
        item.school = newEducation.schoolName;
        item.degree = newEducation.degreeName;
        item.start = newEducation.start;
        item.end = newEducation.end;
        item.location = newEducation.location;
      }
    });

    setEducation([...education]);
  }

  function handleExperienceChange(newExperiences) {
    experiences.map((item) => {
      if (item.id == newExperiences.id) {
        item.title = newExperiences.title;
        item.company = newExperiences.company;
        item.start = newExperiences.start;
        item.end = newExperiences.end;
        item.description = newExperiences.description;
      }
    });

    setExperiences([...experiences]);
  }

  function handleProgress() {
    let progressEval = 0;
    if (firstName || lastName || jobTitle) progressEval += 1;
    if (experiences.length > 0) progressEval += 1;
    if (education.length > 0) progressEval += 1;
    console.log(progressEval);
    return progressEval;
  }

  return (
    <div className="main-app">
      <div className="main-app-leftSide">
        <Header
          firstName={firstName}
          lastName={lastName}
          progress={handleProgress()}
          handlePPUpdate={handlePPUpdate}
        />
        <div className="builder">
          <Section title="Your Details" handleName={handleNameUpdate} />
          <Section
            title="Your Experience"
            handleAdd={addExperienceResume}
            handleDelete={deleteExperienceResume}
            handleChange={handleExperienceChange}
          />
          <Section
            title="Your Education"
            handleAdd={addEducationResume}
            handleDelete={deleteEducationResume}
            handleChange={handleEducationChange}
          />
        </div>
      </div>
      <div className="main-app-rightSide">
        <CloseResume />
        <Resume
          firstName={firstName}
          lastName={lastName}
          jobTitle={jobTitle}
          additionalInfo={additionalInfo}
          ppURL={profilePictureUrl}
          experiences={experiences}
          educations={education}
        />
      </div>
    </div>
  );
}

export default App;
