import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Avatar,
  Tabs,
  Tab,
  TextField,
  Divider,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';

export default function UserProfile() {
  const [tab, setTab] = useState(0);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isJoined, setIsJoined] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [profileName, setProfileName] = useState('عبد الرحمن جمال الدين');
  const [profileRole, setProfileRole] = useState('طالب');
  const [profileCode, setProfileCode] = useState('123456');
  const [profileLevel, setProfileLevel] = useState('الفرقة الثالثة');
  const [profileImage, setProfileImage] = useState('/images/profile.jpg');
  const [previewImage, setPreviewImage] = useState(profileImage);

  const friends = [
    { id: 1, name: 'أشرف زرق', role: 'طالب', avatar: '/images/avatar-a.jpg' },
    { id: 2, name: 'منى سمير', role: 'طالب', avatar: '/images/avatar-b.jpg' },
    { id: 3, name: 'كريم أحمد', role: 'طالب', avatar: '/images/avatar-c.jpg' },
    { id: 4, name: 'هناء مصطفى', role: 'طالب', avatar: '/images/avatar-d.jpg' },
    { id: 5, name: 'سامي فؤاد', role: 'طالب', avatar: '/images/avatar-e.jpg' },
  ];

  const groups = [
    { id: 1, title: 'جروب الشعبة الأولى', description: '...', members: 120, image: '/images/group1.jpg' },
    { id: 2, title: 'جروب الشعبة الثانية', description: '...', members: 95, image: '/images/group2.jpg' },
    { id: 3, title: 'جروب الشعبة الثالثة', description: '...', members: 110, image: '/images/group3.jpg' },
    { id: 4, title: 'جروب الشعبة الرابعة', description: '...', members: 80, image: '/images/group4.jpg' },
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
    }
  };

  const saveProfile = () => {
    setProfileImage(previewImage);
    setIsEditing(false);
  };

  return (
    <Box p={3} width="100%" maxWidth="900px" dir="rtl" mx="auto">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="body2" color="gray">الصفحة الرئيسية {'>'} ملف المستخدم</Typography>
      </Box>

      <Box mt={2} mb={2} display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar src={profileImage} sx={{ width: 70, height: 70 }} />
          <Box>
            <Typography variant="h6" fontWeight="bold">{profileName}</Typography>
            <Typography color="text.secondary">{profileRole}</Typography>
            <Typography color="text.secondary">{profileLevel}</Typography>
            <Typography color="text.secondary">كود الطالب: {profileCode}</Typography>
          </Box>
        </Box>

        <Box display="flex" gap={2}>
          {!isEditing ? (
            <Button variant="contained" color="primary" onClick={() => setIsEditing(true)}>
              تعديل صورة البروفايل
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={saveProfile}>
              تعديل الملف الشخصي
            </Button>
          )}
        </Box>
      </Box>

      <Divider />

      {isEditing ? (
        <Box p={3} width="100%" maxWidth="400px" mx="auto" dir="rtl" mt={3}>
          <Typography variant="h5" mb={2}>تعديل الملف الشخصي</Typography>
                <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
  <Avatar src={previewImage} sx={{ width: 90, height: 90, mb: 1 }} />
  <Button variant="outlined" component="label">
    تغيير الصورة
    <input type="file" hidden accept="image/*" onChange={handleImageChange} />
  </Button>
  </Box>
          <TextField
            label="الاسم"
            value={profileName}
            fullWidth
            margin="normal"
            InputProps={{ readOnly: true }}
          />
          <TextField
            label="كود الطالب"
            value={profileCode}
            fullWidth
            margin="normal"
            InputProps={{ readOnly: true }}
          />
          <TextField
            label="الفرقة"
            value={profileLevel}
            fullWidth
            margin="normal"
            InputProps={{ readOnly: true }}
          />
          <Box display="flex" gap={2} mt={3}>
            <Button variant="contained" color="primary" onClick={saveProfile}>حفظ</Button>
            <Button variant="outlined" onClick={() => {
              setPreviewImage(profileImage);
              setIsEditing(false);
            }}>إلغاء</Button>
          </Box>
        </Box>
      ) : (
        <>
          <Tabs
            value={tab}
            onChange={(_, val) => {
              setTab(val);
              setSelectedGroup(null);
              setIsJoined(false);
            }}
            sx={{ mb: 3 }}
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab label="الأصدقاء" />
            <Tab label="الجروبات" />
          </Tabs>

          {/* Friends Tab */}
          {tab === 0 && (
            <>
              <Box mt={2} display="flex" justifyContent="flex-start">
                <TextField sx={{ width: 300 }} placeholder="بحث..." size="small" />
              </Box>

              <Typography mt={1} fontSize="14px" color="gray">
                الأصدقاء {friends.length}
              </Typography>

              <Box mt={2}>
                {friends.map((f) => (
                  <Box key={f.id} display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Avatar src={f.avatar}>{f.name.charAt(0)}</Avatar>
                      <Box>
                        <Typography fontWeight="bold">{f.name}</Typography>
                        <Typography fontSize="12px" color="gray">{f.role}</Typography>
                      </Box>
                    </Box>
                    <Button variant="contained" color="primary" size="small">إضافة صديق</Button>
                  </Box>
                ))}
              </Box>
            </>
          )}

          {/* Groups Tab */}
          {tab === 1 && (
            <>
              {selectedGroup ? (
                <Box>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setSelectedGroup(null);
                      setIsJoined(false);
                    }}
                    sx={{ mb: 2 }}
                  >
                    ⬅ عودة إلى الجروبات
                  </Button>

                  <Box display="flex" alignItems="center" gap={2} mb={1}>
                    <Avatar src="/public/images/logo2.png" sx={{ width: 60, height: 60 }} />
                    <Typography variant="h4">جروب الدفعة الثالثة</Typography>
                  </Box>

                  <Typography mt={1} color="text.secondary">{selectedGroup.description}</Typography>
                  <Typography mt={1}>عدد المشتركين: {selectedGroup.members}</Typography>

                  {!isJoined ? (
                    <Box display="flex" gap={2} mt={2}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setIsJoined(true)}
                      >
                        الانضمام للجروب
                      </Button>
                    </Box>
                  ) : (
                    <Box mt={3}>
                      <Typography variant="h6" mb={2}>شات الجروب</Typography>
                      <Box
                        sx={{
                          height: 300,
                          border: '1px solid #ccc',
                          borderRadius: 2,
                          p: 2,
                          overflowY: 'auto',
                          bgcolor: '#f9f9f9',
                        }}
                      >
                        <Box mb={1}>
                          <Typography variant="body2" fontWeight="bold">أحمد سمير:</Typography>
                          <Typography variant="body2">مرحبا بالجميع في جروب الفرقة الثالثة!</Typography>
                        </Box>
                        <Box mb={1}>
                          <Typography variant="body2" fontWeight="bold">سارة علي:</Typography>
                          <Typography variant="body2">هل أحد لديه ملخص المحاضرة الأخيرة؟</Typography>
                        </Box>
                      </Box>

                      <TextField
                        fullWidth
                        size="small"
                        placeholder="اكتب رسالة..."
                        disabled
                        sx={{ mt: 2 }}
                      />
                    </Box>
                  )}
                </Box>
              ) : (
                <Card sx={{ maxWidth: 600, margin: 'auto', textAlign: 'center', p: 2 }}>
                  <CardMedia
                    component="img"
                    image="/public/images/logo.jpg"
                    alt="الفرقة الثالثة - كلية الهندسة"
                    sx={{ height: 180, objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                      الفرقة الثالثة
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      المعهد العالي للحاسب الالي وادارة الاعمال بالزرقا-دمياط
                    </Typography>
                    <Typography mt={2}>
                      عدد المشتركين: {groups[0]?.members || 120}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2 }}
                      onClick={() => setSelectedGroup(groups[0])}
                    >
                      انضمام للجروب
                    </Button>
                  </CardContent>
                </Card>
              )}
            </>
          )}
        </>
      )}
    </Box>
  );
}