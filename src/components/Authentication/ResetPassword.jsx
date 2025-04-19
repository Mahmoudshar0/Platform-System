import React, { useState } from 'react';
import { Box, Typography, TextField, Button, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const ResetPasswordPage = () => {
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [showPassword, setShowPassword] = useState(false);
   const [showConfirm, setShowConfirm] = useState(false);

const handleTogglePassword = () => setShowPassword((prev) => !prev);
const handleToggleConfirm = () => setShowConfirm((prev) => !prev);

const handleSubmit = () => {
   if (password !== confirmPassword) {
      alert('كلمة المرور غير متطابقة!');
   } else {
      alert('تم تغيير كلمة المرور بنجاح');
   }
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
         flexDirection: "column",
         alignItems: {
            xs: 'center',
            md: 'center',
         },
         justifyContent: 'center',
         gap: 1,
         }}
      >
      <Box
      component="img"
      src="./Public/images/logo.jpg"
      alt="Logo"
      sx={{ width: 250, height: 250 }}
      />

      <Typography variant="body1" mt={2}>
      كتابة كلمة المرور الجديدة
      </Typography>

      <Box width="80%" maxWidth="400px" mt={1}>
      <Typography fontSize="14px" mb={0.5}>
         كلمة السر الجديدة
      </Typography>
      <TextField
         fullWidth
         variant="outlined"
         type={showPassword ? 'text' : 'password'}
         placeholder="كلمة السر"
         value={password}
         autoComplete='new-password'
         onChange={(e) => setPassword(e.target.value)}
         InputProps={{
            endAdornment: (
            <InputAdornment position="end">
               <IconButton onClick={handleTogglePassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
               </IconButton>
            </InputAdornment>
            )
         }}
      />
      </Box>

      <Box width="80%" maxWidth="400px" mt={1}>
      <Typography fontSize="14px" mb={0.5}>
         إعادة كتابة كلمة المرور
      </Typography>
      <TextField
         fullWidth
         variant="outlined"
         type={showConfirm ? 'text' : 'password'}
         placeholder="كلمة السر"
         value={confirmPassword}
         onChange={(e) => setConfirmPassword(e.target.value)}
         InputProps={{
            endAdornment: (
            <InputAdornment position="end">
               <IconButton onClick={handleToggleConfirm}>
                  {showConfirm ? <VisibilityOff /> : <Visibility />}
               </IconButton>
            </InputAdornment>
            )
         }}
      />
      </Box>

      <Button
      variant="contained"
      onClick={handleSubmit}
      sx={{
         bgcolor: '#3c4eff',
         width: 250,
         height: 50,
         borderRadius: '8px',
         mt: 3,
         '&:hover': { bgcolor: '#2536d1' }
      }}
      >
      تسجيل الدخول
      </Button>
   </Box>
);
};

export default ResetPasswordPage;
