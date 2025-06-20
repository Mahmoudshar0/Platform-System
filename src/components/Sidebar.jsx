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
import Collapse from "@mui/material/Collapse";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const drawerWidth = 240;

const Sidebar = ({ menuItems, bgColor, fcolor, bgHover, hcolor }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const [selectedItem, setSelectedItem] = useState(null); // حالة لتتبع العنصر المحدد

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleToggleExpand = (itemText) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemText]: !prev[itemText],
    }));
  };

  const handleItemClick = (item, hasSubItems) => {
    if (hasSubItems) {
      handleToggleExpand(item.text);
    } else {
      navigate(item.path);
      setSelectedItem(item.text); // تحديث العنصر المحدد
      if (isMobile) setMobileOpen(false);
    }
  };

  const renderMenuItems = (items, level = 0) => {
    return items.map((item) => {
      const hasSubItems = item.subItems && item.subItems.length > 0;
      const isExpanded = expandedItems[item.text] || false;
      const isSelected = selectedItem === item.text; // تحقق إذا كان العنصر محددًا

      return (
        <React.Fragment key={`${item.text}-${level}`}>
          <ListItem
            disablePadding
            sx={{
              paddingInline: 2,
              pl: 2 + level * 2

            }}
            dir="rtl"
          >
            <ListItemButton
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 0,
                paddingInline: 1,
                marginBlock: 0.5,
                borderRadius: 2,
                transition: "background-color 0.3s ease",
                backgroundColor: isSelected ? bgHover : "transparent", // لون الخلفية عند التحديد
                color: isSelected ? hcolor : fcolor, // لون النص عند التحديد
                "&:hover": {
                  backgroundColor: bgHover,
                  color: hcolor
                },
              }}
              onClick={() => handleItemClick(item, hasSubItems)}
            >
              <div style={{
                display: "flex",
                alignItems: "center",
                width: "100%"
              }}>
                {item.icon && (
                  <ListItemIcon
                    sx={{
                      color: isSelected ? hcolor : fcolor, // لون الأيقونة عند التحديد
                      minWidth: "30px",
                      marginLeft: 1
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                )}
                <ListItemText
                  primary={item.text}
                  sx={{
                    textAlign: "right",
                    color: isSelected ? hcolor : fcolor, // لون النص عند التحديد
                    paddingRight: 0
                  }}
                />
              </div>

              {hasSubItems && (
                isExpanded ? (
                  <KeyboardArrowDownIcon sx={{ color: isSelected ? hcolor : fcolor }} />
                ) : (
                  <KeyboardArrowLeftIcon sx={{ color: isSelected ? hcolor : fcolor }} />
                )
              )}
            </ListItemButton>
          </ListItem>

          {hasSubItems && (
            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {renderMenuItems(item.subItems, level + 1)}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <>
      {isMobile && (
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            position: "fixed",
            top: 20,
            right: 10,
            color: fcolor,
            zIndex: 1400,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              color: hcolor
            },
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
            backgroundColor: bgColor,
            color: fcolor,
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
          {renderMenuItems(menuItems)}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;