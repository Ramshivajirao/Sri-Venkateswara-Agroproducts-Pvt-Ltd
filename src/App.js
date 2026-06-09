// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import About from "./components/About";
import Quality from "./components/Quality";
import ContactUs from "./components/ContactUs";
import FieldCrops from "./components/FieldCrops";
import VegetableSeeds from "./components/VegetableSeeds";
import ForageCrops from "./components/ForageCrops";
import Home from "./components/Home";
import Login from "./components/Login";
import Resources from "./components/Resources";
import Registration from "./components/Registration";
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardLayout from "./components/Dashboards/DashboardLayout";


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/qualityr&d" element={<Quality />} />
        <Route path="/fieldcrops" element={<FieldCrops />} />
        <Route path="/vegetablesseeds" element={<VegetableSeeds />} />
        <Route path="/foragecrops" element={<ForageCrops />} />
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/"element={<Quality />}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/DashboardLayout/*" element={<DashboardLayout/>} />
      </Routes> 
    </div>
  );
};

export default App;
