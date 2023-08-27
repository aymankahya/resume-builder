import "../../../styles/header.scss";
import FullName from "./FullName";
import ProfilePicture from "./ProfilePicture";
import ProgressBar from "./ProgressBar";

function Header({ firstName, lastName, progress, handlePPUpdate }) {
  return (
    <div className="header">
      <div className="left">
        <ProfilePicture handleChange={handlePPUpdate} />
        <FullName firstName={firstName} lastName={lastName} />
      </div>
      <ProgressBar progress={progress} />
    </div>
  );
}

export default Header;
