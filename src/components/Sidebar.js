import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { MdPayments,MdLocalOffer } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";
import logo_of_svpt_001 from '../assests/logo_of_svpt_001.png'


// Centralized navigation data
const navigationData = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊', path: '/dashboard' },
  { id: 'overview', label: 'Overview',icon: '❤️',path:'/overview'},
  { id: 'myorders', label: 'My Orders', icon: '🌱', path: '/myorders' },
  { id: 'bulkorders', label: 'Place Bulk Orders', icon: '📦', path: '/bulkorders' },
  { id: 'payments', label: 'Payments', icon: <MdPayments /> , path: '/payments' },
  { id: 'offer', label: 'Offers & Schemes', icon: <MdLocalOffer />, path: '/offers' },
  { id: 'complaint', label: 'Raise Complaints', icon: <GrCompliance />
, path: '/complaint' },
];

// Component: The Identity
const BrandHeader = () => (
  <div className="brand-header">
    <img src={logo_of_svpt_001} alt='....' width="190px" padding="0px" margin="0px"/>
  </div>
);

// Component: Individual Links
const NavItem = ({ label, icon, isActive, onClick }) => (
  <button 
    className={`nav-item ${isActive ? 'active' : ''}`} 
    onClick={onClick}
  >
    <span className="nav-icon">{icon}</span>
    <span className="nav-label">{label}</span>
  </button>
);

// Component: The Logic Hub
const NavMenu = ({ links, activeId, setActiveId }) => (
  <nav className="nav-menu">
    {links.map((link) => (
      <NavItem 
        key={link.id} // Using unique IDs prevents rendering bugs
        label={link.label}
        icon={link.icon}
        isActive={activeId === link.id}
        onClick={() => setActiveId(link.id)}
      />
    ))}
  </nav>
);

// Component: The User Hub
const SidebarFooter = () => (
  <div className="sidebar-footer">
    <div className="user-profile">
      <span className="user-avatar">👤</span>
      <span className="user-name">DEALER</span>
    </div>
    <button className="logout-btn">Log Out</button>
  </div>
);

// Component: The Wrapper (Main Export)
const Sidebar = () => {
  // Managing active state here keeps the child components "dumb" and focused on UI
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <aside className="sidebar-container">
      <BrandHeader />
      <NavMenu 
        links={navigationData} 
        activeId={activeTab} 
        setActiveId={setActiveTab} 
      />
      <SidebarFooter />
    </aside>
  );
};

export default Sidebar;