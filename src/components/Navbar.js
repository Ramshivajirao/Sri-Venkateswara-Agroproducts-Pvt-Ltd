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
              <li className="nav-item dropdown">
                <Nav.Link
                  className="nav-link dropdown-toggle"
                  href="#ourproducts"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Products
                </Nav.Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="/fieldcrops">
                      Field Crops
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/vegetablesseeds">
                      Vegetable Seeds
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/foragecrops">
                      Forage Crops
                    </NavLink>
                  </li>
                </ul>
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
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success m-2" type="submit">
                Search
              </button>
              <button className="btn btn-outline-success m-2" type="login" onClick={()=> navigate("/login")} >
                Login
              </button>
            </form>
            <span className="icon-cart"><IoIosCart /></span>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
