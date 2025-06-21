import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FilterListIcon from "@mui/icons-material/FilterList";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import UploadedTest from "./UploadedTest";
import CompletedTest from "./CompletedTest";

function TempComponent() {
  const [filter, setFilter] = useState("all"); // الحالة الافتراضية لعرض الكل

  return (
    <Box sx={{ width: "100%", paddingInline: "20px"}}>
      {/* الروابط */}
      <Box
        sx={{
          padding: "10px 0px",
          display: "flex",
          gap: "30px",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Box
            sx={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: "#E3E3E3",
              color: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            12
          </Box>
          <Link
            to="#"
            style={{ textDecoration: "none", color: filter === "completed" ? "#E3E3E3" : "inherit",fontWeight:"bold"  }}
            onClick={() => setFilter("completed")}
            >
              
            الاختبارات المكتملة
          </Link>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Link
            to="#"
            style={{ textDecoration: "none", color: filter === "uploaded" ? "#E3E3E3" : "inherit",fontWeight:"bold" }}
            onClick={() => setFilter("uploaded")}
          >
            الاختبارات المرفوعة
          </Link>
        </Box>
      </Box>

      {/* الخط الفاصل */}
      <hr
        style={{
          width: "100%",
          opacity: "0.5",
          borderTop: "1px solid #ccc",
        }}
      />

      {/* البحث والفلاتر */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          justifyContent: "flex-end",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <TextField
          placeholder="بحث..."
          variant="outlined"
          sx={{
            bgcolor: "#F0F0F0",
            borderRadius: "8px",
            width: { xs: "100%", sm: "300px", md: "400px" },
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              fontSize: "14px",
              "& input": {
                padding: "8px 14px",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <SearchIcon sx={{ color: "#888", fontSize: "16px" }} />
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="outlined"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            border: "1px solid #EBEBEB",
            color: "#667085",
            flexDirection: "row-reverse",
            "&:hover": { backgroundColor: "#f5f5f5" },
            fontSize: { xs: "12px", sm: "14px" },
          }}
        >
          <FilterListIcon sx={{ fontSize: { xs: "18px", sm: "20px" } }} />
          فلترة
        </Button>
      </Box>

      {/* عرض البوكسات بناءً على الفلتر */}
      {filter === "uploaded" && <UploadedTest />}
      {filter === "completed" && <CompletedTest />}
      {filter === "all" && (
        <>
          <UploadedTest />
          <CompletedTest />
        </>
      )}
    </Box>
  );
}

export default TempComponent;