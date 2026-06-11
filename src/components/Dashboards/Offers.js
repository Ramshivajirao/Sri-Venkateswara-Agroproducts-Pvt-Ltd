import React from "react";
import { MdOutlineLocalOffer } from "react-icons/md";
import '../../styles/Offers.css'

const Offers = () => {
  return (
    <div>
      <div>
        <div className="offer-page">
          <div className="active-offer-box">
            <h3>
              <MdOutlineLocalOffer />
              Active Offers And Schemes
            </h3>
            <p className="offers-note">
              Notes: "Kindly be advised that promotional offers and schemes will
              take effect upon the delivery of your product, after which the
              respective amount will be credited to your account."
            </p>
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
                <h4>
                  Early Bird Rabi Booking -Free Delivery on Advance Orders
                </h4>
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
          <p>Offers are ended</p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
