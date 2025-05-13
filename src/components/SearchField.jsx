import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchField = () => {
  return (
    <TextField
      placeholder="بحث..."
      variant="outlined"
      sx={{
        bgcolor: '#F0F0F0',
        borderRadius: '50px',
        width: '35%',
        marginRight:"40px",
        '& .MuiOutlinedInput-root': {
          borderRadius: '50px',
          fontSize: '14px',
          '& input': {
            padding: '8px 14px',
          },
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: '#888', fontSize: '16px' }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchField;
