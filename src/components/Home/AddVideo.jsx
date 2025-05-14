import { useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Typography
} from '@mui/material';
import "./AddVideo.css";
import VideoUploadForm from './VideoUploadForm';

const VideoStatsComponent = () => {
  const [showVideoForm, setShowVideoForm] = useState(false);

  const toggleVideoForm = () => {
    setShowVideoForm(prevState => !prevState);
  };

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
    color: "#6b7280", // gray-500
  };

  const totalTextStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#374151", // gray-800
  };

  return (
    <Box elevation={3} sx={{ zIndex: 1, padding: 2, direction: 'rtl', position: 'relative', marginTop: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>
        الفيديوهات
      </Typography>
      <Paper elevation={2} direction="rtl" sx={{ justifyContent:"center", gap:{xs:5,md:10}, display:"flex", flexDirection: { xs: "column-reverse", md: "row" }, padding: 4, marginTop: 2 }}>
        <Box sx={{
          display: 'flex', flexDirection: {xs:"column", md:"row"}, justifyContent: {xs:"center",md:'center'}, alignItems: 'center', borderLeft:{xs:"none", md:"1px solid #777;"}, paddingLeft:{xs:0,md:0}, paddingTop:{xs:2,md:0}}}>
          <div className="container">
            <div className='total c'></div>
            <div className='uncompleted c' style={{ background: "conic-gradient(#60a5fa 0deg 180deg,#e5e7eb 180deg 360deg)"}}></div>
            <div className='completed c' style={{ background: "conic-gradient(#a855f7 0deg 90deg,#e5e7eb 90deg 360deg)"}}></div>
            <div className="center"></div>
          </div>
          <Box sx={{
                marginInline: 2,
                paddingInline: 5,
                marginTop:3}}>
              <Typography variant='h5' sx={{
                borderBottom: '1px solid #000',
                marginBottom: '1rem',
              }}> الفيديوهات </Typography>
              <div style={{ textAlign: "right" }}>
                <div style={{...itemStyle, direction: 'ltr'}}>
                  <span style={textStyle}>الفيديوهات المكتملة</span>
                  <div style={dotStyle('#a855f7')}></div>
                </div>
                <div style={{...itemStyle, direction: 'ltr'}}>
                  <span style={textStyle}>الفيديوهات غير المكتملة</span>
                  <div style={dotStyle('#60a5fa')}></div>
                </div>
                <div style={{...itemStyle, direction: 'ltr'}}>
                  <span style={totalTextStyle}>مجموع الفيديوهات {250}</span>
                  <div style={dotStyle("#6366f1")}></div>
                </div>
              </div>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Button 
            onClick={toggleVideoForm} 
            variant="text" 
            sx={{
              border: "1px dashed blue", 
              padding: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            إضافة فيديو
            <Typography variant="h4" sx={{ mt: 1 }}>+</Typography>
          </Button>
        </Box>
      </Paper>
      
      {showVideoForm && <VideoUploadForm onClose={toggleVideoForm} />}
    </Box>
  );
};

export default VideoStatsComponent;