import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Grid, 
  Container,
  useMediaQuery,
  useTheme
} from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const SocialMediaApp = () => {
  const [activeTab, setActiveTab] = useState('friends');
  const [friendRequests, setFriendRequests] = useState([
    { id: 1, name: "محمد أحمد" },
    { id: 2, name: "علي حسن" },
    { id: 3, name: "أحمد محمود" },
    { id: 4, name: "يوسف خالد" },
    { id: 5, name: "عمر سامي" },
    { id: 6, name: "محمود تامر" },
    { id: 7, name: "خالد وليد" },
    { id: 8, name: "طارق فاروق" },
    { id: 9, name: "بسام رامي" },
    { id: 10, name: "سامي كريم" },
  ]);
  
  const [students] = useState([
    { id: 1, name: "محمد أحمد" },
    { id: 2, name: "علي حسن" },
    { id: 3, name: "أحمد محمود" },
    { id: 4, name: "يوسف خالد" },
    { id: 5, name: "عمر سامي" },
    { id: 6, name: "محمود تامر" },
    { id: 7, name: "خالد وليد" },
    { id: 8, name: "طارق فاروق" },
    { id: 9, name: "بسام رامي" },
    { id: 10, name: "سامي كريم" },
    { id: 11, name: "مازن عماد" },
    { id: 12, name: "ناصر ربيع" },
    { id: 13, name: "فارس سليم" },
    { id: 14, name: "رامي نادر" },
    { id: 15, name: "تامر وسام" },
    { id: 16, name: "وليد ياسر" },
    { id: 17, name: "ياسين باسم" },
    { id: 18, name: "مصطفى حسان" },
    { id: 19, name: "حسام عادل" },
    { id: 20, name: "أنس ماهر" },
    { id: 21, name: "زياد ناصر" },
    { id: 22, name: "سليم حازم" },
    { id: 23, name: "عبدالله رامز" },
    { id: 24, name: "هشام جمال" },
    { id: 25, name: "جلال رفعت" },
    { id: 26, name: "سعد نعيم" },
    { id: 27, name: "نعيم فؤاد" },
    { id: 28, name: "فهد سعد" },
    { id: 29, name: "صلاح عاصم" },
    { id: 30, name: "مجد هيثم" }
  ]);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handleAcceptRequest = (id) => {
    setFriendRequests(friendRequests.filter(request => request.id !== id));
  };
  
  const handleRejectRequest = (id) => {
    setFriendRequests(friendRequests.filter(request => request.id !== id));
  };

  return (
    <Box sx={{ 
      width: '85%',
      minHeight: '100vh', 
      backgroundColor: '#ffffff',
      direction: 'rtl',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
    }}>
      {/* شريط التنقل */}
      <AppBar 
        position="static" 
        sx={{ 
          width: '100%',
          backgroundColor: 'white', 
          boxShadow: 'none',
          borderBottom: '1px solid #e0e0e0'
        }}
      >
        <Toolbar sx={{ justifyContent: 'flex-start' }}>
          <Box sx={{ display: 'flex', gap: '20px' }}>
            <Button 
              onClick={() => setActiveTab('friends')}
              sx={{
                color: activeTab === 'friends' ? '#3351FF' : '#757575',
                position: 'relative',
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '1rem',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: activeTab === 'friends' ? '2px' : 0,
                  backgroundColor: '#3351FF',
                }
              }}
            >
              الأصدقاء
            </Button>
            <Button 
              onClick={() => setActiveTab('requests')}
              sx={{
                color: activeTab === 'requests' ? '#3351FF' : '#757575',
                position: 'relative',
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '1rem',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: activeTab === 'requests' ? '2px' : 0,
                  backgroundColor: '#3351FF',
                }
              }}
            >
              الطلبات
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      
      {/* المحتوى الرئيسي */}
      <Container 
        maxWidth={false}
        sx={{ 
          width: '100%',
          py: 4,
          px: 3
        }}
      >
        {activeTab === 'friends' ? (
          <>
            <Typography 
              variant="h5" 
              fontWeight="600" 
              mb={4} 
              textAlign="center"
              sx={{ color: '#333' }}
            >
              طلاب الجامعة
            </Typography>
            
            <Grid container spacing={3} justifyContent="center">
              {students.map((student) => (
                <Grid item key={student.id} xs={12} sm={6} md={4} lg={3}>
                  <Card sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '12px', 
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}>
                    <CardMedia
                      component="img"
                      height="160"
                      image={`https://i.pravatar.cc/300?img=${student.id}`}
                      alt={student.name}
                      sx={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}
                    />
                    <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                      <Typography variant="h6" fontWeight="600" gutterBottom>
                        {student.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                        طالب
                      </Typography>
                      <Button 
                        variant="contained" 
                        startIcon={<PersonAddAlt1Icon />}
                        fullWidth
                        sx={{ 
                          mt: 1,
                          borderRadius: '8px',
                          backgroundColor: '#3351FF',
                          textTransform: 'none',
                          fontWeight: 500,
                          '&:hover': {
                            backgroundColor: '#2a43d9'
                          }
                        }}
                      >
                        إضافة صديق
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </>
        ) : (
          <>
            <Typography 
              variant="h5" 
              fontWeight="600" 
              mb={4} 
              textAlign="center"
              sx={{ color: '#333' }}
            >
              طلبات الصداقة
            </Typography>
            
            {friendRequests.length === 0 ? (
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '300px'
              }}>
                <Typography variant="h6" color="textSecondary">
                  لا توجد طلبات صداقة جديدة
                </Typography>
              </Box>
            ) : (
              <Grid container spacing={3} justifyContent="center">
                {friendRequests.map((request) => (
                  <Grid item key={request.id} xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '12px', 
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-5px)'
                      }
                    }}>
                      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ textAlign: 'center', mb: 2 }}>
                          <CardMedia
                            component="img"
                            height="140"
                            image={`https://i.pravatar.cc/300?img=${request.id}`}
                            alt={request.name}
                            sx={{ 
                              borderRadius: '8px',
                              mb: 2
                            }}
                          />
                          <Typography variant="h6" fontWeight="600" gutterBottom>
                            {request.name}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" gutterBottom>
                            طالب
                          </Typography>
                        </Box>
                        
                        <Box sx={{ 
                          mt: 'auto',
                          display: 'flex', 
                          flexDirection: 'column',
                          gap: '8px',
                          width: '100%'
                        }}>
                          <Button 
                            variant="contained" 
                            color="primary" 
                            fullWidth
                            onClick={() => handleAcceptRequest(request.id)}
                            startIcon={<CheckIcon />}
                            sx={{ 
                              borderRadius: '8px',
                              textTransform: 'none',
                              fontWeight: 500
                            }}
                          >
                            قبول طلب الصداقة
                          </Button>
                          <Button 
                            variant="outlined" 
                            fullWidth
                            onClick={() => handleRejectRequest(request.id)}
                            startIcon={<CloseIcon />}
                            sx={{ 
                              borderRadius: '8px',
                              backgroundColor: '#EBEBEB',
                              borderColor: '#EBEBEB',
                              color: '#333',
                              textTransform: 'none',
                              fontWeight: 500,
                              '&:hover': {
                                backgroundColor: '#D5D5D5',
                                borderColor: '#D5D5D5'
                              }
                            }}
                          >
                            رفض طلب الصداقة
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}
          </>
        )}
      </Container>
      
      {/* تذييل الصفحة */}
      <Box sx={{ 
        width: '100%',
        backgroundColor: '#f5f5f5', 
        py: 2,
        borderTop: '1px solid #e0e0e0'
      }}>
      
      </Box>
    </Box>
  );
};

export default SocialMediaApp;