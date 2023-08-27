import { useState } from "react";
import { Fragment } from "react";
import AddButton from "./AddButton";
import EducationItem from "./EducationItem";

function Education({
  isExpanded,
  addEducationResume,
  deleteEducationResume,
  changeEducationResume,
}) {
  const [educationList, setEducationList] = useState([]);

  function handleAddEducation() {
    const idKey = crypto.randomUUID();
    setEducationList([...educationList, idKey]);
    addEducationResume(idKey);
  }

  function handleDeleteEducation(id) {
    setEducationList(educationList.filter((idItem) => idItem != id));
    deleteEducationResume(id);
  }

  return (
    <Fragment>
      <div className={"form" + (isExpanded ? " shown" : "")}>
        {educationList.map((item) => {
          return (
            <EducationItem
              key={item}
              idKey={item}
              handleDelete={handleDeleteEducation}
              handleChangeResume={changeEducationResume}
            />
          );
        })}
        <AddButton title="Add Education" handleChange={handleAddEducation} />
      </div>
    </Fragment>
  );
}

export default Education;
