import { placeholderMap } from "../Form/placeholderValues";

function InputField({ name, label, handleChange }) {
  return (
    <div className="input-field">
      <input
        type="text"
        name={name}
        placeholder={placeholderMap[name]}
        onChange={handleChange}
        required
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

export default InputField;
