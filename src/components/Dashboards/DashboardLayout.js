import React from 'react'

import DashboardRoute from './DashboardRoute';
import Sidebar from './Sidebar';


const DashboardLayout = () => {
  return (
    <div>
        <Sidebar/>

        <main>
            <DashboardRoute/>
        </main>
    </div>
  )
}

export default DashboardLayout;