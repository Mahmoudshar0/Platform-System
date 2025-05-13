import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AssignmentIcon from "@mui/icons-material/Assignment";
import QuizIcon from "@mui/icons-material/Quiz";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import FolderIcon from "@mui/icons-material/Folder";
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import live from '../assets/live.png';
//--------------------------------------------------------
const drawerWidth = 220;

const menuItems = [
  { text: "الصفحة الرئيسية", icon: <HomeRoundedIcon />, path: "/" },
  { text: "إدارة المحتوى", icon: <FolderIcon />, path: "/content" },
  { text: "إدارة الواجبات", icon: <AssignmentIcon />, path: "/assignments" },
  { text: "إدارة الاختبارات", icon: <QuizIcon />, path: "/test" },
  { text: "التفاعل مع الطلاب", icon: <PeopleIcon />, path: "/posts" }, 
  { text: "بث مباشر", icon: <img src={live} alt="بث مباشر" style={{ width: 24, height: 24 }} /> , path: "/live" },
  { text: "الإعدادات", icon: <SettingsIcon />, path: "/settings" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* زر فتح القائمة في الموبايل فقط */}
      {isMobile && (
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            position: "fixed",
            top: 10,
            right: 10,
            color: "white",
            zIndex: 1400,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        sx={{
          width: isMobile ? 0 : drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: isMobile ? "60%" : drawerWidth,
            backgroundColor: "#4A5971",
            color: "white",
            height: "100vh",
            border: "none",
            boxShadow: "none",
            position: "fixed",
            right: 0,
            zIndex: 1300,
          },
        }}
        variant={isMobile ? "temporary" : "permanent"}
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        <List sx={{ marginTop: 5 }}>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding
            sx={{ paddingInline: 2 }}>
              <ListItemButton
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 0,
                  paddingInline: 1,
                  marginBlock: 1,
                  borderRadius: 2,
                  transition: "background-color 0.3s ease",
                  "&:hover": { backgroundColor: "#5864D3" },
                }}
                onClick={() => {
                  navigate(item.path);
                  if (isMobile) setMobileOpen(false);
                }}
              >
                <ListItemText primary={item.text} sx={{ textAlign: "right", color: "white", paddingRight: 0 }} />
                <ListItemIcon sx={{ color: "white", minWidth:"30px", marginLeft:1 }}>{item.icon}</ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};
export default Sidebar;