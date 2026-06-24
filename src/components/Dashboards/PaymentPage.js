import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CiBellOn } from "react-icons/ci";
import "../../styles/PaymentPage.css"; 

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const orderData = location.state;
  const [paymentMethod, setPaymentMethod] = useState("credit_card");

  // Safety Check: If accessed without placing an order
  if (!orderData) {
    return (
      <div className="payment-page-container">
        <div className="payment-empty-state">
          <h2>No Pending Payments</h2>
          <p>You have no active orders waiting for checkout.</p>
          <button 
            className="payment-btn-primary"
            onClick={() => navigate('/DashboardLayout/placebulkorder')} 
          >
            Go Place an Order
          </button>
        </div>
      </div>
    );
  }

  const { validItems, deliveryInfo, subtotal, discount, gst, grandTotal, totalTotalWt } = orderData;

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert(`Processing ₹${Math.round(grandTotal).toLocaleString('en-IN')}... Payment Successful!`);

    const newOrderData = {
      orderId: "BLK-0089",
      datePlaced: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
      estDelivery: "1 July 2026",
      items: validItems || [],
      billing: { subtotal, discount, gst, total: grandTotal },
      delivery: {
        address: deliveryInfo?.address || "Deshrajpally, kamalapur, Warangal",
        transporter: "Shiva Logistics",
        trackingNo: "Shiva-8688051572",
        paymentMode: "Credit"
      },
      currentStatus: "Dispatched", 
      timeline: [
        { status: "Order Placed", time: "Pending Update" }
      ]
    };

    navigate('/DashboardLayout/myorders', { state: { orderData: newOrderData } });
  };

  return (
    <div className="payment-page-container">
      
      {/* Header Section */}
      <div className="payment-header">
        <div className="payment-header-text">
          <h4>Complete Your Order</h4>
          <p>Please select a secure payment method below to finalize your bulk order.</p>
        </div>
        <div className="payment-header-actions">
          <button className="icon-btn"><CiBellOn size={20} /></button>
          <button className="profile-btn">KS</button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="payment-layout">
        
        {/* LEFT SIDE: Payment Form */}
        <div className="payment-left-panel">
          <h3 className="section-title">Select Payment Method</h3>
          
          <div className="payment-method-tabs">
            <label className={`payment-radio-card ${paymentMethod === "credit_card" ? "active" : ""}`}>
              <input type="radio" name="pay_type" onChange={() => setPaymentMethod("credit_card")} checked={paymentMethod === "credit_card"} />
              Card
            </label>
            <label className={`payment-radio-card ${paymentMethod === "upi" ? "active" : ""}`}>
              <input type="radio" name="pay_type" onChange={() => setPaymentMethod("upi")} checked={paymentMethod === "upi"} />
              UPI
            </label>
            <label className={`payment-radio-card ${paymentMethod === "netbanking" ? "active" : ""}`}>
              <input type="radio" name="pay_type" onChange={() => setPaymentMethod("netbanking")} checked={paymentMethod === "netbanking"} />
              Net Banking
            </label>
          </div>

          <form onSubmit={handlePaymentSubmit} className="payment-form">
            {paymentMethod === "credit_card" && (
              <div className="form-group-col">
                <div className="form-field">
                  <label>Card Number</label>
                  <input type="text" placeholder="XXXX XXXX XXXX XXXX" required />
                </div>
                <div className="form-group-row">
                  <div className="form-field">
                    <label>Expiry</label>
                    <input type="text" placeholder="MM/YY" required />
                  </div>
                  <div className="form-field">
                    <label>CVV</label>
                    <input type="password" placeholder="***" required />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === "upi" && (
              <div className="form-field">
                <label>UPI ID</label>
                <input type="text" placeholder="e.g. name@okhdfcbank" required />
              </div>
            )}

            {paymentMethod === "netbanking" && (
              <div className="form-field">
                <label>Select Bank</label>
                <select required>
                  <option value="">-- Choose Bank --</option>
                  <option value="sbi">State Bank of India</option>
                  <option value="hdfc">HDFC Bank</option>
                  <option value="icici">ICICI Bank</option>
                </select>
              </div>
            )}

            <button type="submit" className="payment-submit-btn">
              Pay ₹{Math.round(grandTotal).toLocaleString('en-IN')} Securely
            </button>
          </form>

          {/* Delivery Details Recap */}
          <div className="delivery-recap">
            <h4>Delivery Address</h4>
            <p><strong>Address:</strong> {deliveryInfo?.address || "Not Provided"}</p>
            <p><strong>Date:</strong> {deliveryInfo?.date || "Not Provided"}</p>
            <p><strong>Contact:</strong> {deliveryInfo?.contact || "Not Provided"}</p>
            <p><strong>Note:</strong> {deliveryInfo?.instructions || "None"}</p>
          </div>
        </div>

        {/* RIGHT SIDE: Final Order Summary */}
        <div className="payment-right-panel">
          <div className="invoice-card">
            <h4 className="invoice-title">Invoice ({totalTotalWt} Kg)</h4>
            
            <div className="invoice-items">
              {validItems?.map((item, i) => (
                <div key={i} className="invoice-item-row">
                  <span>{item.product || 'Item'} ({item.bagCount}x)</span>
                </div>
              ))}
            </div>

            <div className="invoice-totals">
              <div className="invoice-row">
                <p>Subtotal</p>
                <p>₹{Math.round(subtotal).toLocaleString('en-IN')}</p>
              </div>
              <div className="invoice-row discount-row">
                <p>Kharif Discounts</p>
                <p>-₹{Math.round(discount).toLocaleString('en-IN')}</p>
              </div>
              <div className="invoice-row">
                <p>GST (5%)</p>
                <p>₹{Math.round(gst).toLocaleString('en-IN')}</p>
              </div>
              <hr className="invoice-divider" />
              <div className="invoice-row grand-total-row">
                <p>Total to Pay</p>
                <p>₹{Math.round(grandTotal).toLocaleString('en-IN')}</p>
              </div>
            </div>
            
            <button className="payment-btn-secondary" onClick={() => navigate(-1)}>
              Back to Edit Order
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PaymentPage;