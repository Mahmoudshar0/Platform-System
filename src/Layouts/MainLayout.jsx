import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Box } from '@mui/material';
import live from '../assets/live.png';
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AssignmentIcon from "@mui/icons-material/Assignment";
import QuizIcon from "@mui/icons-material/Quiz";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import FolderIcon from "@mui/icons-material/Folder";

const menuItems = [
  { text: "الصفحة الرئيسية", icon: <HomeRoundedIcon />, path: "/" },
  { text: "إدارة المحتوى", icon: <FolderIcon />, path: "/content" },
  { text: "إدارة الواجبات", icon: <AssignmentIcon />, path: "/assignments" },
  { text: "إدارة الاختبارات", icon: <QuizIcon />, path: "/test" },
  { text: "التفاعل مع الطلاب", icon: <PeopleIcon />, path: "/posts" },
  { text: "بث مباشر", icon: <img src={live} alt="بث مباشر" style={{ width: 24, height: 24 }} />, path: "/AddLive" },
  { text: "الإعدادات", icon: <SettingsIcon />, path: "/settings" },
];
const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Sidebar menuItems={menuItems} fcolor='#fff' bgColor='#4A5971' bgHover='#5864D3' hcolor='#fff' />
      <Box sx={{
        flexGrow: 1,
        width: { xs: 'calc(100% - 40px)', md: 'calc(100% - 240px)' },
      }}>
        <Header />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;

