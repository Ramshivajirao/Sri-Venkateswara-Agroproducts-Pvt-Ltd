import React, { useState, useEffect } from "react";
import "../../styles/Overview.css";
import { CiBellOn, CiMemoPad } from "react-icons/ci";
import { MdLightbulbOutline } from "react-icons/md";
import { SiContactlesspayment } from "react-icons/si";
import { FaRupeeSign } from "react-icons/fa";

const defaultOrders = [
  { id: "BLK-OO89", product: "Paddy-SVA-R9", qty: "500KGS", status: "In Transport" },
  { id: "BLK-OO86", product: "Maize-Gold-F1", qty: "200KGS", status: "Delivered" },
];
   
const Overview = () => {
  // 1. Set up state for our orders
  const [ordersList, setOrdersList] = useState([]);

  // 2. Fetch from the "Mock Database" (Local Storage) when the page loads
  useEffect(() => {
    const savedOrders = localStorage.getItem("myDealerOrders");
    
    if (savedOrders) {
      // If we found orders saved by the "My Orders" page, use them!
      setOrdersList(JSON.parse(savedOrders));
    } else {
      // If nothing is saved yet, use our default list and save it for the first time
      setOrdersList(defaultOrders);
      localStorage.setItem("myDealerOrders", JSON.stringify(defaultOrders));
    }
  }, []); // <-- REMOVED defaultOrders FROM HERE

  // --- Dynamic Calculations based on your live orders ---
  
  // Total orders is now based on the actual length of your array (+ some historical data if you want)
  const totalOrdersCount = ordersList.length + 34; // 34 historical + however many are live
  
  // Look through the orders to see how many are "Delivered" to calculate loyalty
  const deliveredOrders = ordersList.filter(order => order.status === "Delivered").length;
  const loyaltyBonusAway = 18000 - (deliveredOrders * 500); // Just a mock calculation for the UI
  
  // Mock Invoices
  const invoices = [
    { id: "inv-2026-41", amount: 20000, status: "Pending" },
    { id: "inv-2026-22", amount: 14500, status: "Pending" },
  ];
  const pendingPaymentsTotal = invoices.reduce((sum, inv) => sum + inv.amount, 0) + 8000; 

  return (
    <div className="overview-container">
      <div className="overview">
        
        {/* Header Section */}
        <div className="overview-header">
          <div className="header-info">
            <h2>Kamal AgroSeeds, Warangal</h2>
            <p>Dealer ID: SVA-DLR-0214. Active since 2019</p>
          </div>
          <div className="header-actions">
            <button className="icon-btn"><CiBellOn size={20} /></button>
            <button className="profile-btn">KS</button>
          </div>
        </div>

        {/* Top Summary Cards */}
        <div className="summary-cards">
          <div className="card">
            <h4>Total Order(2026)</h4>
            <p className="card-value">{totalOrdersCount}</p>
            <p className="text-green">+{ordersList.length} this month</p>
          </div>
          <div className="card">
            <h4>Pending Payments</h4>
            <p className="card-value"><FaRupeeSign size={18}/> {pendingPaymentsTotal.toLocaleString('en-IN')}</p>
            <p className="text-green">{invoices.length} Invoices due</p>
          </div>
          <div className="card">
            <h4>Active Offers</h4>
            <p className="card-value">3</p>
            <p className="text-green">Kharif Special</p>
          </div>
        </div>

        {/* Actionable Insights */}
        <div className="insights-box">
          <h3 className="insights-title">
            <MdLightbulbOutline /> Smart Actions & Reorder Insights
          </h3>
          <div className="insights-grid">
            <div className="insight-item alert">
              <strong>Stock Alert:</strong> Your Cotton variety stock hasn't been renewed. 
              <span className="insight-action">Order Cotton Now</span>
            </div>
            <div className="insight-item discount">
              <strong>Scheme Benefit:</strong> You are currently <strong><FaRupeeSign size={11}/>{loyaltyBonusAway.toLocaleString('en-IN')} away</strong> from achieving the 2% Loyalty Bonus!
            </div>
          </div>
        </div>

        {/* Main Dashboard Panels */}
        <div className="dashboard-panels">
          
          {/* Order Tracking Panel (NOW DYNAMIC) */}
          <div className="panel order-tracking-panel">
            <h3 className="panel-title">
              <CiMemoPad /> Order Tracking ({ordersList.length} Active)
            </h3>
            <div className="table-container">
              <table className="tracking-table">
                <thead>
                  <tr>
                    <th>ORDER ID</th>
                    <th>PRODUCTS</th>
                    <th>QTY</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Loop through the dynamically loaded orders */}
                  {ordersList.map((order, index) => (
                    <tr key={index}>
                      <td>{order.id}</td>
                      <td>{order.product}</td>
                      <td>{order.qty}</td>
                      <td>
                        <span className={`status-badge ${order.status?.toLowerCase().replace(" ", "-")}`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                  
                  {ordersList.length === 0 && (
                    <tr>
                      <td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>No active orders found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <button className="btn-outline-wide">Place New Bulk Order</button>
          </div>

          {/* Payments Panel */}
          <div className="panel payments-panel">
            <h3 className="panel-title"><SiContactlesspayment /> Payments</h3>
            <div className="payment-list">
              {invoices.map((inv) => (
                <div className="payment-row" key={inv.id}>
                  <span>Invoice#{inv.id}</span>
                  <span><FaRupeeSign className="rupee-icon"/> {inv.amount.toLocaleString('en-IN')}</span>
                </div>
              ))}
              <div className="payment-row total-row">
                <span>Total (2026 YTD)</span>
                <span><FaRupeeSign className="rupee-icon"/> 1,82,000</span>
              </div>
            </div>
            <div className="payment-actions">
              <button className="btn-light">Pay Now</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Overview;