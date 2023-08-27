function AddButton({ title, handleChange }) {
  return (
    <button className="add-button" onClick={handleChange}>
      <div className="add-button-round">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5l0 14" />
          <path d="M5 12l14 0" />
        </svg>
      </div>
      {title}
    </button>
  );
}

export default AddButton;
