import React from "react";
import { NavLink } from "react-router-dom";
import { MdPayments, MdLocalOffer } from "react-icons/md";
import { GrCompliance, GrOverview } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import { ImList2 } from "react-icons/im";
import { FaBoxOpen } from "react-icons/fa";
import "../styles/Sidebar.css";
import logo_of_svpt_001 from "../assests/logo_of_svpt_001.png";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="sidebar-container">
        <div className="brand-header">
          <img
            src={logo_of_svpt_001}
            alt="Logo"
            width="190"
            style={{ padding: "0px", margin: "0px" }}
          />
        </div>
        <div className="">
          <ul className="side-items">
            <li>
              <NavLink
                to="/DashboardLayout/dashboard"
                end
                className="side-items-1"
              >
                <span>
                  <RxDashboard />
                </span>
                <label>Dashboard</label>
              </NavLink>
            </li>
            <li>
              <NavLink to="/DashboardLayout/overview" end className="">
                <span>
                  <GrOverview />
                </span>
                <label>Overview</label>
              </NavLink>
            </li>
            <li>
              <NavLink to="/DashboardLayout/myorders" end className="">
                <span>
                  <ImList2 />
                </span>
                <label>My Orders</label>
              </NavLink>
            </li>
            <li>
              <NavLink to="/DashboardLayout/plackebulkorders" end className="">
                <span>
                  <FaBoxOpen />
                </span>
                <label>Place Bulk Orders</label>
              </NavLink>
            </li>
            <li>
              <NavLink to="/DashboardLayout/payments" end className="">
                <span>
                  <MdPayments />
                </span>
                <label> Payments</label>
              </NavLink>
            </li>
            <li>
              <NavLink to="/DashboardLayout/offers&schemes" end className="">
                <span>
                  <MdLocalOffer />
                </span>
                <label> Offers & Schemes</label>
              </NavLink>
            </li>
            <li>
              <NavLink to="/DashboardLayout/raisecomplains" end className="">
                <span>
                  <GrCompliance />
                </span>
                <label> Raise Complaints</label>
              </NavLink>
            </li>
          </ul>
        </div>
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
