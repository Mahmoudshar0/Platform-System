import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;

