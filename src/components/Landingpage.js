import React from "react";
import Home from "./Home";
import About from "./About";
import Quality from "./Quality";

import ContactUs from "./ContactUs";
import Products from "./Products";
import Resources from "./Resources";
import Research from "./Research";
import Footer from "./Footer";

const Landingpage = () => {
  return (
    <div>
      <Home />
      <About />
      <Products />
      <Quality />
      <Research />
      <Resources />
      <ContactUs />
      <Footer/>
    </div>
  );
};

export default Landingpage;
