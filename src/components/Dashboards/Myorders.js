import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../../styles/Myorders.css'; 
import { GrCompliance } from "react-icons/gr";
import { MdOutlineFileDownload } from "react-icons/md";

const Myorders = () => {
  const location = useLocation();
  
  // Grab the data passed from the Payment page, or use a default fallback
  const initialOrderData = location.state?.orderData || {
    orderId: "BLK-0000",
    datePlaced: "Loading...",
    estDelivery: "Loading...",
    items: [],
    billing: { subtotal: 0, discount: 0, gst: 0, total: 0 },
    delivery: { address: "N/A", transporter: "N/A", trackingNo: "N/A", paymentMode: "N/A" },
    currentStatus: "Pending",
    timeline: []
  };

  const [order] = useState(initialOrderData);

  // SIMULATING REAL-TIME TRACKING
  useEffect(() => {
    // In a real app, you would fetch real-time updates here.
    // Example: API call or WebSocket connection to update 'order' state.
    const fetchRealTimeUpdates = setInterval(() => {
      // console.log("Checking for live order updates...");
      // axios.get(`/api/orders/${order.orderId}`).then(...)
    }, 30000); // Poll every 30 seconds

    return () => clearInterval(fetchRealTimeUpdates); // Cleanup on unmount
  }, [order.orderId]);

  return (
    <div className="myorders">
      <div className="myorders-1">
        <div>
          <h4>My Orders/Order #{order.orderId}</h4>
        </div>
        
        <div className="myorders-heading">
          <div>
            <div className="myorders-heading-1">
              <h3>ORDER #{order.orderId}</h3>
              <button>{order.currentStatus}</button>
            </div>
            <div>
              <p>Placed {order.datePlaced}. Est.Delivery {order.estDelivery}</p>
            </div>
          </div>
          <div className="myorders-heading-btn">
            <button><MdOutlineFileDownload /> Invoice</button>
            <button><GrCompliance /> Raise Issue</button>
          </div>
        </div>

        <div className="myorders-myjourney">
          <div>
            {/* --- Order Items Section --- */}
            <div className="myorders-box">
              <h2>Order Items</h2>
              <div className="myorders-box-1">
                <table>
                  <thead>
                    <tr>
                      <th>PRODUCT</th>
                      <th>VARIETY</th>
                      <th>QTY</th>
                      <th>RATE</th>
                      <th>AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.items.map((item, index) => (
                      <tr key={index}>
                        <td>{item.product}</td>
                        <td>{item.variety}</td>
                        <td>{item.qty}</td>
                        <td>{item.rate}/Kg</td>
                        <td>{(item.amount || 0).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                <div className="myorder-orderitem-box">
                  <div className="myorder-orderitem-min-box">
                    <p>Subtotal</p>
                    <p>{order.billing.subtotal.toLocaleString()}</p>
                  </div>
                  <div className="myorder-orderitem-min-box">
                    <p>Kharif Discounts(-12%)</p>
                    <p>-{order.billing.discount.toLocaleString()}</p>
                  </div>
                  <div className="myorder-orderitem-min-box">
                    <p>GST(5%)</p>
                    <p>{order.billing.gst.toLocaleString()}</p>
                  </div>
                  <hr />
                  <div className="myorder-orderitem-min-box">
                    <p>Total</p>
                    <p>{order.billing.total.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Delivery Info Section --- */}
            <div className="delivery-info">
              <h2>Delivery Info</h2>
              <div>
                <div className="delivery-info-1">
                  <p>Delivery address</p>
                  <p>{order.delivery.address}</p>
                </div>
                <hr />
                <div className="delivery-info-1">
                  <p>Transporter</p>
                  <p>{order.delivery.transporter}</p>
                </div>
                <hr />
                <div className="delivery-info-1">
                  <p>Tracking no:</p>
                  <p>{order.delivery.trackingNo}</p>
                </div>
                <hr />
                <div className="delivery-info-1">
                  <p>Expected Delivery</p>
                  <p>{order.estDelivery}</p>
                </div>
                <hr />
                <div className="delivery-info-1">
                  <p>Payment mode</p>
                  <p>{order.delivery.paymentMode}</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- Order Journey Timeline --- */}
          <div>
            <div className="order-journey">
              <h2>Order Journey</h2>
              <div className="order-journey-1">
                {order.timeline.map((step, index) => (
                  <div key={index} className="timeline-step">
                    <h4>{step.status}</h4>
                    <p>{step.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Myorders;