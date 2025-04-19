import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import PasswordRecoveryMethod from './PasswordRecoveryMethod';
import LoginInfo from './LoginInfo';

const LoginContainer = styled(Box)(({ theme }) => ({
   display: 'flex',
   direction: 'rtl',
   flexDirection: 'row',
   minHeight: '100vh',
   [theme.breakpoints.down(991)]: {
   flexDirection: 'column-reverse',
   minHeight: '120vh',
   },
}));

const PasswordRecoveryPage = () => {
return (
   <LoginContainer>
      <PasswordRecoveryMethod />
      <LoginInfo btn={false} />
   </LoginContainer>
);
};

export default PasswordRecoveryPage;
