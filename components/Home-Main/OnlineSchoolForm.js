import React, { useState } from "react";
import Handle from "rc-slider/lib/Handles/Handle";

const OnlineSchoolForm = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interested: "", // Fixed typo from 'intrested' to 'interested'
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      name: "",
      phone: "",
      email: "",
      interested: "",
      message: "",
    });
  };

  return (
    <div className="rbt-contact-form contact-form-style-1">
      <h4 className="title" style={{ fontWeight: "500" }}>
        Let’s Get
        <br /> On A Discovery Call
      </h4>
      <form id="contact-form" onSubmit={handleSubmit}>
        {/** Name Input */}
        <div className={`form-group ${focusedInput === "name" ? "focused" : ""}`}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            onFocus={() => setFocusedInput("name")}
            onBlur={() => setFocusedInput(null)}
            onChange={handleChange}
            value={formData.name}
          />
          <span className="focus-border"></span>
        </div>

        {/** Phone Input */}
        <div className={`form-group ${focusedInput === "phone" ? "focused" : ""}`}>
          <input
            name="phone"
            type="text"
            placeholder="Phone"
            onFocus={() => setFocusedInput("phone")}
            onBlur={() => setFocusedInput(null)}
            onChange={handleChange}
            value={formData.phone}
          />
          <span className="focus-border"></span>
        </div>

        {/** Email Input */}
        <div className={`form-group ${focusedInput === "email" ? "focused" : ""}`}>
          <input
            name="email"
            placeholder="Email"
            type="email"
            onFocus={() => setFocusedInput("email")}
            onBlur={() => setFocusedInput(null)}
            onChange={handleChange}
            value={formData.email}
          />
          <span className="focus-border"></span>
        </div>

        {/** Interested Dropdown */}
        <div className={`form-group ${focusedInput === "interested" ? "focused" : ""}`}>
          <select
            name="interested"
            onFocus={() => setFocusedInput("interested")}
            onBlur={() => setFocusedInput(null)}
            onChange={handleChange}
            value={formData.interested}
          >
            <option value="">Interested In</option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Graphic Designing">Graphic Designing</option>
            <option value="SEO">SEO</option>
            <option value="Other">Other</option>
          </select>
          <span className="focus-border"></span>
        </div>

        {/** Message Textarea */}
        <div className={`form-group ${focusedInput === "message" ? "focused" : ""}`}>
          <textarea
            name="message"
            onFocus={() => setFocusedInput("message")}
            onBlur={() => setFocusedInput(null)}
            placeholder="Message"
            onChange={handleChange}
            value={formData.message}
          ></textarea>
          <span className="focus-border"></span>
        </div>

        {/** Submit Button */}
        <div className="form-submit-group">
          <button
            type="submit"
            className="rbt-btn btn-md btn-gradient hover-icon-reverse radius-round w-100"
          >
            <span className="icon-reverse-wrapper">
              <span className="btn-text">Submit</span>
              <span className="btn-icon">
                <i className="feather-arrow-right"></i>
              </span>
              <span className="btn-icon">
                <i className="feather-arrow-right"></i>
              </span>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default OnlineSchoolForm;
