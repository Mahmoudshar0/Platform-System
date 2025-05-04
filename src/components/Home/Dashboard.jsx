import React from "react";
import { Box, Typography } from "@mui/material";
import StatsCards from "./statesCards";
import AddVideo from "./AddVideo";
import Article from "./Article";
import Videos from "./UploadedVideos";
import UploadedFiles from "./UploadedFiles";
import VideoUploadForm from "./VideoUploadForm";

function Dashboard() {
return (
   <Box 
      sx={{ 
         width: { md: `calc(100% - 200px)` },
         padding: 3, 
         display: "flex",
         flexDirection: "column",
         gap: 5,
      }}
      >
      <Box 
         sx={{
            padding: 0,
            borderRadius: 2,
            textAlign: "center",
            
         }}>
         <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>
            لوحة التحكم
         </Typography>
         <Typography variant="body2" sx={{ color: "#777" }}>
            مرحبا بك في لوحة التحكم الخاصة بالمنصة التعليمية
         </Typography>
      </Box>

      <StatsCards />
      <AddVideo />
      <Videos />
      <UploadedFiles />
      <Article />
   </Box>
);
}

export default Dashboard;