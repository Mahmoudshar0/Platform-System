import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import MessageLists from './MessageLists';
import { useTheme } from '@mui/material/styles';

const MessagesPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleBack = () => {
    setSelectedUser(null);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* عرض القائمة */}
      {(!isSmallScreen || !selectedUser) && (
        <Box sx={{ width: isSmallScreen ? '100%' : '35%' }}>
          <MessageLists user={dummyUsers} onMoreClick={() => {}} onSelect={handleSelectUser} />
        </Box>
      )}

      {/* عرض المحادثة */}
      {selectedUser && (
        <Box sx={{ flex: 1 }}>
          <ChatWindow user={selectedUser} onBack={handleBack} />
        </Box>
      )}
    </Box>
  );
};

export default MessagesPage;
