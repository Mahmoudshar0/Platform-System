import React from 'react';
import { Box, Typography, Menu, MenuItem } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MessageIcon from '@mui/icons-material/Message';
import CloseIcon from '@mui/icons-material/Close';
import MessageList from './MessageList';
// ------------------------------------------------

const MessagesButton = ({ showMessages, setShowMessages, anchorEl, setAnchorEl, messageUsers }) => {
  console.log(messageUsers);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggleMessages = () => {
    setShowMessages(!showMessages);
  };

  // دالة لإغلاق مربع الرسائل لما تضغطي برا
  const handleClickAway = () => {
    setShowMessages(false);
    setAnchorEl(null); // إغلاق القايمة كمان لو مفتوحة
  };

  return (
    <Box
      sx={{
        width: '35px',
        height: '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #CCCCCC',
        borderRadius: '50%',
        cursor: 'pointer',
        position: 'relative',
      }}
      onClick={handleToggleMessages}
    >
      <MessageIcon sx={{ fontSize: '16px', color: '#555555' }} />
      {showMessages && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box
            sx={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '350px',
              backgroundColor: '#fff',
              borderRadius: '10px',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
              padding: '15px',
              zIndex: '2000',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', flexDirection: 'column', alignItems: 'flex-end' }}>
              <CloseIcon
                sx={{ cursor: 'pointer', color: '#818181', fontSize: '22px' }}
                onClick={() => setShowMessages(false)}
              />
              <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 'bold', textAlign: 'center', marginTop: '5px' }}>
                الرسائل
              </Typography>
              <hr
                style={{
                  width: '95%',
                  border: '0.5px solid #ddd',
                  marginTop: '5px',
                }}
              />
              <MessageList user={messageUsers} onMoreClick={handleClick} />
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
        </ClickAwayListener>
      )}
    </Box>
  );
};

export default MessagesButton;