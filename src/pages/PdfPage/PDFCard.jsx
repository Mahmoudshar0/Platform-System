import { Card, CardContent, Typography, Box, Grid, Select, MenuItem, FormControl } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';

export default function PDFLecturesPage() {
  const navigate = useNavigate();

  const handlePDFClick = (pdfId) => {
    navigate(`/pdf-viewer/${pdfId}`);
  };

  return (
    <Box sx={{ 
      maxWidth: { xs: '100%', sm: 600, md: 900, lg: 1200 }, 
      margin: '0 auto', 
      p: { xs: 2, sm: 3 }, 
      width: 'calc(100% - 240px)', // Subtract sidebar width
      ml: '240px', // Offset for sidebar
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: { xs: 2, sm: 4 }, width: '100%' }}>
        <Typography 
          sx={{
            fontFamily: 'Tajawal',
            color: '#000000',
            fontWeight: 700,
            lineHeight: '100%',
            fontSize: { xs: '16px', sm: '18px', md: '20px' },
            letterSpacing: '0%',
            textAlign: 'center',
          }}
        >
          محاضرات PDF          
        </Typography>
        <Typography 
          sx={{
            color: '#818181',
            fontFamily: 'Tajawal',
            fontWeight: 700,
            fontSize: { xs: '12px', sm: '14px', md: '16px' },
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            width: { xs: '100%', sm: 360 },
            mt: 1,
            mx: 'auto'
          }}
        >
          استعراض محاضرات PDF التعليمية لمادة البرمجة
        </Typography>
      </Box>
      
      {/* Title and Filter Section */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' }, 
        justifyContent: 'space-between', 
        alignItems: { xs: 'flex-start', sm: 'center' }, 
        mb: { xs: 2, sm: 3 },
        gap: { xs: 2, sm: 0 },
        width: '100%'
      }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          width: { xs: '100%', sm: 'auto' },
          gap: { xs: 1, sm: 2 }
        }}>
          <Typography 
            sx={{
              fontFamily: 'Tajawal',
              fontWeight: 500,
              fontSize: { xs: '16px', sm: '18px', md: '20px' },
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'right',
            }}
          >
            ترتيب حسب :
          </Typography>
          <FormControl sx={{ minWidth: { xs: '100%', sm: 120 } }} size="small">
            <Select
              value="newest"
              sx={{
                backgroundColor: '#0026FF',
                color: 'white',
                height: { xs: 32, sm: 24 },
                width: { xs: '100%', sm: 'auto' },
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
            fontSize: { xs: '18px', sm: '20px', md: '24px' },
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'right',
          }}
        >
          PDF ملفات الـــــ 
        </Typography>
      </Box>
      
      {/* PDF Cards Grid */}
      <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ width: '100%' }}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item}>
            <PDFCard 
              title={`محاضرة ${item}`} 
              onClick={() => handlePDFClick(item)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function PDFCard({ title, onClick }) {
  return (
    <Card 
      variant="outlined" 
      sx={{ 
        height: '100%', 
        width: '100%',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }
      }}
      onClick={onClick}
    >
      <CardContent sx={{ textAlign: 'right', p: { xs: 2, sm: 3 } }}>
        <PictureAsPdfIcon color="error" fontSize="large" />
        <Typography 
          variant="h6" 
          sx={{ 
            fontFamily: 'Tajawal', 
            mt: 1, 
            fontSize: { xs: '14px', sm: '16px', md: '18px' } 
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            fontFamily: 'Tajawal', 
            color: '#818181', 
            fontSize: { xs: '12px', sm: '14px' } 
          }}
        >
          12.5MB
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            fontFamily: 'Tajawal', 
            color: '#818181', 
            mt: 1, 
            fontSize: { xs: '12px', sm: '14px', md: '16px' } 
          }}
        >
          محاظرة الاولى قواعد البرمجة و....
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            fontFamily: 'Tajawal', 
            color: '#818181', 
            fontSize: { xs: '12px', sm: '14px' } 
          }}
        >
          عدد الصفح: 1 
        </Typography>
      </CardContent>
    </Card>
  );
}