import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Stack } from '@mui/material';

const VerificationCodePage = () => {
const [code, setCode] = useState(['', '', '', '']);

const handleChange = (e, index) => {
   const value = e.target.value;
   if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 3) {
      document.getElementById(`code-input-${index + 1}`)?.focus();
      }
   }
};

const handleSubmit = () => {
   alert(`تم إرسال الكود: ${code.join('')}`);
};

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
      flexDirection: {
         xs: 'column',
         md:"column",
         lg: "column"
      },
      alignItems: {
         xs: 'center',
         md: 'center',
      },
      justifyContent: 'center',
      gap: 0,
      direction: "ltr"
      }}
      >
      <Box
      component="img"
      src="./images/logo.jpg"
      alt="Logo"
      sx={{ width: 250, height: 250}}
      />

      <Typography variant="body1" textAlign="center" sx={{mb:1}}>
      ارسال الرمز الذي ارسل عبر SmS
      </Typography>
      <Typography variant="body1" fontWeight="bold" sx={{mb:2}}>
      7777453********00995
      </Typography>

      <Stack direction="row" spacing={1}>
      {code.map((digit, index) => (
         <TextField
            key={index}
            id={`code-input-${index}`}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            inputProps={{
            maxLength: 1,
            style: { textAlign: 'center', fontSize: '1.5rem', margin: '0 5px 0 5px'}
            }}
            sx={{
            width: 60,
            '& .MuiOutlinedInput-root': { borderRadius: '50%' }
            }}
         />
      ))}
      </Stack>

      <Button
      variant="contained"
      sx={{
         bgcolor: '#3c4eff',
         width: 250,
         height: 50,
         borderRadius: '8px',
         mt: 3,
         '&:hover': { bgcolor: '#2536d1' }
      }}
      onClick={handleSubmit}
      >
      تأكيد الرمز
      </Button>
   </Box>
);
};

export default VerificationCodePage;
