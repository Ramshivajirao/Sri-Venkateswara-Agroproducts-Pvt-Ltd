import React from "react";
import "../styles/Resources.css";

const Resources = () => {
  return (
    <div className="resources" id="resources">
      <div className="container">
        <div className="resources-body">
          <h4>Resources</h4>
          <h1>Knowledge That Grows With You</h1>
          <p>
            From sowing guides to disease identification — everything a farmer
            needs is right here.
          </p>
        </div>
      </div>
      <div>
        <div className="resources-box">
          <div className="resources-boxes">
            <span>📖</span>
            <p>Crop Guides</p>
            <h5>Season-wise Cultivation Manuals</h5>
            <p>
              Detailed step-by-step guides for each crop — from land preparation
              and seed rate to irrigation scheduling and harvest timing.
            </p>
            <p>Browse Guides →</p>
          </div>
          <div className="resources-boxes">
            <span>🐛</span>
            <p>Pest & Disease</p>
            <h5>IPM & Disease Management</h5>
            <p>
              Identify and manage major pests and diseases with our photo-based
              diagnostic guides and recommended management schedules.
            </p>
            <p>View Library →</p>
          </div>
          <div className="resources-boxes">
            <span>🌧️</span>
            <p>Agro-Advisory</p>
            <h5>Weather & Crop Advisory</h5>
            <p>
              Seasonal forecasts and agronomic advisories tailored to AP &
              Telangana districts, updated fortnightly by our agronomy team.
            </p>
            <p>Read Advisory →</p>
          </div>
          <div className="resources-boxes">
            <span>🎓</span>
            <p>Training</p>
            <h5>Farmer Training Camps</h5>
            <p>
              Regular on-field and village-level training programmes covering
              new variety demos, soil health, and precision agriculture.
            </p>
            <p>Upcoming Events →</p>
          </div>
          <div className="resources-boxes">
            <span>📹</span>
            <p>Video Library</p>
            <h5>Telugu & Hindi Video Guides</h5>
            <p>
              Watch crop management and seed treatment videos in Telugu and
              Hindi, made specifically for South Indian farming conditions.
            </p>
            <p>Watch Videos →</p>
          </div>
          <div className="resources-boxes">
            <span>📞</span>
            <p>Support</p>
            <h5>Agronomist Helpline</h5>
            <p>
              RCall our dedicated agronomy support line for real-time crop
              troubleshooting. Available Mon–Sat, 9AM–6PM in Telugu, Hindi, and
              English.
            </p>
            <p>Contact Helpline →</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
