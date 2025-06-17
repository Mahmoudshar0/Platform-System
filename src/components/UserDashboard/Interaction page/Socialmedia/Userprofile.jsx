import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Avatar,
  Tabs,
  Tab,
  TextField,
  useMediaQuery,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import Cookies from 'js-cookie';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

export default function UserProfile() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [userData, setUserData] = useState(null);
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const [newAvatar, setNewAvatar] = useState(null);
  const [preview, setPreview] = useState(null);

  const token = Cookies.get('token');

  const getUser = async () => {
    try {
      if (!token) throw new Error('لم يتم العثور على التوكن');
      const response = await axios.get('http://localhost:5000/api/v1/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data.data);
      setFriends([
        { name: 'أحمد محمد', role: 'صديق' },
        { name: 'ليلى علي', role: 'صديقة' },
        { name: 'سامي خالد', role: 'صديق قديم' },
      ]);
    } catch (error) {
      console.error('فشل في جلب بيانات المستخدم:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewAvatar(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSaveAvatar = async () => {
    if (!newAvatar) return;
    try {
      const formData = new FormData();
      formData.append('profilePicture', newAvatar);

      const res = await axios.post('http://localhost:5000/api/v1/users/me/avatar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      // تحديث بيانات الصورة
      setUserData(prev => ({ ...prev, avatar: res.data.data.avatar }));
      setEditOpen(false);
    } catch (err) {
      console.error('فشل في رفع الصورة:', err);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="300px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" color="error.main">
        <Typography variant="h6">حدث خطأ: {error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: { xs: 'calc(100% - 20px)', md: 'calc(100% - 240px)' } }} p={isMobile ? 2 : 5} dir="rtl">
      <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center" flexDirection={isMobile ? 'column' : 'row'}>
          <Avatar
            src={userData?.avatar || "https://i.pravatar.cc/150?img=3"}
            sx={{ width: 100, height: 100, mb: isMobile ? 2 : 0, ml: isMobile ? 0 : 2 }}
          />
          <Box textAlign={isMobile ? 'center' : 'right'}>
            <Typography variant="h6">{userData?.username || 'مستخدم'}</Typography>
            <Typography color="text.secondary">{userData?.role || ''}</Typography>
          </Box>
        </Box>
        <Button variant="contained" sx={{ mt: isMobile ? 2 : 0 }} onClick={() => setEditOpen(true)}>
          تعديل الملف الشخصي
        </Button>
      </Box>

      <Box mt={5}>
        <Tabs value={0} textColor="primary" indicatorColor="primary">
          <Tab label="الأصدقاء" sx={{ fontWeight: 'bold' }} />
          <Tab label="الكروبات" />
        </Tabs>

        <Box mt={2} display="flex" justifyContent={isMobile ? 'center' : 'flex-end'}>
          <TextField
            variant="outlined"
            placeholder="...بحث"
            size="small"
            sx={{ width: isMobile ? '100%' : '300px' }}
          />
        </Box>

        <Typography mt={3} mb={1}>الأصدقاء: {friends.length}</Typography>

        <Box display="flex" flexDirection="column" gap={2}>
          {friends.map((friend, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={2}
              border="1px solid #eee"
              borderRadius="8px"
            >
              <Box>
                <Typography>{friend.name}</Typography>
                <Typography color="text.secondary" fontSize={14}>{friend.role}</Typography>
              </Box>
              <Button variant="contained">مراسلة</Button>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Dialog لتعديل الصورة */}
      <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
        <DialogTitle>تعديل الصورة الشخصية</DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
            {preview && <Avatar src={preview} sx={{ width: 100, height: 100 }} />}
            <Button variant="outlined" component="label" startIcon={<PhotoCamera />}>
              اختر صورة
              <input type="file" hidden onChange={handleAvatarChange} accept="image/*" />
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditOpen(false)}>إلغاء</Button>
          <Button onClick={handleSaveAvatar} variant="contained" disabled={!newAvatar}>
            حفظ
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
