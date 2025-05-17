import React from 'react';
import {
Box,
TextField,
Typography,
Button,
Link,
Stack
} from '@mui/material';
import { Columns } from 'lucide-react';

const LoginForm = () => {
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
         xs: 'row',
         md:"column",
         lg: "column"
      },
      alignItems: {
         xs: 'center',
         md: 'center',
      },
      justifyContent: 'center',
      gap: 0,
      }}
   >
      <Box
      sx={{
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
      }}
      >
      <img
         src="/images/logo.jpg"
         alt="Logo"
         style={{ width: "250px", height: "250px", marginBottom:20 }}
      />
      </Box>

      <Box
      sx={{
         width: '100%',
         maxWidth: {
            xs: '350px',
            md: '400px',
         },
         textAlign: 'right',
      }}
      >
      <Typography variant="h6" sx={{ mb: 3 }}>
         البريد الإلكتروني
      </Typography>
      <TextField
         fullWidth
         placeholder="ادخل البريد الإلكتروني"
         variant="outlined"
         sx={{ mb: 3 }}
         inputProps={{ style: { textAlign: 'right' } }}
      />

      <Typography variant="h6" sx={{ mb: 3 }}>
         كلمة السر
      </Typography>
      <TextField
         fullWidth
         type="password"
         placeholder="ادخل كلمة السر"
         variant="outlined"
         sx={{ mb: 2 }}
         inputProps={{ style: { textAlign: 'right' } }}
      />

      <Link href="#" underline="hover" sx={{ display: 'block', mb: 3 }}>
         استعادة كلمة المرور
      </Link>

      <Button
         variant="contained"
         fullWidth
         sx={{
            backgroundColor: '#5a63ea',
            color: '#fff',
            height: 45,
            fontWeight: 'bold',
            '&:hover': {
            backgroundColor: '#3f51b5',
            },
         }}
      >
         تسجيل الدخول
      </Button>
      </Box>
   </Box>
);
};

export default LoginForm;
