import React from "react";
import '../../styles/Myorders.css';
import { GrCompliance } from "react-icons/gr";
import { MdOutlineFileDownload } from "react-icons/md";

const Myorders = () => {
  return (
    <div className="myorders">
      <div className="myorders-1">
        <div>
          <h4>My Orders/Order #BLK-0089</h4>
        </div>
        <div className="myorders-heading">
          <div>
            <div className="myorders-heading-1">
              <h3>ORDER #BLK-0089</h3>
              <button>In Transport</button>
            </div>
            <div className="">
              <p>Placed 1 June 2026. Est.Delivery 8 June 2026</p>
            </div>
          </div>
          <div className="myorders-heading-btn">
            <button><MdOutlineFileDownload /> Invoice</button>
            <button><GrCompliance /> raise Issue</button>
          </div>
        </div>

        <div className="myorders-myjourney">
          <div className="">
            <div className="myorders-box">
              <h2>Order Items</h2>
              <div className="myorders-box-1">
                <table>
                  <tr>
                    <th>PRODUCT</th>
                    <th>VARIETY</th>
                    <th>QTY</th>
                    <th>RATE</th>
                    <th>AMOUNT</th>
                  </tr>
                  <tr>
                    <td>Paddy</td>
                    <td>SVA-R9</td>
                    <td>500KGS</td>
                    <td>48/Kg</td>
                    <td>24,000</td>
                  </tr>
                  <tr>
                    <td>Maize</td>
                    <td>Gold-F1</td>
                    <td>200KGS</td>
                    <td>54/kg</td>
                    <td>10,800</td>
                  </tr>
                </table>
                <div className="myorder-orderitem-box">
                  <div className="myorder-orderitem-min-box">
                    <p>Subtotal</p>
                    <p>34,800</p>
                  </div>
                  <div className="myorder-orderitem-min-box">
                    <p>Kharif Discounts(-12%)</p>
                    <p>-1,776</p>
                  </div>
                  <div className="myorder-orderitem-min-box">
                    <p>GST(5%)</p>
                    <p>1,151</p>
                  </div>
                  <hr />
                  <div className="myorder-orderitem-min-box">
                    <p>Total</p>
                    <p>31,873</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="delivery-info">
              <h2>Delivery Info</h2>
              <div >
                <div className="delivery-info-1">
                  <p>Delivery address</p>
                  <p> Deshrajpally, kamalapur, Warangal</p>
                </div>
                <hr />
                <div className="delivery-info-1">
                  <p>Transporter</p>
                  <p>Shiva Logistics</p>
                </div>
                <hr />
                <div className="delivery-info-1">
                  <p>Tracking no:</p>
                  <p>Shiva-868805</p>
                </div>
                <hr />
                <div className="delivery-info-1">
                  <p>Expected Delivery</p>
                  <p> 8 June 2026</p>
                </div>
                <hr />
                <div className="delivery-info-1">
                  <p>Paymentmode Credit</p>
                  <p>--due 1 July 2026</p>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="order-journey">
              <h2>Order Journey</h2>
              <div className="order-journey-1">
                <div className="">
                  <h4>Order Placed</h4>
                  <p>1 June 2026, 10:42</p>
                </div>
                <div>
                  <h4>Orderconfirmed by SVA</h4>
                  <p>1 June 2026, 13:42. shiva</p>
                </div>
                <div>
                  <h4>Packed & Quality Checked</h4>
                  <p>3 June 2026, 11:02. WH-01</p>
                </div>
                <div>
                  <h4>Dispctched-In Transport</h4>
                  <p>4 June 2026, Shiva Logistics</p>
                </div>
                <div>
                  <h4>Out for Delivery</h4>
                  <p>Expected 8 June 2026</p>
                </div>
                <div>
                  <h4>Delived</h4>
                  <p>pending</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myorders;
