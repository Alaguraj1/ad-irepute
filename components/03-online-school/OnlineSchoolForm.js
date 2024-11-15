import React, { useState } from "react";

const OnlineSchoolForm = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  return (
    <>
      <div className="rbt-contact-form contact-form-style-1">
        <h4 className="title" style={{ fontWeight: "500" }}>
          Let’s Get
          <br /> On A Discovery Call
        </h4>
        <form id="contact-form">
          <div
            className={`form-group ${focusedInput === "name" ? "focused" : ""}`}
          >
            <input
              name="con_name"
              type="text"
              placeholder="Name"
              onFocus={() => setFocusedInput("name")}
              onBlur={() => setFocusedInput(null)}
            />
            <span className="focus-border"></span>
          </div>
          <div
            className={`form-group ${
              focusedInput === "phone" ? "focused" : ""
            }`}
          >
            <input
              name="con_phone"
              type="text"
              placeholder="Phone"
              onFocus={() => setFocusedInput("phone")}
              onBlur={() => setFocusedInput(null)}
            />
            <span className="focus-border"></span>
          </div>
          <div
            className={`form-group ${
              focusedInput === "email" ? "focused" : ""
            }`}
          >
            <input
              name="con_email"
              placeholder="Email"
              type="email"
              onFocus={() => setFocusedInput("email")}
              onBlur={() => setFocusedInput(null)}
            />
            <span className="focus-border"></span>
          </div>
          <div
            className={`form-group ${
              focusedInput === "intrested" ? "focused" : ""
            }`}
          >
            <select
              name="con_intrested"
              type="select"
              placeholder="intrested in"
              onFocus={() => setFocusedInput("intrested")}
              onBlur={() => setFocusedInput(null)}
            >
              <option value="">Intrested In</option>
              <option value="Web Development">Web Development</option>
              <option value="App Development">App Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphic Designing">Graphic Designing</option>
              <option value="SEO">SEO</option>
              <option value="Other">Other</option>
            </select>

            <span className="focus-border"></span>
          </div>
          <div
            className={`form-group ${
              focusedInput === "message" ? "focused" : ""
            }`}
          >
            <textarea
              onFocus={() => setFocusedInput("message")}
              onBlur={() => setFocusedInput(null)}
              placeholder="Message"
            ></textarea>
            <span className="focus-border"></span>
          </div>
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
    </>
  );
};

export default OnlineSchoolForm;
