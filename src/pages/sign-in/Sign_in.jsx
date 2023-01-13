import React from "react";
import { useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import image from "../../images/glass.png";
import "./Sign_in.css";
const Sign_in = () => {
  const [values, setValues] = useState({ Username: "", Password: "" });
  const inputs = [
    {
      id: 1,
      name: "Username",
      text: "text",
      label: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character !",
      placeholder: "Enter ur Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "Password",
      text: "password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character !",
      label: "Password",
      placeholder: "Enter ur Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="Sign-in__page-container">
      <div className="Sign-in_page">
        <img src={image} alt="image" />
        <form className="Sign-in__page-form">
          <h2>Log in </h2>
          {inputs.map((input) => {
            return <FormInput key={input.id} {...input} />;
          })}
          <button className="form-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Sign_in;
