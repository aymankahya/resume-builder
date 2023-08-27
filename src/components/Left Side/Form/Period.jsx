function Period({ handleChange }) {
  return (
    <div className="input-field period">
      <input
        type="text"
        name="period start"
        placeholder="Start"
        onChange={handleChange}
        required
      />
      <label htmlFor="period">Period</label>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M5 12l14 0" />
        <path d="M15 16l4 -4" />
        <path d="M15 8l4 4" />
      </svg>

      <input
        type="text"
        name="period end"
        placeholder="End"
        onChange={handleChange}
        required
      />
    </div>
  );
}

export default Period;
