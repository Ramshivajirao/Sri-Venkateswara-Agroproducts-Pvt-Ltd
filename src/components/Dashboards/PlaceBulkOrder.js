import React, { useState } from "react";
import "../../styles/PlaceBulkOrder.css";
import { CiBellOn } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const cropPriceData = {
  "Paddy / Rice": {
    "SVA-R9 Hybrid": { 1: 110, 5: 520, 10: 1000, 20: 1900 },
    "SVA-Super Gold": { 1: 120, 5: 570, 10: 1100, 20: 2100 },
    "SVA-Kalyani 5": { 1: 95, 5: 450, 10: 850, 20: 1650 },
    "SVA-Sona Prime": { 1: 105, 5: 500, 10: 950, 20: 1800 },
    "SVA-Basmati Tech": { 1: 140, 5: 660, 10: 1280, 20: 2450 },
  },
  "Maize / Corn": {
    "SVA-Gold F1": { 1: 110, 5: 520, 10: 1000, 20: 1900 },
    "SVA-Sweet Max": { 1: 120, 5: 570, 10: 1100, 20: 2100 },
    "SVA-Champion 99": { 1: 95, 5: 450, 10: 850, 20: 1650 },
    "SVA-Tejas Yellow": { 1: 105, 5: 500, 10: 950, 20: 1800 },
    "SVA-Corn Pro": { 1: 140, 5: 660, 10: 1280, 20: 2450 },
  },
  "Wheat": {
    "SVA-Shakti 303": { 1: 75, 5: 355, 10: 680, 20: 1300 },
    "SVA-Lokwan Plus": { 1: 80, 5: 380, 10: 720, 20: 1400 },
    "SVA-Samrat Gold": { 1: 85, 5: 400, 10: 765, 20: 1480 },
    "SVA-Bharat Prime": { 1: 70, 5: 330, 10: 630, 20: 1220 },
    "SVA-Kanak Tech": { 1: 90, 5: 425, 10: 810, 20: 1550 },
  },
  "Sorghum / Jowar": {
    "SVA-Anuradha F1": { 1: 160, 5: 760, 10: 1450, 20: 2800 },
    "SVA-Milky White": { 1: 130, 5: 615, 10: 1180, 20: 2280 },
    "SVA-Moti Jowar": { 1: 150, 5: 710, 10: 1350, 20: 2600 },
    "SVA-Malshiras 9": { 1: 125, 5: 590, 10: 1130, 20: 2180 },
    "SVA-Sorghum King": { 1: 140, 5: 665, 10: 1270, 20: 2450 },
  },
  "Pearl Millet / Bajra": {
    "SVA-Pioneer Max": { 1: 180, 5: 855, 10: 1640, 20: 3150 },
    "SVA-Kranti 84": { 1: 150, 5: 710, 10: 1360, 20: 2620 },
    "SVA-Bullet Pearl": { 1: 190, 5: 900, 10: 1730, 20: 3320 },
    "SVA-Bajra Bold": { 1: 140, 5: 665, 10: 1270, 20: 2450 },
    "SVA-Super Green": { 1: 165, 5: 780, 10: 1500, 20: 2880 },
  },
  "Chickpea / Bengal Gram": {
    "SVA-Chana King": { 1: 140, 5: 665, 10: 1270, 20: 2450 },
    "SVA-Digvijay Pro": { 1: 145, 5: 690, 10: 1320, 20: 2540 },
    "SVA-Jaki Bold": { 1: 155, 5: 735, 10: 1410, 20: 2710 },
    "SVA-Kabuli Deluxe": { 1: 190, 5: 900, 10: 1730, 20: 3320 },
    "SVA-Gram Tech": { 1: 130, 5: 615, 10: 1180, 20: 2280 },
  },
  "Pigeon Pea / Red Gram (Tur)": {
    "SVA-Maruti Plus": { 1: 210, 5: 1000, 10: 1910, 20: 3680 },
    "SVA-Arhar Gold": { 1: 225, 5: 1070, 10: 2050, 20: 3940 },
    "SVA-Vaishali 7": { 1: 195, 5: 925, 10: 1770, 20: 3410 },
    "SVA-Tur Elite": { 1: 200, 5: 950, 10: 1820, 20: 3500 },
    "SVA-Red Ruby": { 1: 240, 5: 1140, 10: 2180, 20: 4200 },
  },
  "Green Gram / Moong": {
    "SVA-Virat F1": { 1: 200, 5: 950, 10: 1820, 20: 3500 },
    "SVA-Moong Max": { 1: 185, 5: 880, 10: 1685, 20: 3240 },
    "SVA-Shiny Green": { 1: 190, 5: 900, 10: 1730, 20: 3320 },
    "SVA-Summer Crop 5": { 1: 175, 5: 830, 10: 1590, 20: 3060 },
    "SVA-Resilient 10": { 1: 210, 5: 1000, 10: 1910, 20: 3680 },
  },
  "Black Gram / Urad": {
    "SVA-Urad Pro 31": { 1: 190, 5: 900, 10: 1730, 20: 3320 },
    "SVA-Black Pearl": { 1: 210, 5: 1000, 10: 1910, 20: 3680 },
    "SVA-Mahadev Bold": { 1: 180, 5: 855, 10: 1640, 20: 3150 },
    "SVA-Urad Elite": { 1: 175, 5: 830, 10: 1590, 20: 3060 },
    "SVA-Gautami 4": { 1: 185, 5: 880, 10: 1685, 20: 3240 },
  },
  "Soybean": {
    "SVA-Soy Tech 335": { 1: 120, 5: 570, 10: 1100, 20: 2100 },
    "SVA-Yellow Gold": { 1: 115, 5: 545, 10: 1050, 20: 2010 },
    "SVA-Soy Max 95": { 1: 130, 5: 615, 10: 1180, 20: 2280 },
    "SVA-Protein Plus": { 1: 135, 5: 640, 10: 1230, 20: 2360 },
    "SVA-Vikas 20": { 1: 110, 5: 520, 10: 1000, 20: 1900 },
  },
  "Mustard / Rapeseed": {
    "SVA-Coral Yellow": { 1: 220, 5: 1045, 10: 2000, 20: 3850 },
    "SVA-Pusa Bold X": { 1: 190, 5: 900, 10: 1730, 20: 3320 },
    "SVA-Mustard King": { 1: 200, 5: 950, 10: 1820, 20: 3500 },
    "SVA-Rayo Tech": { 1: 180, 5: 855, 10: 1640, 20: 3150 },
    "SVA-Golden Seed": { 1: 240, 5: 1140, 10: 2180, 20: 4200 },
  },
  "Groundnut / Peanut": {
    "SVA-Kadiri Prime": { 1: 180, 5: 855, 10: 1640, 20: 3150 },
    "SVA-Peanut King": { 1: 190, 5: 900, 10: 1730, 20: 3320 },
    "SVA-Pod Max 6": { 1: 170, 5: 805, 10: 1550, 20: 2980 },
    "SVA-Nut Bold": { 1: 200, 5: 950, 10: 1820, 20: 3500 },
    "SVA-Oil Rich 11": { 1: 215, 5: 1020, 10: 1960, 20: 3760 },
  },
  "Sunflower": {
    "SVA-Sun F1 Ultra": { 1: 450, 5: 2135, 10: 4100, 20: 7880 },
    "SVA-Suraj Gold": { 1: 400, 5: 1900, 10: 3640, 20: 7000 },
    "SVA-Solar Max": { 1: 420, 5: 1995, 10: 3820, 20: 7350 },
    "SVA-Helios Prime": { 1: 390, 5: 1850, 10: 3550, 20: 6825 },
    "SVA-Sun Bloom": { 1: 410, 5: 1945, 10: 3730, 20: 7180 },
  },
  "Cotton Seeds": {
    "SVA-Bt White Gold": { 1: 850, 5: 4035, 10: 7735, 20: 14875 },
    "SVA-Kalyan Fiber": { 1: 760, 5: 3610, 10: 6915, 20: 13300 },
    "SVA-Cotton King II": { 1: 800, 5: 3800, 10: 7280, 20: 14000 },
    "SVA-Silver Thread": { 1: 790, 5: 3750, 10: 7190, 20: 13825 },
    "SVA-Boll Max": { 1: 890, 5: 4225, 10: 810, 20: 15575 },
  },
  "Sugarcane (Setts/Seeds)": {
    "SVA-Cane Pro 86": { 1: 45, 5: 215, 10: 410, 20: 790 },
    "SVA-Sweet Juice 32": { 1: 40, 5: 190, 10: 365, 20: 700 },
    "SVA-Sugar Max 238": { 1: 50, 5: 235, 10: 455, 20: 875 },
    "SVA-Coimbatore Gold": { 1: 55, 5: 260, 10: 500, 20: 960 },
    "SVA-Madhuri 1": { 1: 42, 5: 200, 10: 380, 20: 735 },
  },
  "Tomato": {
    "SVA-Abhinav F1": { 1: 4500, 5: 21375, 10: 41000, 20: 78750 },
    "SVA-Red Ruby Tech": { 1: 4200, 5: 19950, 10: 38200, 20: 73500 },
    "SVA-Arka Pro": { 1: 3800, 5: 18050, 10: 34500, 20: 66500 },
    "SVA-Tomato King": { 1: 4000, 5: 19000, 10: 36400, 20: 70000 },
    "SVA-Cherry Sweet": { 1: 5000, 5: 23750, 10: 45500, 20: 87500 },
  },
  "Chilli / Pepper": {
    "SVA-Teja Spicy": { 1: 3500, 5: 16625, 10: 31850, 20: 61250 },
    "SVA-Hot Armoor": { 1: 3200, 5: 15200, 10: 29120, 20: 56000 },
    "SVA-Guntur Red": { 1: 3400, 5: 16150, 10: 30940, 20: 59500 },
    "SVA-Chilli Max": { 1: 3000, 5: 14250, 10: 27300, 20: 52500 },
    "SVA-Agni 17": { 1: 3800, 5: 18050, 10: 34580, 20: 66500 },
  },
  "Okra / Lady Finger": {
    "SVA-Teja Spicy": { 1: 3500, 5: 16625, 10: 31850, 20: 61250 },
    "SVA-Hot Armoor": { 1: 3200, 5: 15200, 10: 29120, 20: 56000 },
    "SVA-Guntur Red": { 1: 3400, 5: 16150, 10: 30940, 20: 59500 },
    "SVA-Chilli Max": { 1: 3000, 5: 14250, 10: 27300, 20: 52500 },
    "SVA-Agni 17": { 1: 3800, 5: 18050, 10: 34580, 20: 66500 },
  },
  "Onion": {
    "SVA-Bhima Dark Red": { 1: 1200, 5: 5700, 10: 10920, 20: 21000 },
    "SVA-Pune Ruby": { 1: 1100, 5: 5225, 10: 10010, 20: 19250 },
    "SVA-Onion Globe": { 1: 950, 5: 4510, 10: 8645, 20: 16625 },
    "SVA-Nashik Rose": { 1: 1300, 5: 6175, 10: 11830, 20: 22750 },
    "SVA-Pink Pearl": { 1: 1050, 5: 4985, 10: 9555, 20: 18375 },
  },
  "Cucumber": {
    "SVA-Malini Crisp": { 1: 2500, 5: 11875, 10: 22750, 20: 43750 },
    "SVA-Gypsy Green": { 1: 220, 5: 10450, 10: 20020, 20: 38500 },
    "SVA-Salad Fresh": { 1: 2400, 5: 11400, 10: 21840, 20: 42000 },
    "SVA-F1 Kamini Plus": { 1: 2600, 5: 12350, 10: 23660, 20: 45500 },
    "SVA-Cool Slice": { 1: 2100, 5: 9975, 10: 19110, 20: 36750 },
  },
};

const PlaceBulkOrder = () => {
  const navigate = useNavigate();

  // 1. ADDED: State to track delivery inputs
  const [deliveryInfo, setDeliveryInfo] = useState({
    address: "",
    date: "",
    contact: "",
    instructions: "",
  });

  const [orderItems, setOrderItems] = useState([
    { id: Date.now(), crop: "", variety: "", bagSize: "", bagCount: "" },
  ]);

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...orderItems];
    if (field === "crop") {
      updatedItems[index].crop = value;
      updatedItems[index].variety = "";
    } else {
      updatedItems[index][field] = value;
    }
    setOrderItems(updatedItems);
  };

  const addProductRow = () => {
    setOrderItems([
      ...orderItems,
      { id: Date.now(), crop: "", variety: "", bagSize: "", bagCount: "" },
    ]);
  };

  const removeProductRow = (index) => {
    setOrderItems(orderItems.filter((_, i) => i !== index));
  };

  // Math Calculations
  const subtotal = orderItems.reduce((acc, item) => {
    if (!item.crop || !item.variety || !item.bagCount) return acc;
    const unitPrice =
      cropPriceData[item.crop]?.[item.variety]?.[item.bagSize] || 0;
    return acc + unitPrice * Number(item.bagCount);
  }, 0);

  const discount = subtotal * 0.12;
  const netTaxableAmount = subtotal - discount;
  const gst = netTaxableAmount * 0.05;
  const grandTotal = netTaxableAmount + gst;

  // 2. ADDED: A custom function to handle confirming the order
  const handleConfirmOrder = () => {
    // 1. Filter valid items
    const validItems = orderItems.filter(
      (item) => item.crop && item.variety && item.bagCount
    );

    if (validItems.length === 0) {
      alert("Please add at least one valid product before confirming.");
      return;
    }

    // 2. Format items so they work perfectly for the Payment & Orders pages
    const formattedItems = validItems.map((item) => {
      const unitPrice = cropPriceData[item.crop]?.[item.variety]?.[item.bagSize] || 0;
      return {
        ...item, // Keeps original crop, variety, bagSize, bagCount
        product: item.crop.split(" / ")[0], // Creates the short name expected by Myorders
        qty: `${item.bagCount} (${item.bagSize}kg)`, // Combines for a cleaner display
        rate: unitPrice,
        amount: unitPrice * Number(item.bagCount),
      };
    });

    const totalTotalWt = validItems.reduce((acc, item) => {
      return acc + Number(item.bagSize) * Number(item.bagCount);
    }, 0);

    // 3. Pass the formattedItems instead of validItems
    navigate("/DashboardLayout/paymentpage", {
      state: {
        validItems: formattedItems,
        deliveryInfo,
        subtotal,
        discount,
        gst,
        grandTotal,
        totalTotalWt,
      },
    });
  };

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
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>VARIETY</th>
                <th>PACKAGING TYPE</th>
                <th>BAG COUNT</th>
                <th>TOTAL WT (KG)</th>
                <th>PRICE / BAG</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orderItems.map((item, index) => {
                const availableVarieties = item.crop
                  ? Object.keys(cropPriceData[item.crop] || {})
                  : [];
                const currentBagPrice =
                  item.crop && item.variety
                    ? cropPriceData[item.crop]?.[item.variety]?.[
                        item.bagSize
                      ] || 0
                    : 0;
                const dynamicRowWeight =
                  (Number(item.bagSize) || 0) * (Number(item.bagCount) || 0);

                return (
                  <tr key={item.id}>
                    <td>
                      <select
                        className="placebulk-sel-opt"
                        value={item.crop}
                        onChange={(e) =>
                          handleItemChange(index, "crop", e.target.value)
                        }
                      >
                        <option value="">--select crop--</option>
                        {Object.keys(cropPriceData).map((cropName) => (
                          <option key={cropName} value={cropName}>
                            {cropName}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <select
                        className="placebulk-sel-opt"
                        value={item.variety}
                        onChange={(e) =>
                          handleItemChange(index, "variety", e.target.value)
                        }
                        disabled={!item.crop}
                      >
                        <option value="">--Select variety--</option>
                        {availableVarieties.map((varName) => (
                          <option key={varName} value={varName}>
                            {varName}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <select
                        className="placebulk-sel-opt"
                        value={item.bagSize}
                        onChange={(e) =>
                          handleItemChange(index, "bagSize", e.target.value)
                        }
                        disabled={!item.variety}
                      >
                        <option value="">--Bag Size--</option>
                        <option value="1">1 Kg Bag</option>
                        <option value="5">5 Kg Bag</option>
                        <option value="10">10 Kg Bag</option>
                        <option value="20">20 Kg Bag</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        placeholder="Quantity"
                        className="placebulk-sel-opt"
                        value={item.bagCount}
                        onChange={(e) =>
                          handleItemChange(index, "bagCount", e.target.value)
                        }
                        disabled={!item.bagSize}
                      />
                    </td>
                    <td>
                      {dynamicRowWeight > 0 ? `${dynamicRowWeight} Kg` : "0 Kg"}
                    </td>
                    <td>
                      {currentBagPrice > 0
                        ? `₹${currentBagPrice.toLocaleString("en-IN")}`
                        : "₹0"}
                    </td>
                    <td>
                      <button
                        onClick={() => removeProductRow(index)}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          color: "red",
                        }}
                      >
                        <RiDeleteBin5Line size={20} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button className="placebulk-sel-btn" onClick={addProductRow}>
            + Add another products
          </button>
        </div>

        <div className="placebulk-del-sum">
          <div className="placebulk-delivery">
            <h4>Delivery Details</h4>
            <div>
              <label>Delivery Address</label>
              <br />
              <textarea
                type="text"
                className="placebulk-input"
                value={deliveryInfo.address}
                onChange={(e) =>
                  setDeliveryInfo({ ...deliveryInfo, address: e.target.value })
                }
              />
              <br />
              <label>Preferred Date</label>
              <br />
              <input
                type="date"
                className="placebulk-input"
                value={deliveryInfo.date}
                onChange={(e) =>
                  setDeliveryInfo({ ...deliveryInfo, date: e.target.value })
                }
              />
              <br />
              <label>Contact Number</label>
              <br />
              <input
                type="number"
                className="placebulk-input"
                value={deliveryInfo.contact}
                onChange={(e) =>
                  setDeliveryInfo({ ...deliveryInfo, contact: e.target.value })
                }
              />
              <br />
              <label>Special Instructions</label>
              <br />
              <textarea
                type="text"
                placeholder="e.g. deliver before 10 AM,&#10;call before dispatch..."
                className="placebulk-input-01"
                value={deliveryInfo.instructions}
                onChange={(e) =>
                  setDeliveryInfo({
                    ...deliveryInfo,
                    instructions: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="placebulk-summary">
            <h4>Order Summary</h4>
            <div>
              {orderItems.map((item) => {
                if (!item.crop || !item.variety || !item.bagCount) return null;
                const shortName = item.crop.split(" / ")[0];
                const unitPrice =
                  cropPriceData[item.crop]?.[item.variety]?.[item.bagSize] || 0;
                const totalItemCost = unitPrice * Number(item.bagCount);

                return (
                  <div
                    className="placebulk-summary-pp"
                    key={`summary-${item.id}`}
                  >
                    <p>
                      {shortName} ({item.variety}) [{item.bagSize}kg ×{" "}
                      {item.bagCount} Bags]
                    </p>
                    <p>₹{totalItemCost.toLocaleString("en-IN")}</p>
                  </div>
                );
              })}

              <div className="placebulk-summary-pp-gg">
                <p>Kharif Discounts (-12%)</p>
                <p>-₹{Math.round(discount).toLocaleString("en-IN")}</p>
              </div>
              <div className="placebulk-summary-pp">
                <p>GST (5%)</p>
                <p>₹{Math.round(gst).toLocaleString("en-IN")}</p>
              </div>
              <hr />
              <div className="placebulk-summary-pp">
                <p>
                  <strong>Total</strong>
                </p>
                <p>
                  <strong>
                    ₹{Math.round(grandTotal).toLocaleString("en-IN")}
                  </strong>
                </p>
              </div>
            </div>

            <h4>Payment mode</h4>
            <div>
              {/* 3. ADDED: Use the custom function here! */}
              <button className="placebulk-btns" onClick={handleConfirmOrder}>
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceBulkOrder;
