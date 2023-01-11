import React from "react";

const FormInput = (props) => {
  const { label, placeholder, change, ...inputProps } = props;

  return (
    <div>
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
