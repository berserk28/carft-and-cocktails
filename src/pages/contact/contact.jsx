import React from "react";
import { useState } from "react";
import "./contact.css";
import FormInput from "../../components/FormInput/FormInput";
const Contact = () => {
  const [values, setValues] = useState({
    Username: "",
    Email: "",
    date: "",
    Password: "",
    ComfirmPassword: "",
    phone: "",
  });

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
      name: "Email",
      text: "email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      placeholder: "Enter ur Email",
      required: true,
    },
    {
      id: 3,
      name: "phone",
      text: "text",
      errorMessage: "Phone number should be at least 10 numbers !",
      label: "Phone",
      placeholder: "Enter ur phone number",
      pattern: "^[0-9]{10}$",
      required: true,
    },
    {
      id: 4,
      name: "date",
      text: "date",
      label: "date",
    },
    {
      id: 5,
      name: "Password",
      text: "password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character !",
      label: "Password",
      placeholder: "Enter ur Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "ComfirmPassword",
      text: "password",
      label: "Comfirm Password",
      errorMessage: "Passwords don't match!",
      placeholder: "Enter ur Comfirm Password",
      pattern: values.Password,
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
    <div className="form-container">
      <form className="form" onSubmit={submitHandler}>
        <h2>register with us </h2>
        {inputs.map((input) => {
          return <FormInput key={input.id} {...input} change={onChange} />;
        })}
        <button className="form-btn">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
