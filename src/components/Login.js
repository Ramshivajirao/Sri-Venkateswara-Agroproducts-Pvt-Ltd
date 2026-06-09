import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import logo_of_svpt from "../assests/logo_of_svpt.png";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    const storedUserData = localStorage.getItem("userData");
    if (!storedUserData) {
      alert("No Account found. Please register first.");
      return;
    }
    const parsedUserData = JSON.parse(storedUserData);
    if (
      formData.email === parsedUserData.email &&
      formData.password === parsedUserData.password
    ) {
      alert("Login Successful!");
      navigate("/");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div className="img-1">
          <img src={logo_of_svpt} alt="" />
        </div>
      <form className="login-box-1" onSubmit={handleSubmit}>
        <div className="login-box">
          <h2>Login to Dashboard</h2>
          <div className="input-group">
            <input
              type="email"
              id="email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="email">Enter Your Email</label>
          </div>
          <div className="input-group-2">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              required
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="loginbtn">
            <button type="submit">Login</button>
            <p>
              Don't have an account{" "}
              <span
                className="sign-up"
                onClick={() => navigate("/registration")}
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
