import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AssignmentIcon from '@mui/icons-material/Assignment';
import QuizIcon from '@mui/icons-material/Quiz';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useUser } from '../../contexst/UserContext';


const MainDashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { user, loading } = useUser();

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography>جاري تحميل البيانات...</Typography>
      </Box>
    );
  }

  // if (!user) {
  //   return (
  //     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  //       <Typography>الرجاء تسجيل الدخول</Typography>
  //     </Box>
  //   );
  // }


  return (

    <Box sx={{ width: { xs: 'calc(100% - 20px)', md: 'calc(100% - 240px)' } }} p={isMobile ? 2 : 5} dir="rtl">
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Box sx={{ mb: 4, textAlign: 'right' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
            مرحباً بك، {user?.name?.split(' ')[0] || 'مستخدم'}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            نتمنى لك يوم دراسي موفق
          </Typography>
        </Box>

        {/* إحصائيات المستخدم */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, borderRadius: 2, height: '100%' }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'right' }}>
                الإحصائيات
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6">12/20</Typography>
                  <Typography variant="body2" color="text.secondary">الدروس المكتملة</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6">8/10</Typography>
                  <Typography variant="body2" color="text.secondary">الواجبات المسلمة</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6">5/8</Typography>
                  <Typography variant="body2" color="text.secondary">الاختبارات المكتملة</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6">85%</Typography>
                  <Typography variant="body2" color="text.secondary">المعدل العام</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2, borderRadius: 2, height: '100%' }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'right' }}>
                الأنشطة الأخيرة
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText
                    primary="تم تسليم واجب البرمجة"
                    secondary="منذ يومين"
                    sx={{ textAlign: 'right' }}
                  />
                  <ListItemIcon>
                    <AssignmentIcon color="primary" />
                  </ListItemIcon>
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText
                    primary="اجتياز اختبار الرياضيات بنسبة 90%"
                    secondary="منذ 3 أيام"
                    sx={{ textAlign: 'right' }}
                  />
                  <ListItemIcon>
                    <QuizIcon color="primary" />
                  </ListItemIcon>
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText
                    primary="إكمال درس أساسيات البرمجة"
                    secondary="منذ أسبوع"
                    sx={{ textAlign: 'right' }}
                  />
                  <ListItemIcon>
                    <MenuBookIcon color="primary" />
                  </ListItemIcon>
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>

        {/* الواجبات القادمة والإعلانات */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, borderRadius: 2 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'right' }}>
                الواجبات القادمة
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText
                    primary="مشروع البرمجة النهائي"
                    secondary="موعد التسليم: 15/12/2023"
                    sx={{ textAlign: 'right' }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText
                    primary="تقرير مادة العلوم"
                    secondary="موعد التسليم: 20/12/2023"
                    sx={{ textAlign: 'right' }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText
                    primary="اختبار نصف الفصل"
                    secondary="موعد الاختبار: 25/12/2023"
                    sx={{ textAlign: 'right' }}
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, borderRadius: 2 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'right' }}>
                إعلانات
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText
                    primary="تغيير موعد محاضرة البرمجة"
                    secondary="تم نشره منذ يومين"
                    sx={{ textAlign: 'right' }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText
                    primary="إضافة مصادر تعليمية جديدة"
                    secondary="تم نشره منذ أسبوع"
                    sx={{ textAlign: 'right' }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText
                    primary="جدول الاختبارات النهائية"
                    secondary="تم نشره منذ أسبوعين"
                    sx={{ textAlign: 'right' }}
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MainDashboard;

