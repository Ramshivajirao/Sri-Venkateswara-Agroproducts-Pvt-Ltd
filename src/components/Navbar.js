import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import Logo_svapl from "../assests/Logo_svapl.png";
import { IoIosCart } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Nav } from 'react-bootstrap';

function Navbar() {

  const navigate = useNavigate();

  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo_svapl} alt="Sri Venkateswara Agripoducts pvt ltd" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb--0">
              <li className="nav-item">
                <Nav.Link
                  className="nav-link "
                  href="#home"
                  end
                >
                  Home
                </Nav.Link>
              </li>
              <li className="nav-item">
               <Nav.Link
                  className="nav-link"
                  href="#about"
                >
                  About
                </Nav.Link> 
              </li>
              <li className="nav-item">
                <Nav.Link
                  className="nav-link"
                  href="#ourresearch"
                >
                  Our Research
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link
                  className="nav-link"
                  href="#qualityr&d"
                >
                  Quality & R&D
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link
                  className="nav-link"
                  href="#resources"
                >
                  Resources
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link
                  className="nav-link"
                  href="#contactus"
                >
                  Contact Us
                </Nav.Link>
              </li>
            </ul>
              <button className="btn btn-outline-success m-2" type="login" onClick={()=> navigate("/login")} >
                Login
              </button>
            <span className="icon-cart"><IoIosCart /></span>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
