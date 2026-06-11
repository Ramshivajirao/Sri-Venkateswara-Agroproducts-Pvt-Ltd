import React, { useState } from "react";
import "../styles/Registration.css";
import logo_of_svpt from "../assests/logo_of_svpt.png";
import { useNavigate } from "react-router-dom";
const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    mandal: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    alert(
      "Form Submitted Sucessfully",
    );
    setFormData({
      name: "",
      email: "",
      password: "",
      phone: "",
      mandal: "",
      city: "",
      pincode: "",
    });
    navigate("/");
  };

  return (
    <div>
      <div>
        <div className="row">
          <div className="registration-2 col-md-6 p-2">
            <img src={logo_of_svpt} alt="............" />
          </div>
          <div className="registration-3 col-md-6 p-4">
            <form onSubmit={handleSubmit}>
              <input
                className=""
                type="text"
                placeholder="Enter Your Name: "
                name="name"
                onChange={handleChange}
                value={formData.name}
                required
              />
              <input
                className=""
                type="email"
                placeholder="Enter Your Email: "
                name="email"
                onChange={handleChange}
                value={formData.email}
                required
              />
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                className=""
                onChange={handleChange}
                value={formData.password}
                required
              />
              <input
                className=""
                type="number"
                placeholder="Enter Your Phone Number: "
                name="phone"
                onChange={handleChange}
                value={formData.phone}
                required
              />
              <input
                className=""
                type="text"
                placeholder="Enter Your Mandal"
                name="mandal"
                onChange={handleChange}
                value={formData.mandal}
              />
              <input
                className=""
                type="text"
                placeholder="Enter Your city/District: "
                name="city"
                onChange={handleChange}
                value={formData.city}
              />
              <input
                className=""
                type="number"
                placeholder="Enter Your Pincode"
                name="pincode"
                onChange={handleChange}
                value={formData.pincode}
              />
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
