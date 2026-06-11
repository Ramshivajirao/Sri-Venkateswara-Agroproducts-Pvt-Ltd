import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Overview from './Overview';
import Myorders from './Myorders';
import PlaceBulkOrder from './PlaceBulkOrder';
import Offers from './Offers';


const DashboardRoute = () => {
  return (
    <Routes>
        <Route path='/overview' element={<Overview/>}/>
        <Route path='/myorders' element={<Myorders/>}/>
        <Route path='/plackebulkorders' element={<PlaceBulkOrder/>}/>
        <Route path='/offers&schemes' element={<Offers/>}/>
    </Routes>
  )
}

export default DashboardRoute