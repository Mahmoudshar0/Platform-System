import React from "react";
import { Box, Button, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";

const EvaluationList = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const tests = [
    { title: "الاختبار الاول", subject: "المعادلات التفاضلية", status: "available", time: "00:00" },
    { title: "الاختبار الاول", subject: "المعادلات التفاضلية", status: "late", time: "انتهى الوقت" },
    { title: "الاختبار الاول", subject: "المعادلات التفاضلية", status: "available", time: "00:00" },
    { title: "الاختبار الاول", subject: "المعادلات التفاضلية", status: "available", time: "00:00" },
  ];

  const getTimeColor = (status) => {
    switch (status) {
      case "available":
        return "green";
      case "late":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <Box sx={{ width: { xs: 'calc(100% - 20px)', md: 'calc(100% - 240px)' }, }} p={isSmall ? 2 : 4}>
      <Box
        display="flex"
        flexDirection={isSmall ? "column" : "row"}
        justifyContent="space-between"
        alignItems={isSmall ? "stretch" : "center"}
        flexWrap="wrap"
        gap={2}
        bgcolor="#e6f9ea"
        p={2}
        borderRadius={2}
        mb={4}
      >
        <Typography fontWeight="bold" color="green">
          النتيجة النهائية للاختبارات
        </Typography>
        <Typography>
          80% من 100
        </Typography>
        <Button variant="contained" color="success">اختبار جديد</Button>
        <Button variant="outlined">إعادة المحاولة</Button>
      </Box>

      <Grid container spacing={2} mb={4}>
        <Grid item xs={6} textAlign="center">
          <Typography color="green" fontSize={24}>12</Typography>
          <Typography fontWeight="bold">عدد الاختبارات الصح</Typography>
        </Grid>
        <Grid item xs={6} textAlign="center">
          <Typography color="red" fontSize={24}>5</Typography>
          <Typography fontWeight="bold">عدد الاختبارات الخطاء</Typography>
        </Grid>
      </Grid>

      {tests.map((test, index) => (
        <Box
          key={index}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={2}
          bgcolor="#f9f9f9"
          borderRadius={2}
          mb={2}
          flexDirection={isSmall ? "column" : "row"}
          gap={1}
        >
          <Box
            width={60}
            height={60}
            borderRadius="50%"
            bgcolor={getTimeColor(test.status)}
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontWeight="bold"
          >
            {test.time}
          </Box>

          <Box flex={1} textAlign={isSmall ? "center" : "right"}>
            <Typography fontWeight="bold">{test.title} :</Typography>
            <Typography>{test.subject}</Typography>
            <Typography variant="caption">مدة الامتحان : 45 دقيقة - 10 اسئلة</Typography>
          </Box>

          <Button variant="contained" color="success">
            بدء الاختبار
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default EvaluationList;
