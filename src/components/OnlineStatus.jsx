import React from 'react';
import { Box, Typography } from '@mui/material';

const OnlineStatus = ({ isOnline }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          marginRight: '8px',
          backgroundColor: isOnline ? '#22c55e' : '#9ca3af',
        }}
      />
      <Typography sx={{ fontSize: '12px', color: '#6b7280' }}>
        {isOnline ? 'متصل الآن' : 'غير متصل'}
      </Typography>
    </Box>
  );
};

export default OnlineStatus;
