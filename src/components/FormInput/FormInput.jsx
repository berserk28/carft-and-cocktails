import React from "react";
import "./FormInput.css";
const FormInput = (props) => {
  const { label, placeholder, change, ...inputProps } = props;

  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        {...inputProps}
        type="text"
        placeholder={placeholder}
        onChange={change}
      />
    </div>
  );
};

export default FormInput;
