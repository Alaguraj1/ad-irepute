import React, { useState } from "react";
import Handle from "rc-slider/lib/Handles/Handle";
import { headers } from "@/next.config";
import axios from "axios";

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

    axios.post("https://irepute.in/landing-page-lead-form/", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        console.log(res);
        setFormData({
          name: "",
          phone: "",
          email: "",
          interested: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log(err);
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
        <div
          className={`form-group ${focusedInput === "name" ? "focused" : ""}`}
        >
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
        <div
          className={`form-group ${focusedInput === "phone" ? "focused" : ""}`}
        >
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
        <div
          className={`form-group ${focusedInput === "email" ? "focused" : ""}`}
        >
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
        <div
          className={`form-group ${
            focusedInput === "interested" ? "focused" : ""
          }`}
        >
          <select
            name="interested"
            onFocus={() => setFocusedInput("interested")}
            onBlur={() => setFocusedInput(null)}
            onChange={handleChange}
            value={formData.interested}
          >
            <option value="">Interested In</option>
            <option value="Branding">Branding</option>
            <option value="Logo Design">Logo Design</option>
            <option value="Brochure Design">Brochure Design</option>
            <option value="Website Design">Website Design</option>
            <option value="CMS Website Development">CMS Website Development</option>
            <option value="e-Commerce Website Development">e-Commerce Website Development</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="Search Engine Optimization">Search Engine Optimization</option>
            <option value="Social Media Marketing">Social Media Marketing</option>
            <option value="Pay-Per-Click">Pay-Per-Click</option>
            <option value="Amazon Listing Services">Amazon Listing Services</option>
            <option value="Corporate Video">Corporate Video</option>
          </select>
          <span className="focus-border"></span>
        </div>

        {/** Message Textarea */}
        <div
          className={`form-group ${
            focusedInput === "message" ? "focused" : ""
          }`}
        >
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
