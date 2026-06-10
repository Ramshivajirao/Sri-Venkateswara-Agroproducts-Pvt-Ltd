import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Overview from '../Overview';
import Myorders from '../Myorders';


const DashboardRoute = () => {
  return (
    <Routes>
        <Route path='/overview' element={<Overview/>}/>
        <Route path='/myorders' element={<Myorders/>}/>
    </Routes>
  )
}

export default DashboardRoute