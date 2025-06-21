import { Box, Typography, Paper, Button } from "@mui/material";
import { ArrowLeft } from "@mui/icons-material";
import vid from "../../assets/vid.svg"; 
const Component2 = () => {
  // Styles for the statistics section
  const itemStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "8px",
    justifyContent: "end",
    padding: "5px",
  };

  const dotStyle = (color) => ({
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: color,
    marginLeft: "8px",
  });

  const textStyle = {
    fontSize: "14px",
    color: "#6b7280",
  };

  const totalTextStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#374151",
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' },
      border: '2px solid #F0F0F0',
      borderRadius: '16px',
      overflow: 'hidden',
      width: 'calc(100% - 240px)', 
      marginRight: '240px', 
      '@media (max-width: 900px)': {
        width: '100%',
        marginRight: 0
      }
    }}>
      {/* Video Card Section (Left) */}
      <Box sx={{
        width: { xs: '100%', md: '40%' },
        padding: 3,
        backgroundColor: '#fff'
      }}>
        <Typography variant="h6" sx={{ 
          fontWeight: '500', 
          color: '#000',
          mb: 2
        }}>
          الفيديو القادم
        </Typography>
        
        <Box sx={{ mb: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: '500' }}>
            عنوان الفيديو
          </Typography>
          <Box sx={{
            width: '100%',
            height: '160px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            margin: '10px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            <img 
              src={vid}
              alt="فيديو" 
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </Box>
          <Typography variant="body2" sx={{ color: '#666' }}>
            تفاصيل الفيديو تظهر هنا مع وصف مختصر
          </Typography>
        </Box>
        
        <Button 
          variant="contained" 
          endIcon={<ArrowLeft />}
          sx={{
            backgroundColor: '#0A0A0A',
            color: '#fff',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#333'
            }
          }}
        >
          مشاهدة
        </Button>
      </Box>
      
      {/* Statistics Section (Right) - Tight layout */}
      <Box sx={{
        width: { xs: '100%', md: '60%' },
        backgroundColor: '#FbFbFb',
        padding: 3,
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        alignItems: 'center',
        gap: { xs: 2, md: 2 } // Reduced gap
      }}>
        {/* Video Stats Text - Right aligned */}
        <Box sx={{ 
          width: {xs: '100%', md: '60%'},
          textAlign: 'right'
        }}>
          <Typography variant='h5' sx={{ 
            borderBottom: '1px solid #000', 
            marginBottom: '1rem',
          }}>
            الفيديوهات 
          </Typography>
          <div>
            <div style={{...itemStyle}}>
              <span style={textStyle}>الفيديوهات المكتملة</span>
              <div style={dotStyle('#a855f7')}></div>
            </div>
            <div style={{...itemStyle}}>
              <span style={textStyle}>الفيديوهات غير المكتملة</span>
              <div style={dotStyle('#60a5fa')}></div>
            </div>
            <div style={{...itemStyle}}>
              <span style={totalTextStyle}>مجموع الفيديوهات {250}</span>
              <div style={dotStyle("#6366f1")}></div>
            </div>
          </div>
        </Box>

        {/* Chart - Left aligned and closer to text */}
        <Box sx={{
          width: { xs: '100px', md: '120px' },
          height: { xs: '100px', md: '120px' },
          borderRadius: '50%',
          position: 'relative',
          background: 'conic-gradient(#a855f7 0deg 90deg, #60a5fa 90deg 270deg, #6366f1 270deg 360deg)',
          margin: { xs: '0 auto', md: '0 0 0 auto' }, 
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '70%',
            height: '70%',
            borderRadius: '50%',
            backgroundColor: '#FbFbFb',
            top: '15%',
            left: '15%'
          }
        }} />
      </Box>
    </Box>
  );
};

export default Component2;