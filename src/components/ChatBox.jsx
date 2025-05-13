import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const ChatBox = ({ user }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { user: user.name, text: message }]);
      setMessage('');
    }
  };

  return (
    <Box sx={{ padding: '16px', maxWidth: '400px', margin: '0 auto', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <Typography variant="h6" sx={{ marginBottom: '8px' }}>
        محادثة مع {user.name}
      </Typography>

      <Box sx={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '16px' }}>
        {messages.map((msg, index) => (
          <Box key={index} sx={{ display: 'flex', flexDirection: 'column', marginBottom: '8px' }}>
            <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>{msg.user}:</Typography>
            <Typography sx={{ fontSize: '14px', color: '#555' }}>{msg.text}</Typography>
          </Box>
        ))}
      </Box>

      <TextField
        variant="outlined"
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{ marginBottom: '8px' }}
        placeholder="أكتب رسالتك هنا..."
      />
      <Button onClick={handleSendMessage} variant="contained" sx={{ width: '100%' }}>
        إرسال
      </Button>
    </Box>
  );
};

export default ChatBox;
