import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Stack,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  Drawer,
} from '@mui/material';
import { 
  X,
  Home,
  FolderOpen,
  FileText,
  ClipboardList,
  Users,
  MessageSquare,
  Settings,
  Menu,
} from 'lucide-react';

function AddTestPage() {
  const [testName, setTestName] = useState('');
  const [questionContent, setQuestionContent] = useState('');
  const [hours, setHours] = useState(5);
  const [score, setScore] = useState(5);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isMobile = useMediaQuery('(max-width:900px)');
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const menuItems = [
    { text: 'الصفحة الرئيسية', icon: <Home size={20} /> },
    { text: 'إدارة المحتوى', icon: <FolderOpen size={20} /> },
    { text: 'إدارة الواجبات', icon: <FileText size={20} /> },
    { text: 'إدارة الاختبارات', icon: <ClipboardList size={20} /> },
    { text: 'التفاعل مع الطلاب', icon: <Users size={20} /> },
    { text: 'بث مباشر', icon: <MessageSquare size={20} /> },
    { text: 'الإعدادات', icon: <Settings size={20} /> },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        
        bgcolor: '#454F63',
        color: 'white',
        height: '100%',
      }}
    >
      <List sx={{ py: 2 }}>
        {menuItems.map((item, index) => (
          <ListItem
            key={index}
            button
            sx={{
              py: 1.5,
              px: 3,
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'white', minWidth: 32 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              sx={{ 
                '& .MuiTypography-root': {
                  fontSize: '0.9rem',
                  fontWeight: 500
                }
              }} 
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f5f5f5', direction: 'rtl' }}>
      {/* Mobile Menu Button */}
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            position: 'fixed',
            right: 16,
            top: 16,
            zIndex: 1300,
            bgcolor: '#454F63',
            color: 'white',
            '&:hover': {
              bgcolor: '#363d4d',
            },
          }}
        >
          <Menu />
        </IconButton>
      )}

      {/* Sidebar */}
      {isMobile ? (
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            '& .MuiDrawer-paper': { 
              width: 240,
              boxSizing: 'border-box',
            },
          }}
        >
          {drawer}
        </Drawer>
      ) : (
        <Box
          sx={{
            width: 240,
            flexShrink: 0,
            bgcolor: '#454F63',
            color: 'white',
            position: 'fixed',
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 1200,
          }}
        >
          {drawer}
        </Box>
      )}

      {/* Main content */}
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          mr: isMobile ? 0 : '240px',
          p: isSmallScreen ? 2 : 3,
          width: isMobile ? '100%' : 'calc(100% - 240px)',
          mt: isMobile ? '64px' : 0,
        }}
      >
        <Box sx={{ 
          maxWidth: '800px', 
          mx: 'auto', 
          bgcolor: 'white',
          borderRadius: 1,
          p: isSmallScreen ? 2 : 3,
          position: 'relative'
        }}>
          <IconButton 
            sx={{ 
              position: 'absolute', 
              left: isSmallScreen ? 4 : 8, 
              top: isSmallScreen ? 4 : 8,
            }}
            onClick={() => console.log('close')}
          >
            <X size={20} />
          </IconButton>

          <Typography variant="h6" sx={{ mb: 4, textAlign: 'right' }}>
            إضافة اختبار
          </Typography>

          <Stack spacing={3}>
            <TextField
              fullWidth
              placeholder="ادخل السؤال"
              variant="outlined"
              value={testName}
              onChange={(e) => setTestName(e.target.value)}
              InputProps={{
                sx: { '& input': { textAlign: 'right' } }
              }}
            />

            <TextField
              fullWidth
              placeholder="ادخل محتوى السؤال"
              variant="outlined"
              multiline
              rows={4}
              value={questionContent}
              onChange={(e) => setQuestionContent(e.target.value)}
              InputProps={{
                sx: { '& textarea': { textAlign: 'right' } }
              }}
            />

            <Typography variant="subtitle1" sx={{ textAlign: 'right' }}>
              الاختيارات
            </Typography>

            {[1, 2, 3, 4, 5].map((num) => (
              <TextField
                key={num}
                fullWidth
                placeholder={`اختر التفسير ${num}`}
                variant="outlined"
                sx={{ bgcolor: '#f5f5f5' }}
                InputProps={{
                  sx: { '& input': { textAlign: 'right' } }
                }}
              />
            ))}

            <Stack 
              direction={isSmallScreen ? 'column' : 'row'} 
              spacing={isSmallScreen ? 2 : 2}
            >
              <FormControl fullWidth>
                <InputLabel sx={{ right: 14, left: 'auto' }}>
                  الوقت المطلوب لتسليم الاختبار
                </InputLabel>
                <Select
                  value={hours}
                  label="الوقت المطلوب لتسليم الاختبار"
                  onChange={(e) => setHours(e.target.value)}
                >
                  <MenuItem value={5}>5 ساعات</MenuItem>
                  <MenuItem value={4}>4 ساعات</MenuItem>
                  <MenuItem value={3}>3 ساعات</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel sx={{ right: 14, left: 'auto' }}>
                  درجة الاختبار
                </InputLabel>
                <Select
                  value={score}
                  label="درجة الاختبار"
                  onChange={(e) => setScore(e.target.value)}
                >
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Button 
              variant="contained" 
              fullWidth 
              sx={{ 
                bgcolor: '#1a237e',
                '&:hover': {
                  bgcolor: '#0d47a1'
                },
                height: 48
              }}
            >
              ارسال الاختبارات
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default AddTestPage;
















