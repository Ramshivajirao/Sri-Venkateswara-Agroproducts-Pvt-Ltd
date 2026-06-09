import React from "react";
import "../styles/About.css";
import { PiPlantLight } from "react-icons/pi";
import { TbMicroscopeOff } from "react-icons/tb";
import { FaCheckSquare, FaGlobeAsia } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-us-page" id="about">
      <div className="container">
        <div className="about-us-span">About Us</div>
        <div className="row">
          <div className="col-md-6 col-sm-12 p-2">
            <div className="about-section p-4">
              <h1>A Decade of Seeds, Science & Service</h1>
              <p>
                Founded in 2015 in Telangana, Sri
                Venkateswara Agriproducts Pvt Ltd was born from a single vision:
                put the best seed science in the hands of every Indian farmer.
              </p>
              <div className="about-us-total-cards">
                <div className="about-us-card">
                  <div className="about-us-img">
                    <PiPlantLight />
                  </div>
                  <div className="about-us-text">
                    <h4>Farmer-First</h4>
                    <p>
                      Every variety we develop starts with a real farmer's
                      challenge.
                    </p>
                  </div>
                </div>
                <div className="about-us-card">
                  <div className="about-us-img">
                    <TbMicroscopeOff />
                  </div>
                  <div className="about-us-text">
                    <h4>Science-Backed</h4>
                    <p>
                      Dedicated R&D department testing across multiple
                      agro-climatic zones.
                    </p>
                  </div>
                </div>
                <div className="about-us-card">
                  <div className="about-us-img">
                    <FaCheckSquare />
                  </div>
                  <div className="about-us-text">
                    <h4>Quality Certified</h4>
                    <p>
                      All seeds tested for germination, purity & disease
                      resistance.
                    </p>
                  </div>
                </div>
                <div className="about-us-card">
                  <div className="about-us-img">
                    <FaGlobeAsia />
                  </div>
                  <div className="about-us-text">
                    <h4>Pan-India Reach</h4>
                    <p>
                      Serving farmers across AP, Telangana, Karnataka, and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 pt-5">
            <div className="years-details p-4">
              <div className="years-content">
                <div>
                  <h3>2015</h3>
                </div>
                <div className="about-section">
                  <h5>Company Founded</h5>
                  <p>
                    Established in Telangana with a focus on Kharif seed
                    varieties for local farmers.
                  </p>
                </div>
              </div>
              <hr />
              <div className="years-content">
                <div>
                  <h3>2017</h3>
                </div>
                <div className="about-section">
                  <h5>R&D Department Launched</h5>
                  <p>
                    Built dedicated research facilities for new variety
                    development and field trials.
                  </p>
                </div>
              </div>
              <hr />
              <div className="years-content">
                <div>
                  <h3>2019</h3>
                </div>
                <div className="about-section">
                  <h5>Rabi & Vegetable Range</h5>
                  <p>
                    Expanded product portfolio to cover Rabi crops and vegetable
                    seed categories.
                  </p>
                </div>
              </div>
              <hr />
              <div className="years-content">
                <div>
                  <h3>2021</h3>
                </div>
                <div className="about-section">
                  <h5>10,000+ Farmers Milestone</h5>
                  <p>
                    Crossed 10,000 active farmer partnerships across Southern
                    India.
                  </p>
                </div>
              </div>
              <hr />
              <div className="years-content">
                <div>
                  <h3>2024</h3>
                </div>
                <div className="about-section">
                  <h5>Digital Platform Launch</h5>
                  <p>
                    Launched farmer portal for direct ordering, advisory, and
                    crop tracking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
