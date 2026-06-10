import React from "react";
import kharif from '../assests/kharif.png';
import rabi from '../assests/rabi.png';
import chilli from '../assests/chilli.png'

const Home = () => {
  return (
    <div className="home-photos" id="home">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={rabi} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={kharif} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={chilli} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
