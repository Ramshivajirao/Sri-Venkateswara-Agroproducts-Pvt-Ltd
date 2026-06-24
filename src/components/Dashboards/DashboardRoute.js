import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Overview from './Overview';
import Myorders from './Myorders';
import PlaceBulkOrder from './PlaceBulkOrder';
import Offers from './Offers';
import Complaints from './Complaints';
import PaymentPage from './PaymentPage'


const DashboardRoute = () => {
  return (
    <Routes>
        <Route path='/overview' element={<Overview/>}/>
        <Route path='/myorders' element={<Myorders/>}/>
        <Route path='/plackebulkorders' element={<PlaceBulkOrder/>}/>
        <Route path='/paymentpage' element={<PaymentPage/>}/>
        <Route path='/offers&schemes' element={<Offers/>}/>
        <Route path='/raisecomplains' element={<Complaints/>}/>
    </Routes>
  )
}

export default DashboardRoute