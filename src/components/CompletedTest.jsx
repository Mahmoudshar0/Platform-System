import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

function CompletedTest() {
  const [boxStates, setBoxStates] = useState(
    Array(6).fill({ showOptions: false, showResults: false, allowShow: false })
  );

  const updateBoxState = (index, newState) => {
    setBoxStates((prev) =>
      prev.map((state, i) => (i === index ? { ...state, ...newState } : state))
    );
  };

  return (
    <>
      {boxStates.map((state, index) => (
        <Box
          key={index}
          sx={{
            width: { xs: "95%", sm: "85%", md: "75%" },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "15px",
            borderRadius: "8px",
            margin: "20px auto",
            marginRight: { xs: "0px", sm: "20px", md: "250px" },
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            flexDirection: { xs: "column", sm: "row" },
            gap: "10px",
            border: "1px solid #BCBCBC",
            position: "relative",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <KeyboardArrowLeftIcon
              sx={{
                color: "#818181",
                transform: state.showResults ? "rotate(-90deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
            <Link
              href="#"
              sx={{ color: "#0023E8", textDecoration: "none", cursor: "pointer" }}
              onClick={() => updateBoxState(index, { showOptions: true })}
            >
              عرض النتيجة
            </Link>
            <span style={{ color: "#C7C7C7", fontWeight: "bold", opacity: "0.6" }}>|</span>
            <span style={{ color: "#818181", fontWeight: "bold" }}>
              تم التسليم <span style={{ color: "#818181", fontWeight: "normal" }}>10:30 صباحًا</span>
            </span>

            {/* بوكس خيارات الإظهار/الإخفاء في المنتصف */}
            {state.showOptions && (
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)", // لجعل البوكس في المنتصف تمامًا
                  background: "#fff",
                  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
                  borderRadius: "12px",
                  p: 3,
                  zIndex: 10,
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  border: "1px solid #E0E0E0",
                  width: "250px", // عرض أكبر
                  textAlign: "center",
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#0023E8" }}>
                  اختيار عرض النتيجة
                </Typography>
                <Button
                  variant="contained"
                  sx={{ background: "#0023E8", color: "white", fontSize: "14px", padding: "8px 20px" }}
                  onClick={() =>
                    updateBoxState(index, { showOptions: false, showResults: true, allowShow: true })
                  }
                >
                  إظهار النتيجة
                </Button>
                <Button
                  variant="outlined"
                  sx={{ color: "#818181", borderColor: "#818181", fontSize: "14px", padding: "8px 20px" }}
                  onClick={() =>
                    updateBoxState(index, { showOptions: false, showResults: false, allowShow: false })
                  }
                >
                  إخفاء النتيجة
                </Button>
              </Box>
            )}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box>
              <Typography variant="h6" sx={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>
                رانية بخش
              </Typography>
              <Typography variant="body2" sx={{ color: "#667085", fontWeight: "bolder" }}>
                طالب
              </Typography>
            </Box>
            <img
              src="/images/logo.jpg"
              alt="Profile"
              style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover", border: "1px solid #C7C7C7" }}
            />
          </Box>

          {/* نافذة عرض النتيجة */}
          {state.showResults && state.allowShow && (
            <Box
              sx={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100%",
                maxWidth: "750px",
                background: "#fff",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                borderRadius: "8px",
                p: 3,
                zIndex: 10,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>
                نتيجة الاختبار
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, textAlign: "left", paddingLeft: 5 }}>
                : الدرجة <strong style={{ float: "left" }}> 85 </strong>
              </Typography>

              <Box sx={{ width: "100%", height: "3px", backgroundColor: "#B0B0B0", opacity: "0.4" }} />

              <Typography variant="body1" sx={{ mt: 1 }}>
                الدرجة الكلية: <strong>100</strong>
              </Typography>

              <TableContainer component={Paper} sx={{ mt: 3 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="right" sx={{ fontWeight: "bold", textAlign: "right", paddingRight: 10 }}>
                        السؤال
                      </TableCell>
                      <TableCell align="left" sx={{ fontWeight: "bold", textAlign: "left", paddingLeft: 10 }}>
                        الإجابة
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[...Array(5)].map((_, idx) => (
                      <TableRow key={idx}>
                        <TableCell align="right" sx={{ textAlign: "right", paddingRight: 20 }}>
                          {`سؤال ${idx + 1}`}
                        </TableCell>
                        <TableCell align="left" sx={{ textAlign: "left", paddingLeft: 20 }}>
                          {idx % 2 === 0 ? <CheckCircleIcon color="success" /> : <CancelIcon color="error" />}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Button
                variant="contained"
                sx={{ mt: 3, background: "#0023E8", color: "white" }}
                onClick={() => updateBoxState(index, { showResults: false })}
              >
                إغلاق
              </Button>
            </Box>
          )}
        </Box>
      ))}
    </>
  );
}

export default CompletedTest;


