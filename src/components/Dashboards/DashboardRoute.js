import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Overview from '../Overview';
// import Landingpage from '../Landingpage';


const DashboardRoute = () => {
  return (
    <Routes>
        <Route path='/overview' element={<Overview/>}/>
        {/* <Route path="/" element={<Landingpage/>} /> */}
    </Routes>
  )
}

export default DashboardRoute