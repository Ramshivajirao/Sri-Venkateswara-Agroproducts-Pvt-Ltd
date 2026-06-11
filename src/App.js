// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import About from "./components/About";
import Quality from "./components/Quality";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Login from "./components/Login";
import Resources from "./components/Resources";
import Registration from "./components/Registration";
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardLayout from "./components/Dashboards/DashboardLayout";
import Research from "./components/Research";


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/qualityr&d" element={<Quality />} />
        <Route path="/ourresearch" element={<Research/>} />
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
