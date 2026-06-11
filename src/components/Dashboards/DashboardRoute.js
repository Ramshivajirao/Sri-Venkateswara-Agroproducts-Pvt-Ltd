import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Overview from './Overview';
import Myorders from './Myorders';
import PlaceBulkOrder from './PlaceBulkOrder';


const DashboardRoute = () => {
  return (
    <Routes>
        <Route path='/overview' element={<Overview/>}/>
        <Route path='/myorders' element={<Myorders/>}/>
        <Route path='/plackebulkorders' element={<PlaceBulkOrder/>}/>
    </Routes>
  )
}

export default DashboardRoute