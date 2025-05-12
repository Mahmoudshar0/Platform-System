import React from 'react';
import { Box, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import OnlineStatus from './OnlineStatus';

const MessageItem = ({ user, onMoreClick, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        padding: '12px 16px',
        width: '100%',
        cursor: 'pointer',
        '&:hover': { backgroundColor: '#f5f5f5' },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <img
          src={user.avatar}
          alt={user.name}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
        {user.isOnline && (
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '12px',
              height: '12px',
              backgroundColor: '#22c55e',
              border: '2px solid #fff',
              borderRadius: '50%',
            }}
          />
        )}
      </Box>

      <Box sx={{ flex: 1, marginLeft: '16px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '15px', fontWeight: 'bold', color: '#111827' }}>
            {user.name}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '12px', color: '#9ca3af', marginLeft: '8px' }}>
              {user.timestamp}
            </Typography>
            <MoreVertIcon
              sx={{
                width: '20px',
                height: '20px',
                color: '#9ca3af',
                cursor: 'pointer',
                '&:hover': { color: '#4b5563' },
              }}
              onClick={(e) => {
                e.stopPropagation(); // علشان ما يفتحش الشات لو دوسنا على More
                onMoreClick(user);
              }}
            />
          </Box>
        </Box>
        <Typography sx={{ fontSize: '14px', color: '#6b7280', marginY: '5px' }}>
          {user.lastMessage}
        </Typography>
        <OnlineStatus isOnline={user.isOnline} />
      </Box>
    </Box>
  );
};

export default MessageItem;
