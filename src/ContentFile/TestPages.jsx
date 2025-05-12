import React from 'react';
import { Box, Typography } from '@mui/material';
import UploadedTest from '../components/UploadedTest';
import CompletedTest from '../components/CompletedTest';

function TestPages() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        صفحة الاختبارات
      </Typography>
      <Typography variant="body1">
        <Test />
        <UploadedTest />
        <CompletedTest />
      </Typography>
    </Box>
  );
}

export default TestPages;