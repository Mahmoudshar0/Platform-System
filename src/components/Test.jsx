import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";
import "@fontsource/tajawal";
import TempPage from "./TempPage";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import UploadedTest from "./UploadedTest";
import CompletedTest from "./CompletedTest";

function Test() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box sx={{width: { md: `calc(100% - 240px)` }}}>
      <TempPage />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
          marginBottom: "20px",
          position: "absolute",
          top: "250px",
          left: {xs:"23%", md:"15%"},
        }}
      >
        <Button
          variant="outlined"
          sx={{
            color: "#667085",
            borderColor: "#EBEBEB",
            height: "40px",
            direction: "ltr",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          onClick={() => navigate("/add-test-page")}
        >
          إضافة اختبار
          <AddIcon />
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#667085",
            borderColor: "#EBEBEB",
            height: "40px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          تحديد الكل
          <CheckIcon />
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#667085",
            borderColor: "#EBEBEB",
            height: "40px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          حذف الكل
          <DeleteOutlineIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default Test;
