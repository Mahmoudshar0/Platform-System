import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

export default function GroupDetail() {
  const { id } = useParams();

  return (
    <Box p={3}>
      <Typography variant="h4">تفاصيل جروب رقم {id}</Typography>
      {/* هنا تجلبين بيانات الجروب من API أو الستيت */}
      <Button onClick={() => window.history.back()}>عودة</Button>
    </Box>
  );
}
