import React, { useState } from 'react';
import { Box, Typography, IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import '@fontsource/tajawal';
import AddButton from './AddButton';
import MessagesButton from './MessagesButton';
import NotificationsButton from './NotificationsButton';
import SearchField from './SearchField';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showMessages, setShowMessages] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [moreMenuAnchorEl, setMoreMenuAnchorEl] = useState(null);

  const isSmallScreen = useMediaQuery('(max-width:600px)');

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
    <Box sx={{ direction: 'rtl' }}>
      <Box
        sx={{
          marginRight: '62px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '10px 30px',
          width: 'calc(100% - 230px)',
          gap: '15px',
          position: 'relative',
        }}
      >
        {/* Profile Section */}
        <Box sx={{ display: 'flex', alignItems: 'end', gap: '10px' }}>
          <img
            src="/images/logo.jpg"
            alt="Profile"
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '1px solid #C7C7C7',
            }}
          />
          <Box sx={{ textAlign: 'right' }}>
            <Typography
              sx={{
                margin: 0,
                fontSize: '14px',
                fontWeight: '500',
                color: '#000000',
                fontFamily: 'Tajawal, sans-serif',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '5px',
              }}
            >
              مرحبًا بك..👋
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Tajawal, sans-serif',
                fontWeight: '700',
                fontSize: '14px',
                color: '#818181',
                marginTop: '3px',
              }}
            >
              د. محمد عبد الحميد
            </Typography>
          </Box>
        </Box>

        {/* Search Section */}
        {isSmallScreen ? (
          <Box>
            <IconButton onClick={() => setShowSearch(!showSearch)}>
              <SearchIcon />
            </IconButton>
            {showSearch && (
              <Box sx={{ position: 'absolute', top: '80px', right: '30px', zIndex: '10', width: 'calc(100% - 92px)' }}>
                <SearchField />
              </Box>
            )}
          </Box>
        ) : (
          <SearchField />
        )}

        {/* Action Buttons or More Icon */}
        {isSmallScreen ? (
          <Box>
            <IconButton
              onClick={handleMoreMenuOpen}
              sx={{ position: 'relative', zIndex: 11 }}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={moreMenuAnchorEl}
              open={Boolean(moreMenuAnchorEl)}
              onClose={handleMoreMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              sx={{ zIndex: 12 }}
            >
              <MenuItem sx={{ display: 'flex', alignItems: 'center', gap: 1, direction: 'rtl' }}>
                <NotificationsButton
                  showNotifications={showNotifications}
                  setShowNotifications={setShowNotifications}
                  messages={messages}
                  newMessage={newMessage}
                  handleMaxLimitClick={handleMaxLimitClick}
                />
                <Typography sx={{ fontSize: '14px', fontFamily: 'Tajawal', textAlign: 'right' }}>الإشعارات</Typography>
              </MenuItem>
              <MenuItem sx={{ display: 'flex', alignItems: 'center', gap: 1, direction: 'rtl', justifyContent: 'flex-end' }}>
  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
    <MessagesButton
      showMessages={showMessages}
      setShowMessages={setShowMessages}
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      messageUsers={messageUsers}
    />
    <Typography sx={{ fontSize: '14px', fontFamily: 'Tajawal', textAlign: 'right' }}>
      الرسائل
    </Typography>
  </Box>
</MenuItem>

              <MenuItem sx={{ display: 'flex', alignItems: 'center', gap: 1, direction: 'rtl' }}>
                <AddButton />
                <Typography sx={{ fontSize: '14px', fontFamily: 'Tajawal', textAlign: 'right' }}>إضافة</Typography>
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', gap: '10px' }}>
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
  );
}

export default Header;
