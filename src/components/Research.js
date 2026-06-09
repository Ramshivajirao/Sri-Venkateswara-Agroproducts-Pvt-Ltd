import React from "react";
import "../styles/Research.css";
import { TbMicroscopeFilled } from "react-icons/tb";
import { FaTemperatureHigh, FaShieldVirus } from "react-icons/fa";
import { LuTriangleRight } from "react-icons/lu";

const Research = () => {
  return (
    <div className="research">
      <div className="container">
        <div className="row">
          <div className="research col-md-6 col-sm-12 p-2">
            <div className="research-title">
              <h4>Research & Development</h4>
            </div>
            <div>
              <h1>Where Tomorrow's Crops Are Born</h1>
              <p>
                Our in-house R&D department works year-round to develop
                varieties that meet modern challenges — climate variability,
                market demand, and soil health.
              </p>
            </div>
            <div>
              <div className="research-boxes">
                <div className="research-boxes-1">
                  <TbMicroscopeFilled />
                </div>
                <div className="research-boxes-2">
                  <h4>Hybrid Breeding Programme</h4>
                  <p className="research-boxes-para">
                    Systematic crossing of elite parent lines to develop F1
                    hybrids with heterosis advantage in yield and uniformity.
                  </p>
                  <p className="research-boxes-box">Active</p>
                </div>
              </div>
              <div className="research-boxes">
                <div className="research-boxes-1">
                  <FaTemperatureHigh />
                </div>
                <div className="research-boxes-2">
                  <h4>Stress Tolerance Research</h4>
                  <p className="research-boxes-para">
                    Screening germplasm for drought, heat and salinity tolerance
                    — critical for Andhra Pradesh's variable rainfall zones.
                  </p>
                  <p className="research-boxes-box">3 Ongoing Trials</p>
                </div>
              </div>
              <div className="research-boxes">
                <div className="research-boxes-1">
                  <FaShieldVirus />
                </div>
                <div className="research-boxes-2">
                  <div>
                    <h4>Disease Resistance Screening</h4>
                    <p className="research-boxes-para">
                      Inoculation trials for major pathogens including LLS,
                      blast, blight and viral diseases common in South India.
                    </p>
                    <p className="research-boxes-box">Multi-season</p>
                  </div>
                </div>
              </div>
              <div className="research-boxes">
                <div className="research-boxes-1">
                  <LuTriangleRight />
                </div>
                <div className="research-boxes-2">
                  <h4>Agromorphological Evaluation</h4>
                  <p className="research-boxes-para">
                    Detailed DUS (Distinctness, Uniformity, Stability) trials
                    for variety registration with PPV&FRA.
                  </p>
                  <p className="research-boxes-box">PPV&FRA Pipeline</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 p-2">
            <div className="research-verty">
              <h4>Varieties in Pipeline</h4>
              <h1>18</h1>
              <p>
                New varieties currently in advanced trial stage across Kharif,
                Rabi, and vegetable categories for 2025 release.
              </p>
            </div>
            <div className="research-verty-2">
              <div className="research-verty-1">
                <h4>5+</h4>
                <p>Research Scientists</p>
              </div>
              <div className="research-verty-1">
                <h4>3</h4>
                <p>Trial Locations</p>
              </div>
              <div className="research-verty-1">
                <h4>2 yrs</h4>
                <p>Avg Trial Duration</p>
              </div>
              <div className="research-verty-1">
                <h4>100%</h4>
                <p>Lab Tested</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
