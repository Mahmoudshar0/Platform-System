// Notifications.js
import {
  Box,
  Typography,
  Divider,
  Avatar,
  Stack,
  Button,
  IconButton,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const notifications = [
  { title: 'فيديو جديد', desc: 'فيديو جديد تم تحميله إلى المكتبة', time: 'الآن' },
  { title: 'تم تحميل المقالة', desc: 'عنوان المقالة التي تم تحميلها', time: 'قبل ساعة' },
  { title: 'تم تحميل واجب جديد', desc: 'تم رفع الواجب الجديد', time: 'قبل 7 ساعة' },
  { title: 'ملف اختبارات جديد', desc: 'تم رفع اختبار الفيديو إلى المنصة', time: 'قبل يوم' },
  { title: 'قام محمد علي بنشر هذا المنشور', desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في...', time: 'قبل أسبوع', avatar: true, date: '23 إبريل 2025' },
  { title: 'علق محمد علي على هذا المنشور', desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في...', time: 'قبل شهر' },
];

export default function Notifications() {


  return (
    <Box maxWidth="md" mx="auto" px={2} py={4} dir="rtl">
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Button variant="outlined" startIcon={<FilterListIcon />}>فلترة</Button>
        <Typography variant="h6" fontWeight="bold">الإشعارات</Typography>
      </Stack>

      {notifications.map((item, index) => (
        <Box key={index} mb={3}>
          <Stack direction="row" justifyContent="space-between">
            <Box flex={1}>
              <Typography variant="subtitle1" fontWeight={600}>{item.title}</Typography>
              <Typography variant="body2" color="text.secondary" mt={0.5}>
                {item.desc}
              </Typography>
            </Box>
            <Typography variant="caption" color="text.secondary" mt={0.5}>
              {item.time}
            </Typography>
          </Stack>

          {item.avatar && (
            <Stack direction="row" alignItems="center" spacing={1} mt={2}>
              <Avatar src="https://i.pravatar.cc/40" alt="User" sx={{ width: 32, height: 32 }} />
              <Typography variant="body2">{item.title}</Typography>
              <Box ml="auto">
                <Box
                  sx={{
                    bgcolor: 'black',
                    color: 'white',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: '20px',
                    fontSize: '12px',
                  }}
                >
                  {item.date}
                </Box>
              </Box>
            </Stack>
          )}
          <Divider sx={{ mt: 2 }} />
        </Box>
      ))}
    </Box>
  );
}
