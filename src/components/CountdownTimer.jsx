import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function CountdownTimer({ initialTime }) {
  const [remainingTime, setRemainingTime] = useState(initialTime);

  useEffect(() => {
    if (remainingTime <= 0) return;

    const timer = setInterval(() => {
      setRemainingTime((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingTime]);

  // تحديد اللون بناءً على الوقت المتبقي
  const getTimeColor = () => (remainingTime <= 5 ? "#FF0000" : "#0023E8");

  // تحويل الوقت إلى دقائق وثواني
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <Box sx={{ marginTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Box sx={{ display: "flex", gap: "10px" }}>
      <Button variant="contained" sx={{ backgroundColor: "#0023E8", color: "white" }} onClick={() => alert("تعديل التايمر")}>تعديل</Button>
      <Button variant="contained" sx={{ backgroundColor: "#B22222", color: "white" }} onClick={() => alert("حذف التايمر")}>حذف</Button>
      </Box>
      
      <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", color: getTimeColor(), marginLeft: "5px" }}>
          {minutes > 1 
            ? minutes + " دقائق"
            : minutes === 1 
            ? minutes + " دقيقة"
            : seconds + " ثانية"}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#818181", marginRight: "5px" }}>
          | الوقت المتبقي
        </Typography>

      </Box>
    </Box>
  );
}

export default CountdownTimer;







