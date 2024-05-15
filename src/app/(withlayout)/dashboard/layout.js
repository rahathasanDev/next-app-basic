import Drawer from '@/components/Shared/drawer';
import React from 'react';

const DashboardLayout = ({children}) => {
  return (
    <div className='m-10'>
      {children}
    <Drawer></Drawer>
    </div>
  );
};

export default DashboardLayout;