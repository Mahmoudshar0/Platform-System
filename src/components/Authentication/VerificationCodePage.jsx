import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import VerificationCode from './VerificationCode';
import LoginInfo from './LoginInfo';

const LoginContainer = styled(Box)(({ theme }) => ({
   display: 'flex',
   direction: 'rtl',
   flexDirection: 'row',
   [theme.breakpoints.down(900)]: {
   flexDirection: 'column-reverse',
   },
}));

const VerificationCodePage = () => {
return (
   <LoginContainer>
      <VerificationCode />
      <LoginInfo btn={false} />
   </LoginContainer>
);
};

export default VerificationCodePage;
