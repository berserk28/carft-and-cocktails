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
  });

  const inputs = [
    {
      id: 1,
      name: "Username",
      text: "text",
      label: "Username",
      placeholder: "Enter ur Username",
    },
    {
      id: 2,
      name: "Email",
      text: "text",
      label: "Email",
      placeholder: "Enter ur Email",
    },
    {
      id: 3,
      name: "date",
      text: "date",
      label: "date",
      placeholder: "Enter ur date",
    },
    {
      id: 4,
      name: "Password",
      text: "text",
      label: "Password",
      placeholder: "Enter ur Password",
    },
    {
      id: 5,
      name: "ComfirmPassword",
      text: "text",
      label: "ComfirmPassword",
      placeholder: "Enter ur Comfirm Password",
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div className="form-container app-bg">
      <form>
        <h2>register with us </h2>
        {inputs.map((input) => {
          return <FormInput key={input.id} {...input} change={onChange} />;
        })}
      </form>
    </div>
  );
};

export default Contact;
