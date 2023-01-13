import React from "react";
import { useState } from "react";
import "./FormInput.css";
const FormInput = (props) => {
  const { label, placeholder, change, errorMessage, text, ...inputProps } =
    props;
  const [focused, setFocused] = useState(false);
  function focusHandler(e) {
    setFocused(true);
  }

  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        {...inputProps}
        type={text}
        placeholder={placeholder}
        onChange={change}
        onBlur={focusHandler}
        focused={focused.toString()}
        onFocus={() => {
          inputProps.name === "ComfirmPassword" && setFocused(true);
        }}
      />
      {text !== "date" && <span>{errorMessage}</span>}
    </div>
  );
};

export default FormInput;
