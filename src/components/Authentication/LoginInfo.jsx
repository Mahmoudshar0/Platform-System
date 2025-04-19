import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const LoginInfo = (props) => {
return (
   <Box
      sx={{
      flex: 1,
      backgroundColor: '#5a63ea',
      color: '#fff',
      padding: '25px 32px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight:"97vh"
      }}
   >
      <Typography variant="h2" sx={{ m: 2, textAlign: "center"}}>
      لوحة تحكم
      </Typography>
      <Typography variant="h3" sx={{ mb: 3, fontWeight: "light" }}>
      منصة تعليمية
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 700, mt:{xs:3,md:"-70px"}}}>
      يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
      <br />
      إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
      </Typography>
      {props.btn && <Button
      variant="outlined"
      sx={{
         mt: 4,
         mb: 0,
         color: '#fff',
         borderColor: '#fff',
         '&:hover': {
            borderColor: '#eee',
            backgroundColor: 'rgba(255,255,255,0.1)',
         },
      }}
      >
      دخول إلى لوحة التحكم
      </Button>}
   </Box>
);
};

export default LoginInfo;
