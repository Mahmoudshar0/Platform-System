import React from 'react';
import { Box, Typography } from '@mui/material';
import MessageItem from './MessageList';

const MessageLists = ({ user, onMoreClick }) => {
  // فحص لو users مش موجود أو فاضي
  console.log(user);
  if (!user || user.length === 0) {
    return (
      <Box sx={{ padding: '16px', textAlign: 'center' }}>
        <Typography sx={{ fontSize: '14px', color: '#6b7280' }}>
          لا توجد رسائل متاحة
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: {
          xs: '100%',
          sm: '100%',
          md: '400px',
        },
        margin: '0 auto',
        px: { xs: 2, sm: 3, md: 0 },
      }}
    >
      {user.map((user, index) => (
        <MessageItem
          key={user?.id || index}
          user={user}
          onMoreClick={onMoreClick}
        />
      ))}
    </Box>
  );
};

export default MessageLists;
