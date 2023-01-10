import React from "react";
import { useState } from "react";
import "./contact.css";
import FormInput from "../../components/FormInput/FormInput";
const Contact = () => {
  const [values, setValues] = useState({});
  const Inputs = [
    {
      id: 1,
      name: "Username",
      text: "text",
      label: "Username",
      PlaceHolder: "Enter ur Username",
    },
    {
      id: 2,
      name: "Email",
      text: "text",
      label: "Email",
      PlaceHolder: "Enter ur Email",
    },
    {
      id: 3,
      name: "date",
      text: "date",
      label: "date",
      PlaceHolder: "Enter ur date",
    },
    {
      id: 4,
      name: "Password",
      text: "text",
      label: "Password",
      PlaceHolder: "Enter ur Password",
    },
    {
      id: 5,
      name: "Comfirm Password",
      text: "text",
      label: "Comfirm Password",
      PlaceHolder: "Enter ur Comfirm Password",
    },
  ];
  return (
    <div className="form-container app-bg">
      <form className="form">
        <h2>register with us </h2>
        {Inputs.map((item) => {
          return <FormInput key={item.id} {...item} />;
        })}
      </form>
    </div>
  );
};

export default Contact;
