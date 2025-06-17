import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, IconButton, Stack, Box } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';

const AddButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* زر الإضافة */}
      <Box
        onClick={handleOpen}
        sx={{
          width: '35px',
          height: '35px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #CCCCCC',
          borderRadius: '50%',
          cursor: 'pointer',
          position: 'relative',
          '@media (max-width: 600px)': {
            width: '30px',
            height: '30px',
          },
        }}
      >
        <AddIcon sx={{ fontSize: '18px', color: '#0026FF', width: '24px', height: '24px', fontWeight: '500' }} />
      </Box>

      {/* الديالوج */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle
          sx={{ m: 0, p: 2, textAlign: "right", fontFamily: "Arial" }}
        >
          روابط
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              left: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers sx={{ direction: "rtl", display: 'flex', justifyContent: 'center' }}>
          {/* استخدام Stack لتوزيع المسافات بين الروابط */}
          <Stack spacing={2} sx={{ width: '100%', textAlign: 'center' }}>
            <MUILink
              component={RouterLink}
              to="/"
              underline="none"
              sx={{
                display: 'block',
                width: '100%', // أخذ عرض الـ Dialog بالكامل
                color: 'text.primary',
                fontSize: '16px',
                fontFamily: 'Arial',
                transition: '0.3s',
                padding: '10px 0', // إضافة مسافة حول النص
                textAlign: 'center', // محاذاة النص في المنتصف
                '&:hover': { color: '#0026FF' },
                '@media (max-width: 600px)': {
                  fontSize: '14px',
                  padding: '8px 0',
                },
              }}
            >
              الصفحة الرئيسية
            </MUILink>
            <MUILink
              component={RouterLink}
              to="/Test"
              underline="none"
              sx={{
                display: 'block',
                width: '100%',
                color: 'text.primary',
                fontSize: '16px',
                fontFamily: 'Arial',
                transition: '0.3s',
                padding: '10px 0',
                textAlign: 'center',
                '&:hover': { color: '#0026FF' },
                '@media (max-width: 600px)': {
                  fontSize: '14px',
                  padding: '8px 0',
                },
              }}
            >
              اختبار
            </MUILink>
            <MUILink
              component={RouterLink}
              to="/video"
              underline="none"
              sx={{
                display: 'block',
                width: '100%',
                color: 'text.primary',
                fontSize: '16px',
                fontFamily: 'Arial',
                transition: '0.3s',
                padding: '10px 0',
                textAlign: 'center',
                '&:hover': { color: '#0026FF' },
                '@media (max-width: 600px)': {
                  fontSize: '14px',
                  padding: '8px 0',
                },
              }}
            >
              فيديو
            </MUILink>
            <MUILink
              component={RouterLink}
              to="/file"
              underline="none"
              sx={{
                display: 'block',
                width: '100%',
                color: 'text.primary',
                fontSize: '16px',
                fontFamily: 'Arial',
                transition: '0.3s',
                padding: '10px 0',
                textAlign: 'center',
                '&:hover': { color: '#0026FF' },
                '@media (max-width: 600px)': {
                  fontSize: '14px',
                  padding: '8px 0',
                },
              }}
            >
              ملف
            </MUILink>
            <MUILink
              component={RouterLink}
              to="/post"
              underline="none"
              sx={{
                display: 'block',
                width: '100%',
                color: 'text.primary',
                fontSize: '16px',
                fontFamily: 'Arial',
                transition: '0.3s',
                padding: '10px 0',
                textAlign: 'center',
                '&:hover': { color: '#0026FF' },
                '@media (max-width: 600px)': {
                  fontSize: '14px',
                  padding: '8px 0',
                },
              }}
            >
              منشور
            </MUILink>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddButton;
