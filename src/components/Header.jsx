import React, { useState } from 'react';
import { Box, Typography, IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import '@fontsource/tajawal';
import AddButton from './AddButton';
import MessagesButton from './MessagesButton';
import NotificationsButton from './NotificationsButton';
import SearchField from './SearchField';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useUser } from '../contexst/UserContext'
import {
  useTheme
} from '@mui/material';

function Header() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showMessages, setShowMessages] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [moreMenuAnchorEl, setMoreMenuAnchorEl] = useState(null);
  const user = localStorage.getItem('user');
  console.log(user);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  // const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleMaxLimitClick = () => {
    console.log('الحد الأقصى تم النقر عليه');
  };

  const handleMoreMenuOpen = (event) => {
    setMoreMenuAnchorEl(event.currentTarget);
  };

  const handleMoreMenuClose = () => {
    setMoreMenuAnchorEl(null);
  };

  const messages = [
    {
      id: 1,
      time: '2:30',
      content: 'حدث خطأ في تحميل الفيديو',
      type: 'status',
      user: {
        name: 'أحمد خالد',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
      },
    },
    {
      id: 2,
      time: '2:30',
      content: 'تم تحميل الفيديو',
      type: 'status',
      user: {
        name: 'سارة محمود',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      },
    },
    {
      id: 3,
      time: '2:30',
      content: 'حدث خطأ في تحميل الفيديو يرجى المحاولة',
      type: 'status',
      user: {
        name: 'خالد علي',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      },
    },
    {
      id: 4,
      time: '2:30',
      content: 'هذا هو مثال نص يجب أن يستبدل في ذلك',
      type: 'comment',
      user: {
        name: 'محمد علي',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      },
    },
    {
      id: 5,
      time: '2:30',
      content: 'هذا هو مثال نص يجب أن يستبدل في ذلك',
      type: 'comment',
      user: {
        name: 'محمد علي',
        avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop',
      },
    },
  ];

  const newMessage = {
    id: 6,
    time: '3:00',
    content: 'تمت إضافة فيديو جديد بنجاح',
    type: 'status',
    user: {
      name: 'نورا أحمد',
      avatar: 'https://images.unsplash.com/photo-1517841903200-7a7b2f2b7d0f?w=150&h=150&fit=crop',
    },
  };

  const messageUsers = [
    {
      id: 1,
      name: 'محمد علي',
      avatar: '/images/logo.jpg',
      isOnline: true,
      timestamp: '2:30',
      lastMessage: 'مرحبا، كيف يمكنني مساعدتك؟',
    },
    {
      id: 2,
      name: 'سارة أحمد',
      avatar: '/images/logo.jpg',
      isOnline: false,
      timestamp: '2:30',
      lastMessage: 'شكرا على المساعدة!',
    },
    {
      id: 3,
      name: 'خالد حسن',
      avatar: '/images/logo.jpg',
      isOnline: true,
      timestamp: '2:30',
      lastMessage: 'هل يمكننا مناقشة المشروع؟',
    },
    {
      id: 4,
      name: 'منى جمال',
      avatar: '/images/logo.jpg',
      isOnline: false,
      timestamp: '2:30',
      lastMessage: 'سأرسل التفاصيل لاحقا',
    },
  ];

  return (
    <Box
      sx={{
        paddingInline: "15px",
        width: '100%',
        direction: 'rtl',
        borderBottom: '1px solid #eaeaea',
        backgroundColor: '#ffffff',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            sm: 'row',
          },
          alignItems: 'center',
          justifyContent: {
            xs: 'end',
            sm: 'space-around',
          },
          padding: {
            xs: '15px 10px',
            sm: '15px 10px',
          },
          margin:{
            xs: "0 10px",
            md: 0
          },
          gap: {
            xs: '10px',
            sm: '10px',
          },
          position: 'relative',
        }}
      >

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: { xs: '100%', sm: 'auto' },
            justifyContent: { xs: 'center', sm: 'flex-start' },
            order: { xs: 1, sm: 1 },
            gap: '20px',
          }}
        >
          <img
            src={user?.profilePicture || "/images/logo.jpg"}
            alt="Profile"
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '1px solid #C7C7C7',
              marginLeft: '10px',
              marginRight: '10px',
            }}
          />
          <Box sx={{ textAlign: 'right' }}>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#000',
                fontFamily: 'Tajawal, sans-serif',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              مرحبًا بك..👋
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '14px',
                color: '#818181',
                fontFamily: 'Tajawal, sans-serif',
                width: 'max-content',
              }}
            >
              د.{user?.username || 'اسم المستخدم'}
            </Typography>
          </Box>
          <Box sx={{
          }}>
            {isSmallScreen ? (
              <>
                <IconButton onClick={() => setShowSearch(!showSearch)}>
                  <SearchIcon />
                </IconButton>
                {showSearch && (
                  <Box
                  >
                    <SearchField />
                  </Box>
                )}
              </>
            ) : (
              <Box sx={{ width: '100%' }}>
                <SearchField />
              </Box>
            )}
          </Box>
        </Box>
        {/* Action Buttons - Responsive handling */}
        <Box
          sx={{
            order: { xs: 2, sm: 3 },
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'flex-end' },
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          {isSmallScreen ? (
            <>
              <IconButton onClick={handleMoreMenuOpen} sx={{ zIndex: 1 }}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                anchorEl={moreMenuAnchorEl}
                open={Boolean(moreMenuAnchorEl)}
                onClose={handleMoreMenuClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              >
                <MenuItem sx={{ display: 'flex', alignItems: 'center', gap: 1, direction: 'rtl' }}>
                  <NotificationsButton
                    showNotifications={showNotifications}
                    setShowNotifications={setShowNotifications}
                    messages={messages}
                    newMessage={newMessage}
                    handleMaxLimitClick={handleMaxLimitClick}
                  />
                  <Typography sx={{ fontSize: '14px', fontFamily: 'Tajawal' }}>الإشعارات</Typography>
                </MenuItem>
                <MenuItem sx={{ display: 'flex', alignItems: 'center', gap: 1, direction: 'rtl' }}>
                  <MessagesButton
                    showMessages={showMessages}
                    setShowMessages={setShowMessages}
                    anchorEl={anchorEl}
                    setAnchorEl={setAnchorEl}
                    messageUsers={messageUsers}
                  />
                  <Typography sx={{ fontSize: '14px', fontFamily: 'Tajawal' }}>الرسائل</Typography>
                </MenuItem>
                <MenuItem sx={{ display: 'flex', alignItems: 'center', gap: 1, direction: 'rtl' }}>
                  <AddButton />
                  <Typography sx={{ fontSize: '14px', fontFamily: 'Tajawal' }}>إضافة</Typography>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: '30px' }}>
              <NotificationsButton
                showNotifications={showNotifications}
                setShowNotifications={setShowNotifications}
                messages={messages}
                newMessage={newMessage}
                handleMaxLimitClick={handleMaxLimitClick}
              />
              <MessagesButton
                showMessages={showMessages}
                setShowMessages={setShowMessages}
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                messageUsers={messageUsers}
              />
              <AddButton />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
