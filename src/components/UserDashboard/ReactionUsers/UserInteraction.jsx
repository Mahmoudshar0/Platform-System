// UserInteraction.jsx
import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Button,
  Tabs,
  Tab,
  TextField,
  Card,
  CardMedia,
  CardContent
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { LogoDev } from '@mui/icons-material';

const groups = Array.from({ length: 6 }, (_, index) => {
  const numberInArabic = ['الأولى', 'الثانية', 'الثالثة', 'الرابعة', 'الخامسة', 'السادسة'];

  return {
    title: `كروب الشعبة ${numberInArabic[index]}`,
    description: 'بإمكانك أن تفرز كل هذه النصوص أو العديد من النصوص الأخرى المتعلقة لزيادة عدد...',
    members: 100 + index * 5, // مثال لتغيير عدد الأعضاء بشكل بسيط
    image: `https://source.unsplash.com/400x200/?group,people,${index}` // صور مختلفة تلقائياً
  };
});

const UserInteraction = () => {
  const [tab, setTab] = React.useState(1);

  return (
    <Box dir="rtl" sx={{ display: 'flex' }}>
      {/* Sidebar placeholder width */}
      <Box sx={{ width: '490px' }} />

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {/* Header Navigation */}
        <Box display="flex" alignItems="center" gap={1} mb={2} justifyContent="flex-start">
          <Typography variant="body2" color="text.secondary">الصفحة الرئيسية</Typography>
          <Typography variant="body2"> / </Typography>
          <Typography variant="body2" fontWeight="bold" color="primary">ملف المستخدم</Typography>
        </Box>

        {/* User Info */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar src="https://randomuser.me/api/portraits/men/75.jpg" sx={{ width: 64, height: 64 }} />
            <Box>
              <Typography fontWeight="bold">عبد الرحمن جمال الدين</Typography>
              <Typography color="text.secondary">طالب</Typography>
            </Box>
          </Box>
           <Button variant="contained" sx={{ mt: 5 }}>تعديل الملف الشخصي</Button>
        </Box>
        <Box borderBottom={1} borderColor="divider" mb={3}></Box>
        {/* Tabs */}
        <Box borderBottom={1} borderColor="divider" mb={3}>
          <Tabs value={tab} onChange={(e, newVal) => setTab(newVal)}>
            <Tab label="الاصدقاء" />
            <Tab label="الكروبات" />
          </Tabs>
        </Box>

        {/* Search and Counter */}
        {tab === 1 && (
          <Box mb={3} display="flex" alignItems="center" justifyContent="space-between">
            <TextField
              placeholder="...بحث"
              InputProps={{ startAdornment: <SearchIcon color="disabled" sx={{ mr: 1 }} /> }}
              sx={{ width: 300 }}
              size="small"
            />
            <Typography color="text.secondary">الكروبات 120</Typography>
          </Box>
        )}

        {/* Groups Grid */}
        <Grid container spacing={2}>
          {groups.map((group, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
              <Card>
            <CardMedia
    component="img"
    height="50"
    image="/images/Avatar-1.png"
    alt="Group Image"
    sx={{
    objectFit: 'contain', // أو 'cover' حسب اللي انتي عايزاه
    width: '100px',       // ممكن تتحكمي في العرض
    margin: 'auto',       // عشان تبقى في النص
    borderRadius: '8px'   // لو عايزه أطراف ناعمة
  }}
/>
                <CardContent>
                  <Typography fontWeight="bold">{group.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
                    {group.description}
                  </Typography>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="caption">عدد المشتركين {group.members}</Typography>
                    <Box display="flex">
                      <Avatar src="https://randomuser.me/api/portraits/women/32.jpg" sx={{ width: 24, height: 24, ml: -1, border: '2px solid white' }} />
                      <Avatar src="https://randomuser.me/api/portraits/men/34.jpg" sx={{ width: 24, height: 24, ml: -1, border: '2px solid white' }} />
                      <Avatar src="https://randomuser.me/api/portraits/men/36.jpg" sx={{ width: 24, height: 24, ml: -1, border: '2px solid white' }} />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default UserInteraction;
