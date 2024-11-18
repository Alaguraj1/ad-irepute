import React, { useState } from "react";
import axios from "axios";

const OnlineSchoolForm = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interested: "",
    message: "",
  });

  const [errMsg, setErrMsg] = useState({
    name: "",
    phone: "",
    email: "",
    interested: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous error messages
    setErrMsg({
      name: "",
      phone: "",
      email: "",
      interested: "",
      message: "",
    });

    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("phone", formData.phone);
    formDataObj.append("email", formData.email);
    formDataObj.append("interested", formData.interested);
    formDataObj.append("message", formData.message);
    formDataObj.append("_wpcf7", "16889"); // Form ID
    formDataObj.append("_wpcf7_version", "5.9.8");
    formDataObj.append("_wpcf7_locale", "en_US");
    formDataObj.append("_wpcf7_unit_tag", "wpcf7-f16889-p16890-o1");
    formDataObj.append("_wpcf7_container_post", "16890");
    formDataObj.append("_wpcf7_posted_data_hash", "");

    try {
      const response = await axios({
        method: "post",
        url: "https://irepute.in/wp-json/contact-form-7/v1/contact-forms/16889/feedback",
        data: formDataObj,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.status === "mail_sent") {
        // Success case, form is successfully submitted
        console.log("Form submitted successfully");
        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          interested: "",
          message: "",
        });
        alert("Thank you for your message!");
      } else {
        // Handle validation errors
        const errors = response.data.invalid_fields.reduce((acc, field) => {
          acc[field.field] = field.message;
          return acc;
        }, {});
        setErrMsg(errors); // Set validation error messages for fields
        alert("Please check your form entries and try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting the form. Please try again later.");
    }
  };

  return (
    <div className="rbt-contact-form contact-form-style-1">
      <h4 className="title" style={{ fontWeight: "500" }}>
        Let’s Get
        <br /> On A Discovery Call
      </h4>
      <form id="contact-form" onSubmit={handleSubmit}>
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
          {errMsg.name && (
            <div className="error" style={{ color: "red", fontSize: "12px" }}>
              {errMsg.name}
            </div>
          )}{" "}
          {/* Display error */}
          {/* <span className="focus-border"></span> */}
        </div>

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
          {/* <span className="focus-border"></span> */}
          {errMsg.phone && (
            <div className="error" style={{ color: "red", fontSize: "12px" }}>
              {errMsg.phone}
            </div>
          )}{" "}
          {/* Display error */}
        </div>

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
          {/* <span className="focus-border"></span> */}
          {errMsg.email && (
            <div className="error" style={{ color: "red", fontSize: "12px" }}>
              {errMsg.email}
            </div>
          )}{" "}
          {/* Display error */}
        </div>

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
            <option value="Branding">Branding</option>
            <option value="Logo Design">Logo Design</option>
            <option value="Brochure Design">Brochure Design</option>
            <option value="Website Design">Website Design</option>
            <option value="CMS Website Development">
              CMS Website Development
            </option>
            <option value="e-Commerce Website Development">
              e-Commerce Website Development
            </option>
            <option value="Mobile App Development">
              Mobile App Development
            </option>
            <option value="Search Engine Optimization">
              Search Engine Optimization
            </option>
            <option value="Social Media Marketing">
              Social Media Marketing
            </option>
            <option value="Pay-Per-Click">Pay-Per-Click</option>
            <option value="Amazon Listing Services">
              Amazon Listing Services
            </option>
            <option value="Corporate Video">Corporate Video</option>
          </select>
          {/* <span className="focus-border"></span> */}
          {errMsg.interested && (
            <div className="error" style={{ color: "red", fontSize: "12px" }}>
              {errMsg.interested}
            </div>
          )}{" "}
          {/* Display error */}
        </div>

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
          {/* <span className="focus-border"></span> */}
          {errMsg.message && (
            <div className="error" style={{ color: "red", fontSize: "12px" }}>
              {errMsg.message}
            </div>
          )}{" "}
          {/* Display error */}
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
  );
};

export default OnlineSchoolForm;
