import React, { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Paper,
  Switch,
  CssBaseline,
  createTheme,
  ThemeProvider
} from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { Divider } from '@mui/material';

// إعداد RTL
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Tajawal, Arial',
  },
});

const NotificationToggle = ({ title, description, checked, onChange }) => (
  <Paper elevation={2} sx={{ p: 2, borderRadius: 3, minHeight: 150 }}>
    <Typography variant="h6" fontWeight="bold" mb={1}>{title}</Typography>
    <Typography variant="body2" color="text.secondary" mb={2}>
      {description}
    </Typography>
    <Switch checked={checked} onChange={onChange} />
  </Paper>
);

// ✅ الإشعارات كمصفوفة بيانات
const notificationOptions = [
  {
    key: 'general',
    title: 'إشعارات عامة',
    description: 'مقسما ولا يدري أخطاء لغوية مواد النص العربي مفيد لمصممي المواقع...',
  },
  {
    key: 'posts',
    title: 'إشعارات المنشورات',
    description: 'مقسما ولا يدري أخطاء لغوية مواد النص العربي مفيد لمصممي المواقع...',
  },
  {
    key: 'tests',
    title: 'إشعارات الاختبارات والواجبات',
    description: 'مقسما ولا يدري أخطاء لغوية مواد النص العربي مفيد لمصممي المواقع...',
  },
  {
    key: 'groups',
    title: 'إشعارات الجروبات',
    description: 'مقسما ولا يدري أخطاء لغوية مواد النص العربي مفيد لمصممي المواقع...',
  },
];

export default function NotificationSettings() {
  const [settings, setSettings] = useState({
    general: false,
    posts: true,
    tests: false,
    groups: true,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box p={4} dir="rtl" sx={{ ml: '250px' }}>
          {/* بطاقة البروفايل */}
          <Paper elevation={3} sx={{ width: 300, mx: 'auto', mb: 4, textAlign: 'center', p: 2, borderRadius: 3 }}>
            <Avatar
              src="https://i.pravatar.cc/150?img=3"
              sx={{ width: 70, height: 70, mx: 'auto', mb: 1 }}
            />
            <Typography fontWeight="bold">أحمد عبدالحكيم</Typography>
            <Typography variant="caption" color="text.secondary">د. أساسيات البرمجة</Typography>
          </Paper>

          {/* عنوان الإعدادات */}
          <Typography variant="h6" textAlign="left" mb={2} fontWeight={"bold"}>الإعدادات</Typography>
          <Divider sx={{ mb: 3 }} />
          {/* خيارات الإشعارات - ديناميكية */}
          <Grid container spacing={3}>
            {notificationOptions.map(({ key, title, description }) => (
              <Grid item xs={12} md={6} key={key}>
                <NotificationToggle
                  title={title}
                  description={description}
                  checked={settings[key]}
                  onChange={() => handleToggle(key)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}
