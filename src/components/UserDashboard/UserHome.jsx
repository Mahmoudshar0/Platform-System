import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import { Box } from '@mui/material';
import Sidebar from '../Sidebar';
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ArticleIcon from "@mui/icons-material/Article";
import QuizIcon from "@mui/icons-material/Quiz";
import SendIcon from "@mui/icons-material/Send";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ChatIcon from "@mui/icons-material/Chat";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ForumIcon from '@mui/icons-material/Forum';

const menuItems = [
  { text: "الصفحة الرئيسية", icon: <HomeIcon />, path: "/userdashboard" },
  {
    text: "المحتوى التعليمي", icon: <MenuBookIcon />,
    subItems: [
      { text: "الفيديوهات التعليمية", icon: <VideoLibraryIcon />, path: "/educational/videos" },
      { text: "PDF محاضرات", icon: <PictureAsPdfIcon />, path: "/educational/lectures" },
      { text: "المقالات", icon: <ArticleIcon />, path: "/educational/articles" },
      { text: "إدارة الاختبارات", icon: <QuizIcon />, path: "/userdashboard/ListTests" },
      { text: "تقديم الواجبات", icon: <SendIcon />, path: "/userdashboard/SubmitAssignments" },
    ]
  },
  {
    text: "صفحة التفاعل", icon: <AssignmentIcon />, path: "/assignments"
    , subItems: [
      {
        text: "التواصل الاجتماعي ", icon: <VideoLibraryIcon />, path: "/educational/videos",
        subItems: [
          { text: 'ملف المستخدم', icon: <AccountCircleIcon />, path: '/userdashboard/userprofile' },
          { text: 'قائمة الأصدقاء', icon: <PeopleAltIcon /> },
          { text: 'المجموعات', icon: <GroupIcon /> },
          { text: 'منتديات النقاش', icon: <ForumIcon /> },
        ]
      },
    ]
  },
  { text: "الاشعارات", icon: <QuizIcon />, path: "/test" },
  { text: "التذاكر", icon: <ChatIcon />, path: "/posts" },
  {
    text: "صفحات الدعم", icon: <VideoCallIcon />, path: "/live"
    , subItems: []
  },
  { text: "الإعدادات", icon: <SettingsIcon />, path: "/settings" },
  { text: "تسجيل الخروج", icon: <LogoutIcon />, path: "/logout" }, // أو خلّيه بدون path وتستخدم onClick خاص
];
const UserDashboard = () => {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Sidebar menuItems={menuItems} bgColor='#fff' fcolor='#000' bgHover='#E6E9FF' hcolor='#002FD8' />
      <Box sx={{
        flexGrow: 1,
        width: { xs: 'calc(100% - 20px)', md: 'calc(100% - 240px)' },
      }}>
        <Header />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default UserDashboard;

