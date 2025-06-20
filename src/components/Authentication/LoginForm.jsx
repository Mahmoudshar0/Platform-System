import React from 'react';
import {
   Box,
   TextField,
   Typography,
   Button,
   Link,
   Stack,
   Alert
} from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexst/UserContext'
const validationSchema = Yup.object({
   email: Yup.string()
      .email('بريد إلكتروني غير صالح')
      .required('البريد الإلكتروني مطلوب'),
   password: Yup.string()
      .min(6, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل')
      .required('كلمة المرور مطلوبة')
});

// دالة مساعدة لتعيين الكوكيز


const LoginForm = () => {
   const navigate = useNavigate();
   const { setUser } = useUser();
   const handleSubmit = async (values, { setSubmitting }) => {
      try {
         const response = await axios.post('http://localhost:5000/api/v1/auth/login', values);
         console.log(response.data.data.accessToken);
         const user = response.data.data.user;

         localStorage.setItem('user', JSON.stringify(user)); // 💾 حفظ البيانات
         setUser(user);
         // حفظ التوكن في الكوكيز
         const token = response.data.data.accessToken;
         const role = response.data.data.user.role
         console.log(role)
         // 1. حفظ التوكن في الكوكيز (اختيار واحد من الطريقتين)
         Cookies.set('token', token, { expires: 7 });
         // توجيه المستخدم إلى الصفحة الرئيسية بعد تسجيل الدخول
         if (role === 'STUDENT') {
            navigate('/userdashboard');
         } if (role === "TEACHER") {
            navigate('/');
         }

      } catch (error) {
         console.error('حدث خطأ أثناء تسجيل الدخول:', error);
      }

      setSubmitting(false);
   };

   return (
      <Box
         sx={{
            flex: {
               xs: 0,
               md: 1
            },
            padding: {
               xs: '50px 0px 0',
               md: '40px 20px 40px'
            },
            display: 'flex',
            flexDirection: {
               xs: 'row',
               md: "column",
               lg: "column"
            },
            alignItems: {
               xs: 'center',
               md: 'center',
            },
            justifyContent: 'center',
            gap: 0,
         }}
      >
         <Box
            sx={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            <img
               src="/images/logo.jpg"
               alt="Logo"
               style={{ width: "250px", height: "250px", marginBottom: 20 }}
            />
         </Box>

         <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
         >
            {({ isSubmitting, errors, touched }) => (
               <Form style={{ width: '100%', maxWidth: '400px' }}>
                  <Box sx={{ textAlign: 'right' }}>
                     <Typography variant="h6" sx={{ mb: 3 }}>
                        البريد الإلكتروني
                     </Typography>
                     <Field
                        as={TextField}
                        name="email"
                        fullWidth
                        placeholder="ادخل البريد الإلكتروني"
                        variant="outlined"
                        sx={{ mb: 1 }}
                        inputProps={{ style: { textAlign: 'right' } }}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                     />

                     <Typography variant="h6" sx={{ mb: 3, mt: 2 }}>
                        كلمة السر
                     </Typography>
                     <Field
                        as={TextField}
                        name="password"
                        type="password"
                        fullWidth
                        placeholder="ادخل كلمة السر"
                        variant="outlined"
                        sx={{ mb: 1 }}
                        inputProps={{ style: { textAlign: 'right' } }}
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                     />

                     <Link href="/password-recovery" underline="hover" sx={{ display: 'block', mb: 3, mt: 1 }}>
                        استعادة كلمة المرور
                     </Link>

                     <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={isSubmitting}
                        sx={{
                           backgroundColor: '#5a63ea',
                           color: '#fff',
                           height: 45,
                           fontWeight: 'bold',
                           '&:hover': {
                              backgroundColor: '#3f51b5',
                           },
                        }}
                     >
                        {isSubmitting ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
                     </Button>
                  </Box>
               </Form>
            )}
         </Formik>
      </Box>
   );
};

export default LoginForm;