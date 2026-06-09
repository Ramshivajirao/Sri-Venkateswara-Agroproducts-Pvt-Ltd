import React from "react";
import '../styles/ContactUs.css'

const ContactUs = () => {
  return (
    <div className="contact-us" id="contactus">
      <div className="container">
        <div className="contact-us-1">
          <h4>Get Started</h4>
          <h1>Ready to Grow Smarter?</h1>
          <p>
            Talk to our agronomy team about the right seed variety for your
            land, season, and goals.
          </p>
          <button className="contact-us-btn1">📞 Call Us Now</button>
          <button className="contact-us-btn2">📦 Order Seeds Online</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
