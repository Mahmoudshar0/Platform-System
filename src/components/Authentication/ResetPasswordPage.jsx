import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import ResetPassword from './ResetPassword';
import LoginInfo from './LoginInfo';

const LoginContainer = styled(Box)(({ theme }) => ({
   display: 'flex',
   direction: 'rtl',
   flexDirection: 'row',
   [theme.breakpoints.down(900)]: {
   flexDirection: 'column-reverse',
   },
}));

const ResetPasswordPage = () => {
return (
   <LoginContainer>
      <ResetPassword />
      <LoginInfo btn={false} />
   </LoginContainer>
);
};

export default ResetPasswordPage;
