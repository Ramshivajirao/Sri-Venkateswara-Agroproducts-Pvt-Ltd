import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-body">
          <div>
            <h3>Sri Venkateswara Agriproducts Pvt Ltd</h3>
            <p>
              Dedicated to empowering Indian farmers with research-backed seed
              technology since 2015.
            </p>
            <p>Est. 2015 · Telangana</p>
          </div>
          <div style={{ display: "grid" }}>
            <h5>COMPANY</h5>
            <a href="/">Aboutus</a>
            <a href="/">Our Story</a>
            <a href="/">Teams</a>
            <a href="/">Careers</a>
            <a href="/">News</a>
          </div>
          <div style={{ display: "grid" }}>
            <h5>PRODUCTS</h5>
            <a href="/">Kharif Seeds</a>
            <a href="/">Rabi Seeds</a>
            <a href="/">vegetables Seeds</a>
            <a href="/">New Varieties</a>
            <a href="/">Product Catalog</a>
          </div>
          <div style={{ display: "grid" }}>
            <h5>SUPPORT</h5>
            <a href="/">Dealer Locator</a>
            <a href="/">Crop Advisory</a>
            <a href="/">Helpline</a>
            <a href="/">Quality Policy</a>
            <a href="/">Contact Us</a>
          </div>
        </div>
        <hr/>
        <div className="footer-credits">
          <div>
            © 2024 Sri Venkateswara Agriproducts Pvt Ltd. All rights reserved.
          </div>
          <div className="footer-credits-1">
            <p>Privacy Policy</p> 
            <p>Terms of Use</p>
            <p>Sitemap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
