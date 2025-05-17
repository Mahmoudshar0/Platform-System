import React, { useState } from 'react';
import { Box, Typography, Button, Paper, Stack } from '@mui/material';
import SmsIcon from '@mui/icons-material/Sms';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const PasswordRecoveryMethod = () => {
const [selectedMethod, setSelectedMethod] = useState('sms');

const methodOptions = [
   {
      id: 'sms',
      label: 'إرسال الرمز عبر رسائل Sms',
      icon: <SmsIcon />,
   },
   {
      id: 'whatsapp',
      label: 'إرسال الرمز عبر Whatsapp',
      icon: <WhatsAppIcon />,
   },
];

return (
   <Box
         sx={{
         flex: {
            xs: 0,
            md:1
         },
         padding: {
            xs: '50px 0px 0',
            md: '40px 20px 40px'
         },
         display: 'flex',
         flexDirection: "column",
         alignItems: {
            xs: 'center',
            md: 'center',
         },
         justifyContent: 'center',
         gap: 1,
         }}
      >
      <img
      src="/images/logo.jpg"
      alt="Logo"
      style={{ width: "250px", height: "250px", marginBottom: {
         xs:0,
         md:20
      } }}
      />

      <Typography variant="h6" sx={{ mb: 4 }}>
      اختر الطريقة لاستعادة كلمة المرور
      </Typography>

      <Stack spacing={2} sx={{ width: '100%', maxWidth: 400 }}>
      {methodOptions.map((option) => (
         <Paper
            key={option.id}
            onClick={() => setSelectedMethod(option.id)}
            elevation={selectedMethod === option.id ? 4 : 1}
            sx={{
            borderRadius: "10px",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 2,
            cursor: 'pointer',
            border: selectedMethod === option.id ? '2px solid #5a63ea' : '1px solid #ccc',
            backgroundColor: selectedMethod === option.id ? '#e8eaf6' : '#fff'
            }}
         >
            <Typography variant="body1">
            {option.label} <br /> 0777******7776
            </Typography>
            {option.icon}
         </Paper>
      ))}
      </Stack>

      <Button
      variant="contained"
      sx={{
         mt: 4,
         width: '100%',
         maxWidth: 400,
         backgroundColor: '#5a63ea',
         color: '#fff',
         fontWeight: 'bold',
         '&:hover': {
            backgroundColor: '#3f51b5',
         },
      }}
      >
      إرسال الرمز
      </Button>
   </Box>
);
};

export default PasswordRecoveryMethod;
