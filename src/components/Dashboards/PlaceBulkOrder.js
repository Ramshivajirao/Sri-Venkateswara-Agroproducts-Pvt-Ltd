import React from "react";
import "../../styles/PlaceBulkOrder.css";
import { CiBellOn } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";

const PlaceBulkOrder = () => {
  return (
    <div>
      <div className="placebulkorders">
        <div>
          <h4>Orders / Place Bulkorder</h4>
        </div>
        <div className="placebulk-heading">
          <div className="">
            <h4>Place Bulk Orders</h4>
            <p>
              Minimum Order: 100 Kg per product. Delivery within 7-10 working
              days
            </p>
          </div>
          <div className="placebulk-heading-btn">
            <button>
              <CiBellOn />
            </button>
            <button>KS</button>
          </div>
        </div>
        <div className="placebulk-order">
          <h4>Order Items</h4>
          <table>
            <tr>
              <th>PRODUCT</th>
              <th>VARIETY</th>
              <th>QTY(KG)</th>
              <th>PRICE/KG</th>
              <th></th>
            </tr>
            <tr>
              <td>
                <select className="placebulk-sel-opt">
                  <option>Paddy/Rice</option>
                  <option>Maize</option>
                  <option>Chilli</option>
                  <option>Tomato</option>
                </select>
              </td>
              <td>
                <select className="placebulk-sel-opt">
                  <option>Paddy/Rice</option>
                  <option>Maize</option>
                  <option>Chilli</option>
                  <option>Tomato</option>
                </select>
              </td>
              <td>
                <input type="text" className="placebulk-sel-opt"/>
              </td>
              <td>48/Kg</td>
              <td>
                <RiDeleteBin5Line />
              </td>
            </tr>
            <tr>
              <td>
                <select className="placebulk-sel-opt">
                  <option>Paddy/Rice</option>
                  <option>Maize</option>
                  <option>Chilli</option>
                  <option>Tomato</option>
                </select>
              </td>
              <td>
                <select className="placebulk-sel-opt">
                  <option>Paddy/Rice</option>
                  <option>Maize</option>
                  <option>Chilli</option>
                  <option>Tomato</option>
                </select>
              </td>
              <td>
                <input type="text" className="placebulk-sel-opt"/>
              </td>
              <td>48/Kg</td>
              <td>
                <RiDeleteBin5Line />
              </td>
            </tr>
          </table>
          <button className="placebulk-sel-btn"> + Add another products</button>
        </div>
        <div className="placebulk-del-sum">
          <div className="placebulk-delivery">
            <h4>Delivery Details</h4>
            <div>
              <label>Delivery Address</label><br/>
              <input type="text" className="placebulk-input"/><br/>
              <label>Preferred Date</label><br/>
              <input type="date" className="placebulk-input"/><br/>
              <label>Contact Number</label><br/>
              <input type="number"  className="placebulk-input"/><br/>
              <label>Special Instructions</label><br/>
              <input type="text" placeholder="e.g. deliver before 10 AM,&#10;call before dispatch..." className="placebulk-input-01"/><br/>
            </div>
          </div>
          <div className="placebulk-summary">
            <h4>Order Summary</h4>
            <div className="">
              <div className="placebulk-summary-pp">
                <p>Paddy SVA-R9 x 300kg</p>
                <p>14,400</p>
              </div>
              <div className="placebulk-summary-pp">
                <p>Maize Gold-F1 x 500kg</p>
                <p>22,200</p>
              </div>
              <div className="placebulk-summary-pp-gg">
                <p>Kharif Discounts(-12%)</p>
                <p>-1,776</p>
              </div>
              <div className="placebulk-summary-pp">
                <p>GST(5%)</p>
                <p>1,151</p>
              </div>
              <hr />
              <div className="placebulk-summary-pp">
                <p>Total</p>
                <p>31,873</p>
              </div>
            </div>
            <h4>Paymentmode</h4>
            <div>
                <button className="placebulk-btns">Pay later (Credit 30 Days)</button>
                <div>
                    <button className="placebulk-btns">Confirm Order</button>
                    <button className="placebulk-btns">Save Draft</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceBulkOrder;
