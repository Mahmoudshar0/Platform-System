import React from 'react';
import { LinearProgress } from '@mui/material';

const ProgressBarContent = ({ percentage }) => {
  return (
    <LinearProgress
      variant="determinate"
      value={percentage}
      sx={{
        height: 8,
        borderRadius: 4,
        bgcolor: '#e5e7eb',
        '& .MuiLinearProgress-bar': {
          bgcolor: '#3b82f6',
          borderRadius: 4,
        },
      }}
    />
  );
};

export default ProgressBarContent;