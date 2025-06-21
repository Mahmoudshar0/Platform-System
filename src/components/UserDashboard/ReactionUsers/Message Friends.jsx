import React, { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Button,
  Snackbar,
  Alert,
  Divider,
} from '@mui/material';

const friendsList = [
  { id: 1, name: 'أشرف زرق' },
  { id: 2, name: 'منى سمير' },
  { id: 3, name: 'كريم أحمد' },
  { id: 4, name: 'هناء مصطفى' },
  { id: 5, name: 'سامي فؤاد' },
];

export default function MessageFriends() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState('');

  const handleMessageClick = (friendName) => {
    setSelectedFriend(friendName);
    setOpenSnackbar(true);
  };

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box p={4} width="700px" mx="auto" dir="rtl">
      <Typography variant="h5" fontWeight="bold" mb={2}>
        قائمة الأصدقاء للمراسلة
      </Typography>

      <Divider />

      {friendsList.map((friend) => (
        <Box
          key={friend.id}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          my={2}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <Avatar sx={{ bgcolor: '#1976d2' }}>
              {friend.name.charAt(0)}
            </Avatar>
            <Typography>{friend.name}</Typography>
          </Box>

          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleMessageClick(friend.name)}
          >
            مراسلة
          </Button>
        </Box>
      ))}

      {/* Snackbar message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="info" onClose={handleClose}>
          بدأ محادثة مع {selectedFriend}
        </Alert>
      </Snackbar>
    </Box>
  );
}
