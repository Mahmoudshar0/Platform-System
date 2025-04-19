import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import LoginForm from './LoginForm';
import LoginInfo from './LoginInfo';

const LoginContainer = styled(Box)(({ theme }) => ({
   display: 'flex',
   direction: 'rtl',
   flexDirection: 'row',
   [theme.breakpoints.down(900)]: {
   flexDirection: 'column-reverse',
   },
}));

const LoginPage = () => {
return (
   <LoginContainer>
      <LoginForm />
      <LoginInfo btn={true} />
   </LoginContainer>
);
};

export default LoginPage;
