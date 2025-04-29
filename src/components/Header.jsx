import React, { useState } from "react";
import { Typography, Menu, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MessageIcon from "@mui/icons-material/Message";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from "@mui/icons-material/Add";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "@fontsource/tajawal";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showMessages, setShowMessages] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMaxLimitClick = () => {
    console.log("الحد الأقصى تم النقر عليه");
  };

  const messages = [
    {
      id: 1,
      time: "2:30",
      content: "حدث خطأ في تحميل الفيديو",
      type: "status",
      user: {
        name: "أحمد خالد",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop"
      }
    },
    {
      id: 2,
      time: "2:30",
      content: "تم تحميل الفيديو",
      type: "status",
      user: {
        name: "سارة محمود",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
      }
    },
    {
      id: 3,
      time: "2:30",
      content: "حدث خطأ في تحميل الفيديو يرجى المحاولة",
      type: "status",
      user: {
        name: "خالد علي",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
      }
    },
    {
      id: 4,
      time: "2:30",
      content: "هذا هو مثال نص يجب أن يستبدل في ذلك",
      type: "comment",
      user: {
        name: "محمد علي",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
      }
    },
    {
      id: 5,
      time: "2:30",
      content: "هذا هو مثال نص يجب أن يستبدل في ذلك",
      type: "comment",
      user: {
        name: "محمد علي",
        avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop"
      }
    }
  ];

  return (
    <Box>
      <Box
        sx={{
          marginRight: "25%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "10px 30px 0",
          width: "80%",
          gap: "15px",
        }}
      >
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Box
            sx={{
              width: "35px",
              height: "35px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #CCCCCC",
              borderRadius: "50%",
              cursor: "pointer",
              position: "relative"
            }}
          >
            <AddIcon sx={{ fontSize: "18px", color: "#0026FF", width: "24px", height: "24px", fontWeight: "500" }} />
          </Box>

          <Box
            sx={{
              width: "35px",
              height: "35px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #CCCCCC",
              borderRadius: "50%",
              cursor: "pointer",
              marginRight: "300px",
              position: "relative"
            }}
            onClick={() => setShowMessages(!showMessages)}
          >
            <MessageIcon sx={{ fontSize: "16px", color: "#555555" }} />
            {showMessages && (
              <Box
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "350px",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                  padding: "15px",
                  zIndex: "1000",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", flexDirection: "column", alignItems: "flex-end" }}>
                  <CloseIcon
                    sx={{ cursor: "pointer", color: "#818181", fontSize: "22px" }}
                    onClick={() => setShowMessages(false)}
                  />
                  <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: "bold", textAlign: "center", marginTop: "5px" }}>
                    الرسائل
                  </Typography>
                  <hr
                    style={{
                      width: "95%",
                      border: "0.5px solid #ddd",
                      marginTop: "5px",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: "10px",
                    padding: "15px",
                    width: "95%",
                  }}
                >
                  {[
                    { src: "/images/user1.jpg", name: "محمد علي" },
                    { src: "/images/user2.jpg", name: "سارة أحمد" },
                    { src: "/images/user3.jpg", name: "خالد حسن" },
                    { src: "/images/user4.jpg", name: "منى جمال" },
                  ].map((user, index, users) => (
                    <Box key={index} sx={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "flex-end", flexDirection: "column", position: "relative" }}>
                      <MoreVertIcon
                        sx={{
                          position: "absolute",
                          left: "0",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "#818181",
                          cursor: "pointer",
                        }}
                        onClick={handleClick}
                      />
                      <img
                        src={'/images/logo.jpg'}
                        alt={`User ${index + 1}`}
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "1px solid #ddd",
                          cursor: "pointer",
                          marginLeft: "60px",
                          alignSelf: "flex-end",
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                          color: "#333",
                          marginRight: "60px",
                          position: "absolute",
                          right: "0",
                          top: "15%",
                          translateY: "(-50%)",
                        }}
                      >
                        {user.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "18px",
                          marginTop: "-5px",
                          position: "absolute",
                          left: "0",
                          top: "80%",
                          transform: "translateY(-50%)",
                          color: index % 2 === 0 ? "#24C42E" : "#818181",
                        }}
                      >
                        نشط الآن
                      </Typography>
                      {index < users.length - 1 && (
                        <hr style={{ width: "100%", border: "0.5px solid #ddd", margin: "10px 0" }} />
                      )}
                    </Box>
                  ))}
                </Box>

                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  dir="rtl"
                >
                  <MenuItem onClick={handleClose}>عرض الملف الشخصي</MenuItem>
                  <MenuItem onClick={handleClose}>حذف الرسالة</MenuItem>
                  <MenuItem onClick={handleClose}>إرسال رسالة جديدة</MenuItem>
                </Menu>
              </Box>
            )}
          </Box>
        </Box>

        <Box
          sx={{
            width: "35px",
            height: "35px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #CCCCCC",
            borderRadius: "50%",
            cursor: "pointer",
            position: "relative"
          }}
          onClick={() => setShowNotifications(!showNotifications)}
        >
          <NotificationsNoneIcon sx={{ fontSize: "18px", color: "#555555" }} />
          {showNotifications && (
            <Box
              sx={{
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "350px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                padding: "15px",
                zIndex: "1000",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
                <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "5px" }}>
                  <CheckBoxOutlineBlankIcon
                    sx={{
                      fontSize: "18px",
                      color: "#818181",
                      cursor: "pointer",
                      borderRadius: "3px",
                      border: "1px solid #CCCCCC",
                      padding: "1px",
                      boxSizing: "border-box",
                    }}
                  />
                  <CloseIcon
                    sx={{ cursor: "pointer", color: "#818181", fontSize: "22px" }}
                    onClick={() => setShowNotifications(false)}
                  />
                </Box>

                <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: "5px" }}>
                  <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: "bold", textAlign: "right", fontFamily: "Tajawal, sans-serif" }}>
                    الإشعارات
                  </Typography>
                </Box>

                <hr
                  style={{
                    width: "100%",
                    border: "0.5px solid #ddd",
                    marginTop: "5px",
                    opacity: "0.5"
                  }}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#333",
                      fontFamily: "Tajawal, sans-serif",
                      cursor: "pointer",
                    }}
                    onClick={handleMaxLimitClick}
                  >
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: "2px", direction: "rtl",justifyContent:'space-between',marginRight: "auto" }}>
                  <Typography sx={{ fontSize: "14px", color: "#333", fontFamily: "Tajawal, sans-serif" }}>
                      الأحدث أولاً :
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      backgroundColor: "#E0E0E0",
                      borderRadius: "5px",
                      padding: "1px 3px",
                      cursor: "pointer",
                    }}
                  >
                    <FilterAltIcon
            sx={{
    width: "18px",
    height: "18px",
    color: "#818181",
    marginRight: "2px",
  }}
/>
                    <Typography sx={{ fontSize: "14px", color: "#333", fontFamily: "Tajawal, sans-serif", fontWeight: "normal" }}>
                      فلتر
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {messages.map((message) => (
                  <Box key={message.id} sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "8px", color: "#2196f3", direction: "ltr" }}>
                      <AccessTimeIcon sx={{ width: "16px", height: "16px" }} />
                      <Typography sx={{ fontSize: "12px", fontFamily: "Tajawal, sans-serif" }}>
                        {message.time}
                      </Typography>
                    </Box>

                    {message.type === "status" ? (
                      <Box sx={{ display: "flex", flexDirection: "row-reverse", alignItems: "flex-start", gap: "12px" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                          <img
                            src={"/images/logo.jpg"}
                            alt={message.user?.name}
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              objectFit: "cover",
                              border:"1px solid #818181"
                            }}
                          />
                          <Typography sx={{ fontSize: "12px", color: "#666666", marginTop: "4px", fontFamily: "Tajawal, sans-serif" }}>
                            {message.user?.name}
                          </Typography>
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Box sx={{ borderRadius: "8px", padding: "12px" }}>
                            <Typography sx={{ color: "#666666", fontSize: "14px", fontFamily: "Tajawal, sans-serif" }}>
                              {message.content}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    ) : (
                      <Box sx={{ display: "flex", flexDirection: "row-reverse", alignItems: "flex-start", gap: "12px" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                          <img
                            src={"/images/logo.jpg"}
                            alt={message.user?.name}
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              objectFit: "cover",
                              border:'1px solid #818181'
                            }}
                          />
                          <Typography sx={{ fontSize: "12px", color: "#666666", marginTop: "4px", fontFamily: "Tajawal, sans-serif" }}>
                            {message.user?.name}
                          </Typography>
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Box sx={{ borderRadius: "8px", padding: "12px" }}>
                            <Typography sx={{ color: "#1f2a44", fontSize: "14px", fontFamily: "Tajawal, sans-serif" }}>
                              {message.content}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    )}
                  </Box>
                ))}

                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontFamily: "Tajawal, sans-serif",
                      backgroundColor: "#000",
                      color: "#fff",
                      borderRadius: "10px",
                      padding: "5px 10px",
                      display: "inline-block",
                    }}
                  >
                    23 يناير 2025
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
        </Box>

        <TextField
          placeholder="بحث..."
          variant="outlined"
          sx={{
            bgcolor: "#F0F0F0",
            borderRadius: "50px",
            width: "550px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "50px",
              fontSize: "14px",
              "& input": {
                padding: "8px 14px",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#888", fontSize: "16px" }} />
              </InputAdornment>
            ),
          }}
        />

        <Box sx={{ textAlign: "right" }}>
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              fontWeight: "500",
              color: "#000000",
              fontFamily: "Tajawal, sans-serif",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "5px",
            }}
          >
            👋 ..مرحبًا بك
          </p>
          <h4
            style={{
              fontFamily: "Tajawal, sans-serif",
              fontWeight: "700",
              fontSize: "14px",
              color: "#818181",
              marginTop: "3px",
            }}
          >
            د. محمد عبد الحميد
          </h4>
        </Box>

        <img
          src='/images/logo.jpg'
          alt="Profile"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "1px solid #C7C7C7"
          }}
        />
      </Box>
    </Box>
  );
}

export default Header;