import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import UploadedTest from "./UploadedTest";
import CompletedTest from "./CompletedTest";
import Search_Filter from "./Search_Filter";
import Options from "./Options";

function TempComponent() {

  const [filter, setFilter] = useState("uploaded");

  return (
    <Box sx={{ width: "100%", padding: "10px 15px" }}>
      <Box
        sx={{
          padding: "10px",
          display: "flex",
          gap: "30px",
          justifyContent: "flex-end",
          alignItems: "center",
          marginRight: 0,
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

      <hr
        style={{
          opacity: "0.5",
          borderTop: "1px solid #ccc",
        }}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          justifyContent: {
            xs: "center",
            lg:"space-between",
          },
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <Options addPage="/add-test-page" addWord="اضافه اختبار" />
        <Search_Filter />
      </Box>

      {filter === "uploaded" ? <UploadedTest /> : <CompletedTest />}
    </Box>
  );
}

export default TempComponent;