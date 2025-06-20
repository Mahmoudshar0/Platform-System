import { Card, CardContent, Typography, Box, Grid, Select, MenuItem, FormControl, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';
//
export default function ArticlePage() {
  const navigate = useNavigate();

  const handleArticleClick = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  return (
    <Box sx={{ 
      width: { xs: '100%', sm: `calc(100% - 240px)` }, // Full width on mobile, subtract sidebar on larger screens
      marginLeft: { xs: 0, sm: '240px' }, // Sidebar offset only on larger screens
      padding: { xs: 2, sm: 3 },
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0 auto', // Center the content
      maxWidth: { lg: 1200 } // Optional: set a max-width for very large screens
    }}>
      {/* Header Section */}
      <Box sx={{ 
        textAlign: 'center', 
        mb: { xs: 2, sm: 4 }, 
        width: '100%',
        maxWidth: { sm: 600, md: 800, lg: 900 } // Limit header width
      }}>
        <Typography 
          sx={{
            fontFamily: 'Tajawal',
            color: '#000000',
            fontWeight: 700,
            lineHeight: '100%',
            fontSize: { xs: '18px', sm: '20px', md: '24px' },
            letterSpacing: '0%',
            textAlign: 'center',
          }}
        >
          المقالات التعليمية          
        </Typography>
        <Typography 
          sx={{
            color: '#818181',
            fontFamily: 'Tajawal',
            fontWeight: 700,
            fontSize: { xs: '14px', sm: '16px' },
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            mt: 1.5,
          }}
        >
          استعراض المقالات التعليمية لمادة البرمجة
        </Typography>
      </Box>
      
      {/* Title and Filter Section */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column-reverse', sm: 'row' }, // Reverse on mobile
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mb: { xs: 2, sm: 3 },
        gap: 2,
        width: '100%',
        maxWidth: { sm: 600, md: 800, lg: 900 } // Limit content width
      }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 1.5
        }}>
          <Typography 
            sx={{
              fontFamily: 'Tajawal',
              fontWeight: 500,
              fontSize: { xs: '14px', sm: '16px' },
              lineHeight: '100%',
              textAlign: 'right',
            }}
          >
            ترتيب حسب :
          </Typography>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <Select
              value="newest"
              sx={{
                backgroundColor: '#0026FF',
                color: 'white',
                height: 36,
                fontFamily: 'Tajawal',
                fontSize: { xs: '14px', sm: '16px' },
                '& .MuiSelect-icon': {
                  color: 'white'
                }
              }}
              IconComponent={ArrowDropDownIcon}
            >
              <MenuItem value="newest" sx={{ fontFamily: 'Tajawal' }}>الأحدث</MenuItem>
              <MenuItem value="oldest" sx={{ fontFamily: 'Tajawal' }}>الأقدم</MenuItem>
              <MenuItem value="name" sx={{ fontFamily: 'Tajawal' }}>الاسم</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Typography 
          sx={{
            fontFamily: 'Tajawal',
            fontWeight: 700,
            fontSize: { xs: '18px', sm: '20px', md: '22px' },
            lineHeight: '100%',
            textAlign: 'right',
            alignSelf: { xs: 'flex-start', sm: 'center' }
          }}
        >
          المقالات التعليمية 
        </Typography>
      </Box>
      
      {/* Articles Cards Grid */}
      <Grid container spacing={3} sx={{ 
        width: '100%',
        maxWidth: { sm: 600, md: 800, lg: 900 }, // Limit grid width
        justifyContent: 'center' // Center cards on larger screens
      }}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item} sx={{ display: 'flex' }}>
            <ArticleCard 
              title={`مقال ${item}`} 
              onClick={() => handleArticleClick(item)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function ArticleCard({ title, onClick }) {
  return (
    <Card 
      variant="outlined" 
      sx={{ 
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }
      }}
    >
      {/* Article Image */}
      <Box
        sx={{
          height: { xs: 120, sm: 140 },
          backgroundImage: 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'Tajawal',
          fontSize: '1.5rem',
          fontWeight: 700
        }}
      >
        {title}
      </Box>
      
      <CardContent sx={{ 
        textAlign: 'right', 
        p: { xs: 1.5, sm: 2 },
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontFamily: 'Tajawal', 
            fontSize: { xs: '16px', sm: '18px' },
            fontWeight: 700
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            fontFamily: 'Tajawal', 
            color: '#818181', 
            fontSize: { xs: '12px', sm: '14px' },
            mt: 1,
            mb: 1.5
          }}
        >
          تاريخ النشر: 12 مايو 2023
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            fontFamily: 'Tajawal', 
            color: '#818181', 
            fontSize: { xs: '12px', sm: '14px' },
            mb: 2
          }}
        >
          مقدمة المقال تشرح بعض المفاهيم الأساسية في البرمجة وكيفية تطبيقها في المشاريع العملية...
        </Typography>
        
        {/* Read Article Button */}
        <Box sx={{ mt: 'auto' }}>
          <Button
            variant="contained"
            onClick={onClick}
            sx={{
              backgroundColor: '#0026FF',
              color: 'white',
              fontFamily: 'Tajawal',
              fontSize: { xs: '12px', sm: '14px' },
              padding: { xs: '6px 12px', sm: '8px 16px' },
              '&:hover': {
                backgroundColor: '#001bb3'
              }
            }}
            fullWidth
          >
            قراءة المقال
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}