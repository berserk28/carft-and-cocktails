import React from "react";
import "./contact.css";
const contact = () => {
  return (
    <div>
      <div class="contact-form bg-green p1">
        <h2 class="l-medium">Contact Us</h2>
        <p>Please use the form below to contact us</p>
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text " id="name" placeholder="Name" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email " id="email" placeholder="Email" />
          </div>
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="number " id="phone" placeholder="Phone" />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="50"
              rows="2"
              placeholder="Message"
            ></textarea>
          </div>
          <div class="form-group">
            <input
              type="submit"
              class="btn btn-dark"
              value="Send"
              class="bg-dark"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default contact;
