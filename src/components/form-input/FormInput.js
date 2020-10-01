import React from "react";
import "./formInput.scss";
const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <div className="label">
        {label ? (
          <label
            className={`${otherProps.value.length ? "shrink" : ""} input-label`}
          >
            {label}
          </label>
        ) : null}

        {otherProps.required && <span style={{ color: "red" }}>*</span>}
      </div>
      <input className="form-input" onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default FormInput;
