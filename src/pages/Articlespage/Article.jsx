import { Box, Typography, IconButton, Divider } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useParams, useNavigate } from 'react-router-dom';

export default function Article() {
  const { articleId } = useParams();
  const navigate = useNavigate();
  
  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      width: { xs: '100%', sm: 'calc(100% - 240px)' }, // Full width on mobile, subtract sidebar on desktop
      marginLeft: { xs: 0, sm: '240px' }, // Sidebar offset only on desktop
      padding: { xs: 2, sm: 3 },
      minHeight: '100vh',
      boxSizing: 'border-box'
    }}>
      {/* Header with back button */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 2, sm: 3 } }}>
        <IconButton onClick={() => navigate(-1)} sx={{ mr: 1 }}>
          <ChevronLeftIcon />
        </IconButton>
        <Typography variant="h5" sx={{ 
          fontFamily: 'Tajawal', 
          fontWeight: 700,
          fontSize: { xs: '1.25rem', sm: '1.5rem' }
        }}>
          {`مقال ${articleId}`}
        </Typography>
      </Box>
      
      {/* Article Image */}
      <Box
        sx={{
          height: { xs: 180, sm: 250, md: 300 },
          backgroundImage: 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'Tajawal',
          fontSize: { xs: '1.5rem', sm: '2rem' },
          fontWeight: 700,
          mb: { xs: 3, sm: 4 },
          borderRadius: 1
        }}
      >
        {`صورة مقال ${articleId}`}
      </Box>
      
      {/* Article Content */}
      <Box sx={{ 
        maxWidth: 800,
        mx: 'auto',
        width: '100%',
        px: { xs: 0, sm: 2 } // Add some padding on larger screens
      }}>
        <Typography variant="h4" sx={{ 
          fontFamily: 'Tajawal', 
          fontWeight: 700,
          mb: { xs: 2, sm: 3 },
          textAlign: 'right',
          fontSize: { xs: '1.5rem', sm: '2rem' }
        }}>
          {`عنوان المقال ${articleId}`}
        </Typography>
        
        <Typography sx={{ 
          fontFamily: 'Tajawal', 
          color: '#666',
          mb: { xs: 1.5, sm: 2 },
          textAlign: 'right',
          fontSize: { xs: '0.875rem', sm: '1rem' }
        }}>
          بقلم: الكاتب العربي | تاريخ النشر: 12 مايو 2023
        </Typography>
        
        <Divider sx={{ my: { xs: 2, sm: 3 } }} />
        
        {[...Array(10)].map((_, i) => (
          <Typography 
            key={i}
            paragraph 
            sx={{ 
              fontFamily: 'Tajawal', 
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.8,
              textAlign: 'right',
              mb: { xs: 2, sm: 3 }
            }}
          >
            هذا نص تجريبي للمحتوى الذي سيظهر في المقال. هنا يمكنك كتابة محتوى المقال الكامل الذي تريد عرضه للقراء. يمكن أن يحتوي المقال على فقرات متعددة، صور، أكواد برمجية، وأي عناصر أخرى تساعد في شرح الموضوع.
            
            {i === 0 && " هذا الجزء من المقال يتحدث عن المقدمة والأفكار الأساسية."}
            {i === 3 && " هنا نبدأ في شرح التفاصيل التقنية والأمثلة العملية."}
            {i === 7 && " في هذه الفقرة نقدم الخاتمة والتوصيات النهائية."}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}