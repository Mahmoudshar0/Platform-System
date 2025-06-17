import React from 'react';
import { Box, Typography, Paper, LinearProgress } from '@mui/material';

const UserStats = ({ stats }) => {
  return (
    <Paper sx={{ p: 3, borderRadius: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'right' }}>
        إحصائيات التعلم
      </Typography>
      
      {stats.map((stat, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
            <Typography variant="body2" color="text.secondary">
              {stat.value}%
            </Typography>
            <Typography variant="body2" fontWeight="medium">
              {stat.label}
            </Typography>
          </Box>
          <LinearProgress 
            variant="determinate" 
            value={stat.value} 
            sx={{ 
              height: 8, 
              borderRadius: 5,
              bgcolor: 'rgba(0,0,0,0.05)',
              '& .MuiLinearProgress-bar': {
                bgcolor: stat.color,
              }
            }} 
          />
        </Box>
      ))}
    </Paper>
  );
};

export default UserStats;