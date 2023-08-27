import { Fragment, useState } from "react";
import ExperienceItem from "./ExperienceItem";
import AddButton from "./AddButton";

function Experience({
  isExpanded,
  addExperienceResume,
  deleteExperienceResume,
  changeExperienceResume,
}) {
  const [experienceList, setExperienceList] = useState([]);

  function handleAddExperience() {
    const idKey = crypto.randomUUID();
    setExperienceList([...experienceList, idKey]);
    addExperienceResume(idKey);
  }

  function handleDeleteExperience(id) {
    setExperienceList(experienceList.filter((idItem) => idItem != id));
    deleteExperienceResume(id);
  }

  return (
    <Fragment>
      {isExpanded && (
        <p className="description">
          Include your last 10 years of relevant experience and dates in this
          section. List your most recent position first.
        </p>
      )}

      <div className={"form" + (isExpanded ? " shown" : "")}>
        {experienceList.map((item) => {
          return (
            <ExperienceItem
              key={item}
              idKey={item}
              handleDelete={handleDeleteExperience}
              handleChange={changeExperienceResume}
            />
          );
        })}
        <AddButton title="Add Experience" handleChange={handleAddExperience} />
      </div>
    </Fragment>
  );
}

export default Experience;
