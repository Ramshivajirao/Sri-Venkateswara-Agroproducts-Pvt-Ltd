import React from "react";
import "../../styles/Overview.css";
import { CiBellOn,CiMemoPad } from "react-icons/ci";
import { MdOutlineLocalOffer } from "react-icons/md";
import { SiContactlesspayment } from "react-icons/si";
import { FaRupeeSign } from "react-icons/fa";

const Overview = () => {
    
  return (
    <div className="">
      <div className="overview">
        <div className="overview-heading">
          <div className="">
            <h4>Kamal AgroSeeds, Warangal</h4>
            <p>Dealer ID: SVA-DLR-0214. Active since 2019</p>
          </div>
          <div className="overview-heading-btn">
            <button>
              <CiBellOn />
            </button>
            <button>KS</button>
          </div>
        </div>

        <div>
          <div className="orders-box">
            <div className="orders-box-1">
              <h4>Total Order(2026)</h4>
              <p className="live-updates">38</p>
              <p className="color-update">+5 this month</p>
            </div>
            <div className="orders-box-1">
              <h4>Pending Payments</h4>
              <p className="live-updates">42,500</p>
              <p className="color-update">2 Invoices due</p>
            </div>
            <div className="orders-box-1">
              <h4>Active Offers</h4>
              <p className="live-updates">3</p>
              <p className="color-update">Kharif Special</p>
            </div>
          </div>
        </div>

        <div className="tracking-payment-box">
          <div className="tracking-box">
            <h4>
              <CiMemoPad /> Order Tracking
            </h4>
            <div className="tracking-box-1">
              <table>
                <tr>
                  <th>ORDER ID</th>
                  <th>PRODUCTS</th>
                  <th>QTY</th>
                  <th>STATUS</th>
                </tr>
                <tr className="g-3">
                  <td>BLK-OO89</td>
                  <td>Paddy-SVA-R9</td>
                  <td>500KGS</td>
                  <td>
                    <button >In Transport</button>
                  </td>
                </tr>

                <tr>
                  <td>BLK-OO86</td>
                  <td>Maize-Gold-F1</td>
                  <td>200KGS</td>
                  <td>
                    <button>Delivered</button>
                  </td>
                </tr>

                <tr>
                  <td>BLK-OO82</td>
                  <td>Chilli-SVA-O1</td>
                  <td>100KGS</td>
                  <td>
                    <button>Packing</button>
                  </td>
                </tr>

                <tr>
                  <td>BLK-OO72</td>
                  <td>Tomato-SVA-O1</td>
                  <td>50KGS</td>
                  <td>
                    <button>Delivered</button>
                  </td>
                </tr>
              </table>

              <button className="tracking-box-2">Place New Bulk Order</button>
            </div>
          </div>
          <div>
            <div className="payment-box">
              <h4>
                <SiContactlesspayment /> Payments
              </h4>
              <div className="payment-box-1">
                <p>Invoice#inv-2026-41</p>
                <p>
                  <FaRupeeSign />
                  20,000
                </p>
              </div>
              <hr />
              <div className="payment-box-1">
                <p>Invoice#inv-2026-22</p>
                <p>
                  <FaRupeeSign />
                  14,500
                </p>
              </div>
              <hr />
              <div className="payment-box-1">
                <p>Paid this month</p>
                <p>
                  <FaRupeeSign />
                  56,000
                </p>
              </div>
              <hr />
              <div className="payment-box-1">
                <p>Total (2026 YTD)</p>
                <p>
                  <FaRupeeSign />
                  1,82,000
                </p>
              </div>
              <hr />
              <div className="payment-box-1">
                <button>Pay Now</button>
                <button>Download Invoice</button>
              </div>
            </div>
          </div>
        </div>

        <div className="active-offer-box">
          <h4>
            <MdOutlineLocalOffer />
            Active Offers And Schemes
          </h4>
          <div className="offers-box">
            <div>
              <h4>
                Kharif 2026 Bulk Discounts - 12% off on orders of above 300kgs
              </h4>
              <p>
                Valid until 30 june 2026 - Applies to Paddy, Maize, and cotton
                varitey
              </p>
            </div>
            <div>
              <button>Apply Now</button>
            </div>
          </div>
          <div className="offers-box">
            <div>
              <h4>Early Bird Rabi Booking -Free Delivery on Advance Orders</h4>
              <p>
                Valid until 30 june 2026 - Applies to Paddy, Maize, and cotton
                varitey
              </p>
            </div>
            <div>
              <button>View Details</button>
            </div>
          </div>
          <div className="offers-box">
            <div>
              <h4>Loyalty Bonus -Extra 2% on total billing above 2L/year</h4>
              <p>Yor are 18,000 away form this reward</p>
            </div>
            <div>
              <button>Almost There</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
