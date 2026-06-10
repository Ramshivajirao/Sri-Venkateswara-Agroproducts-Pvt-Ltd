import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdPayments, MdLocalOffer } from "react-icons/md";
import { GrCompliance, GrOverview } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import { ImList2 } from "react-icons/im";
import { FaBoxOpen, FaBars, FaTimes } from "react-icons/fa";
import "../styles/Sidebar.css";
import logo_of_svpt_001 from "../assests/logo_of_svpt_001.png";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-full-body">
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <div className={`sidebar-container ${isOpen ? "active" : ""}`}>
        <div className="brand-header">
          <img
            src={logo_of_svpt_001}
            alt="Logo"
            width="190"
          />
        </div>

        <ul className="side-items">
          <li>
            <NavLink to="/DashboardLayout/dashboard" end>
              <span><RxDashboard /></span>
              <label>Dashboard</label>
            </NavLink>
          </li>
          <li>
            <NavLink to="/DashboardLayout/overview" end>
              <span><GrOverview /></span>
              <label>Overview</label>
            </NavLink>
          </li>
          <li>
            <NavLink to="/DashboardLayout/myorders" end>
              <span><ImList2 /></span>
              <label>My Orders</label>
            </NavLink>
          </li>
          <li>
            <NavLink to="/DashboardLayout/plackebulkorders" end>
              <span><FaBoxOpen /></span>
              <label>Place Bulk Orders</label>
            </NavLink>
          </li>
          <li>
            <NavLink to="/DashboardLayout/payments" end>
              <span><MdPayments /></span>
              <label>Payments</label>
            </NavLink>
          </li>
          <li>
            <NavLink to="/DashboardLayout/offers&schemes" end>
              <span><MdLocalOffer /></span>
              <label>Offers & Schemes</label>
            </NavLink>
          </li>
          <li>
            <NavLink to="/DashboardLayout/raisecomplains" end>
              <span><GrCompliance /></span>
              <label>Raise Complaints</label>
            </NavLink>
          </li>
        </ul>

        <div className="sidebar-footer">
          <div className="user-profile">
            <span className="user-avatar">👤</span>
            <span className="user-name">DEALER</span>
          </div>
          <button className="logout-btn" onClick={() => navigate("/")}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;