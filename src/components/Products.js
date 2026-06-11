import React from "react";
import "../styles/Product.css";
import { FaArrowRightLong } from "react-icons/fa6";

const Products = () => {
  return (
    <div className="products" id="ourproducts">
      <div className="container">
        <div>
          <div className="products-title">Our Products</div>
          <div className="products-flexing">
            <div className="products-heading">
              <h1>Seeds For Every Season</h1>
            </div>
            <div className="products-btns">
              <button>All</button>
              <button>Kharif</button>
              <button>Rabi</button>
              <button>Vegetables</button>
            </div>
          </div>
        </div>
        <div>
          <div className="product-rows-all d-row">
            <div className="products-cards">
              <div className="products-card-kharif">
                <p>Kharif</p>
              </div>
              <div className="products-cards-1">
                <span>🌾</span>
              </div>
              <div className="products-cards-2">
                <h4>Paddy / Rice</h4>
                <p>
                  High-yielding hybrid paddy varieties with drought tolerance
                  and improved grain quality for June–November sowing.
                </p>
                <div className="d-flex justify-content-between px-3">
                  <p className="product-cards-2-para">12 Varieties Available</p>
                  <div className="products-cards-2-variety-div d-flex">
                    <p className="products-cards-2-variety-view">View </p>
                    <p className="products-cards-2-variety-arrow">
                      <FaArrowRightLong />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="products-cards">
              <div className="products-card-kharif">
                <p>Kharif</p>
              </div>
              <div className="products-cards-1">
                <span>🌽</span>
              </div>
              <div className="products-cards-2">
                <h4>Maize / Corn</h4>
                <p>
                  Sweet corn and field corn hybrids with pest resistance and
                  high starch content for both food and fodder use.
                </p>
                <div className="d-flex justify-content-between px-3">
                  <p className="product-cards-2-para">8 Varieties Available</p>
                  <div className="products-cards-2-variety-div d-flex">
                    <p className="products-cards-2-variety-view">View </p>
                    <p className="products-cards-2-variety-arrow">
                      <FaArrowRightLong />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="products-cards">
              <div className="products-card-rabi">
                <p>Rabi</p>
              </div>
              <div className="products-cards-1">
                <span>🌿</span>
              </div>
              <div className="products-cards-2">
                <h4>Wheat</h4>
                <p>
                  Bold-grained, rust-resistant wheat varieties optimised for
                  cool-season cultivation across AP and Telangana.
                </p>
                <div className="d-flex justify-content-between px-3">
                  <p className="product-cards-2-para">6 Varieties Available</p>
                  <div className="products-cards-2-variety-div d-flex">
                    <p className="products-cards-2-variety-view">View </p>
                    <p className="products-cards-2-variety-arrow">
                      <FaArrowRightLong />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="products-cards">
              <div className="products-card-rabi">
                <p>Rabi</p>
              </div>
              <div className="products-cards-1">
                <span>🟡</span>
              </div>
              <div className="products-cards-2">
                <h4>Sunflower</h4>
                <p>
                  Compact, high oil-content sunflower hybrids suited for
                  water-efficient Rabi cultivation with higher seed recovery.
                </p>
                <div className="d-flex justify-content-between px-3">
                  <p className="product-cards-2-para">5 Varieties Available</p>
                  <div className="products-cards-2-variety-div d-flex">
                    <p className="products-cards-2-variety-view">View </p>
                    <p className="products-cards-2-variety-arrow">
                      <FaArrowRightLong />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="products-cards">
              <div className="products-card-veg">
                <p>Vegetables</p>
              </div>
              <div className="products-cards-1">
                <span>🍅</span>
              </div>
              <div className="products-cards-2">
                <h4>Tomato</h4>
                <p>
                  Early fruiting, determinate tomato varieties with shelf life
                  extension and resistance to ToLCV and early blight.
                </p>
                <div className="d-flex justify-content-between px-3">
                  <p className="product-cards-2-para">9 Varieties Available</p>
                  <div className="products-cards-2-variety-div d-flex">
                    <p className="products-cards-2-variety-view">View </p>
                    <p className="products-cards-2-variety-arrow">
                      <FaArrowRightLong />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="products-cards">
              <div className="products-card-veg">
                <p>Vegetables</p>
              </div>
              <div className="products-cards-1">
                <span>🫑</span>
              </div>
              <div className="products-cards-2">
                <h4>Chilli & Capsicum</h4>
                <p>
                  Pungent and sweet pepper varieties with high capsaicin content
                  and strong adaptability to AP's climate zones.
                </p>
                <div className="d-flex justify-content-between px-3">
                  <p className="product-cards-2-para">10 Varieties Available</p>
                  <div className="products-cards-2-variety-div d-flex">
                    <p className="products-cards-2-variety-view">View </p>
                    <p className="products-cards-2-variety-arrow">
                      <FaArrowRightLong />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
