import {
  Box,
  Button,
  Typography,
  Avatar,
  Tabs,
  Tab,
  TextField,
  Divider,
} from '@mui/material';
import { useState } from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function UserProfile() {
  const [tab, setTab] = useState(0);

  const [friends, setFriends] = useState([
    { id: 1, name: 'أشرف زرق', role: 'طالب' },
    { id: 2, name: 'محمد سامي', role: 'طالب' },
    { id: 3, name: 'سارة علي', role: 'طالبة' },
  ]);

  const addFriend = () => {
    const newFriend = {
      id: friends.length + 1,
      name: `صديق جديد ${friends.length + 1}`,
      role: 'طالب',
    };
    setFriends([...friends, newFriend]);
  };

  return (
    <Box p={3} width="800px" dir="rtl" mx="auto">
      {/* Header Navigation */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="body2" color="gray">
          الصفحة الرئيسية {' > '} ملف المستخدم
        </Typography>
      </Box>

      {/* User Info */}
      <Box
        mt={2}
        mb={2}
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        flexWrap="wrap"
      >
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar sx={{ bgcolor: 'deeppink' }}>M</Avatar>
          <Box>
            <Typography variant="h6" fontWeight="bold">
              عبد الرحمن جمال الدين
            </Typography>
            <Typography color="text.secondary">طالب</Typography>
          </Box>
        </Box>
      </Box>

      <Divider />

      {/* Tabs */}
      <Tabs
        value={tab}
        onChange={(e, newValue) => setTab(newValue)}
        sx={{ mt: 2 }}
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="الأصدقاء" />
        <Tab label="الكروبات" />
      </Tabs>

      {/* الأصدقاء */}
      {tab === 0 && (
        <>
          {/* الزرين فوق */}
          <Box display="flex" justifyContent="flex-end" gap={2} mt={2}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<PersonAddIcon />}
              onClick={addFriend}
            >
              إضافة صديق
            </Button>
            <Button variant="outlined" color="primary">
              مراسلة
            </Button>
          </Box>

          {/* Search */}
          <Box mt={2} display="flex" flexDirection="row-reverse">
            <TextField
              sx={{ maxWidth: '200px', width: '200px' }}
              placeholder="بحث..."
              size="small"
            />
          </Box>

          <Typography mt={1} fontSize="14px" color="gray">
            الأصدقاء {friends.length}
          </Typography>

          {/* قائمة الأصدقاء */}
          <Box mt={2}>
            {friends.map((friend) => (
              <Box
                key={friend.id}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <Avatar sx={{ bgcolor: '#007bff' }}>
                    {friend.name.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography fontWeight="bold">{friend.name}</Typography>
                    <Typography fontSize="12px" color="gray">
                      {friend.role}
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" gap={1}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={addFriend}
                  >
                    إضافة صديق
                  </Button>
                  <Button variant="outlined" color="primary" size="small">
                    مراسلة
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </>
      )}

      {/* الكروبات */}
      {tab === 1 && (
        <Box mt={2}>
          <Typography>هنا محتوى الكروبات</Typography>
          <Button variant="contained" sx={{ mt: 2 }}>
            تعديل الملف الشخصي
          </Button>
        </Box>
      )}
    </Box>
  );
}
