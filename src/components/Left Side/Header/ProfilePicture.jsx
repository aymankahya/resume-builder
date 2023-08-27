import { useState } from "react";

function ProfilePicture({ handleChange }) {
  const [pictureFile, setPictureFile] = useState(false);

  function autoSubmit(e) {
    setPictureFile(URL.createObjectURL(e.target.files.item(0)));
    handleChange(URL.createObjectURL(e.target.files.item(0)));
  }

  return (
    <div className="profile-picture">
      {pictureFile ? (
        <img src={pictureFile} />
      ) : (
        <>
          <svg viewBox="0 0 166 166" xmlns="http://www.w3.org/2000/svg">
            <circle cx="83" cy="83" r="74" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
          </svg>
        </>
      )}

      <form id="picture-upload-form">
        <input
          type="file"
          id="picture-upload"
          onChange={(e) => autoSubmit(e)}
        ></input>
        <label htmlFor="picture-upload"></label>
      </form>
    </div>
  );
}

export default ProfilePicture;
