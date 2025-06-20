import React from "react";
import { Box, Typography, Grid, Button, Avatar, useMediaQuery } from "@mui/material";
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const HomeworkProgress = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const percentage = 72;
  const done = 5;
  const undone = 7;

  const homeworks = Array(3).fill({
    name: "عبد العزيز صفا",
    title: "مادة الحاسبات الرقمية",
    date: "2 / 4 / 2025",
    desc: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى`,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  });

  return (
    <Box sx={{ width: { xs: 'calc(100% - 20px)', md: 'calc(100% - 240px)' }, p: 2 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: isMobile ? "center" : "right" }}>
            <Typography color="primary" fontWeight={600} fontSize="1.5rem">
              {percentage}%
            </Typography>
            <Typography>نسبة تقدم الواجبات</Typography>
            <Typography mt={1}>{done} الواجبات المكتملة</Typography>
            <Typography>{undone} الواجبات الغير مكتملة</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ width: isMobile ? 150 : 200, mx: "auto" }}>
            <CircularProgressbarWithChildren
              value={percentage}
              styles={buildStyles({
                pathColor: "#4F46E5",
                trailColor: "#E5E7EB",
                strokeLinecap: "round"
              })}
            >
              <Typography variant="h6" fontWeight={600}>{percentage}%</Typography>
              <Typography variant="caption">{`${done + undone}/10 واجبات مكتملة`}</Typography>
            </CircularProgressbarWithChildren>
          </Box>
        </Grid>
      </Grid>

      <Box mt={4}>
        {homeworks.map((hw, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: 2,
              alignItems: isMobile ? "flex-start" : "center",
              backgroundColor: "#F9FAFB",
              p: 2,
              mb: 2,
              borderRadius: 2
            }}
          >
            <Avatar src={hw.avatar} sx={{ width: 56, height: 56 }} />
            <Box flex={1}>
              <Typography fontWeight={600}>{hw.name}</Typography>
              <Typography variant="caption" color="text.secondary">{hw.title}</Typography>
              <Typography mt={1} fontSize="0.9rem" color="text.secondary">{hw.desc}</Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1, alignItems: isMobile ? "flex-start" : "center" }}>
              <Typography variant="caption" color="text.secondary">موعد التسليم</Typography>
              <Typography variant="caption" color="primary" fontWeight={600}>{hw.date}</Typography>
              <Button size="small" variant="contained" color="primary">تسليم الواجب</Button>
              <Button size="small" variant="text">عرض الواجب</Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomeworkProgress;
