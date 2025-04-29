import {useState} from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const StatsCards = () => {

   const [stats] = useState([
      {
      title: "الفيديوهات",
      count: 45,
      id:0
      },
      {
      title: "الاختبارات",
      count: 120,
      id:1
      },
      {
      title: "الواجب",
      count: 15,
      id:1
      },
   ]);

   return (
      <>
      <Typography variant="h6" sx={{ direction: "rtl", fontWeight: "500", color: "#000"}}>
         الاحصائيات 
         <Box sx={{ width: "100%", height: "1px", backgroundColor: "#aaa", marginTop: 1 }} />
      </Typography>
   <Grid container spacing={0} sx={{ padding: 0, backgroundColor: "#FbFbFb" }}>
      {stats.map((stat, index) => (
         <Grid item xs={12} sm={6} md={4} key={index}>
         <Paper
            elevation={0}
            sx={{
               backgroundColor: "transparent",
               borderRadius: "16px",
               padding: 3,
               textAlign: "center",
               fontFamily: "Tajawal, sans-serif",
            }}
         >
            <Box sx={{ borderLeft: {
               xs:"none",
               md: stat.id===1 ? "3px solid #eee" : "none"
            }}}>
               <Typography variant="h3" sx={{ fontWeight: "normal", color: "#2B3CFF", mb: 0.5 }}>
               +{stat.count}
               </Typography>
               <Typography variant="h5" sx={{  fontWeight: "normal", mb: 0.5 }}>
               {stat.title}
               </Typography>
            </Box>
         </Paper>
         </Grid>
      ))}
   </Grid>
   </>
   );
};

export default StatsCards;