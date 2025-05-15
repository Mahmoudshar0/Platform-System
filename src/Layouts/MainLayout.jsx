import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Box } from '@mui/material';
const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Sidebar />  {/* Your existing sidebar */}
      <Box sx={{ 
        flexGrow: 1, 
        marginRight: { xs: 0, md: '200px' }  // Adjust based on your sidebar width
      }}>
        <Header />
      <div>
        <Outlet />
      </div>
      </Box>
      </Box>
  );
};

export default MainLayout;

