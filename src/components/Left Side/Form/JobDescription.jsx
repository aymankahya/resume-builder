function JobDescription({ handleChange }) {
  return (
    <div className="input-field job-description">
      <textarea
        name="job-description"
        placeholder="Write your professional overview here."
        onChange={handleChange}
        //onKeyDown tab to prevent default function and add space instead
        required
      />

      <label htmlFor="job-description">Description</label>
    </div>
  );
}

export default JobDescription;
