import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
// import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import CountdownTimer from "./CountdownTimer";
// ------------------------
function UploadedTest() {
  const [openTest, setOpenTest] = useState(null);
  const testNumbers = ["الأول", "الثاني", "الثالث", "الرابع", "الخامس", "السادس"];
  return (
    <>
      {testNumbers.map((num, index) => (
        <Box
          key={index}
          sx={{
            width: { xs: "95%", sm: "90%", md: "90%" },
            maxWidth: "1200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            padding: "15px",
            borderRadius: "8px",
            margin: "20px auto",
            marginRight: { xs: "auto", sm: "50px", md: "250px" },
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            border: "1px solid #BCBCBC",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Link
                href="#"
                style={{ color: "#0023E8", textDecoration: "none", cursor: "pointer" }}
                onClick={() => setOpenTest(openTest === index ? null : index)}
              >
                <KeyboardArrowLeftIcon
                  sx={{
                    color: "#818181",
                    transform: openTest === index ? "rotate(-90deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
                {`الاختبار ${num}`}
              </Link>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px", marginLeft: "auto" }}>
              <img
                src="/images/logo.jpg"
                alt="Profile"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "1px solid #C7C7C7",
                  marginRight: "-100px",
                }}
              />
              <Box sx={{ position: "relative", right: "25px" }}>
                <Typography variant="h6" sx={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>
                  رانية بخش
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#667085",
                    fontWeight: "bolder",
                    display: "block",
                    position: "relative",
                    right: "30px",
                  }}
                >
                  د.أساسيات البرمجة
                </Typography>
              </Box>
            </Box>
          </Box>

          {openTest === index && (
            <Box
              sx={{
                marginTop: "15px",
                padding: "10px",
                borderRadius: "8px",
                width: "100%",
                transition: "all 0.3s ease",
                textAlign: "right",
                marginLeft: "-20px",
              }}
            >
              
              <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
                تفاصيل الاختبار {num}
              </Typography>
              <Typography variant="body1" sx={{ color: "#555" }}>
                هذا هو محتوى تفاصيل الاختبار {num}. يمكنك إضافة أي معلومات أخرى هنا مثل موعد الاختبار، المحتوى، أو الملاحظات.
              </Typography>

              
              <Box
                sx={{
                  marginTop: "10px",
                  padding: "10px",
                  borderRadius: "8px",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row-reverse",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "right" }}>
                  :الأجوبة
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: "35px",
                      height: "35px",
                      minWidth: 35,
                      minHeight: 35,
                      borderRadius: "50%",
                      backgroundColor: "#92BDFF",
                      color: "#000000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                      marginRight: "10px",
                    }}
                  >
                    20
                  </Box>
                  <Typography variant="body1" sx={{ color: "#818181", fontWeight: "bold", whiteSpace: "nowrap" }}>
                    درجة الاختبار من
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ width: "100%", marginTop: "20px" }}>
                <hr style={{ width: "100%", margin: "0", border: "none", borderTop: "2px solid #EEEEEE", opacity: 0.8 }} />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", width: "100%", marginTop: "20px", gap: "20px" }}>
                <Typography variant="body1" sx={{ color: "#000000", fontWeight: "bold" }}> :الاختيارالأول </Typography>
                <Typography variant="body1" sx={{ color: "#000000", fontWeight: "bold" }}> :الاختيارالثاني </Typography>
                <Typography variant="body1" sx={{ color: "#000000", fontWeight: "bold" }}> :الاختيارالثالث </Typography>
                <Typography variant="body1" sx={{ color: "#000000", fontWeight: "bold" }}> :الاختيار الرابع </Typography>
              </Box>
                {/* العمود على اليسار (النصوص الافتراضية) */}
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px",  position: "relative",
        top: "-150px",marginLeft:"850px",}}>
      <Typography variant="body1" sx={{ color: "#000", fontWeight: "bold",marginTop:"5px" }}>
      نص افتراضي
      </Typography>
      <Typography variant="body1" sx={{ color: "#000", fontWeight: "bold" ,marginTop:"5px"}}>
      نص افتراضي  
    </Typography>
      <Typography variant="body1" sx={{ color: "#000", fontWeight: "bold",marginTop:"5px" }}>
      نص افتراضي
      </Typography>
      <Typography variant="body1" sx={{ color: "#000", fontWeight: "bold", marginTop:"5px"}}>
      نص افتراضي
    </Typography>
  </Box>
              <CountdownTimer initialTime={60} /> 
              </Box>
          )}
        
        </Box>
      ))}
    </>
  );
}
export default UploadedTest;


















