import "../../../styles/header.scss";
import FullName from "./FullName";
import ProfilePicture from "./ProfilePicture";
import ProgressBar from "./ProgressBar";
import ViewResume from "./ViewResume";

function Header({ firstName, lastName, progress, handlePPUpdate }) {
  return (
    <div className="header">
      <div className="left">
        <ProfilePicture handleChange={handlePPUpdate} />
        <FullName firstName={firstName} lastName={lastName} />
      </div>
      <div className="right">
        <ViewResume />
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
}

export default Header;
