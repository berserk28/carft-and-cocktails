import React from "react";
import "./contact.css";
const contact = () => {
  return (
    <div className="container">
      <div class="form  ">
        <h2>Register With Us</h2>
        <p>Please use the form below to contact us</p>
        <form>
          <div class="form-control">
            <label for="name">Name</label>
            <input type="text " id="name" placeholder="Name" />
          </div>
          <div class="form-control">
            <label for="email">Email</label>
            <input type="email " id="email" placeholder="Email" />
          </div>
          <div class="form-control">
            <label for="phone">Phone Number</label>
            <input type="number " id="Phone" placeholder="Phone" />
          </div>

          <div class="form-control">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default contact;
