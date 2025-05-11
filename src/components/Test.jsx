import React from "react";
import Box from "@mui/material/Box";
import "@fontsource/tajawal";
import TempPage from "./TempPage";
import { Outlet, useLocation } from "react-router-dom";

function Test() {
  const location = useLocation();

  return (
    <Box sx={{ width: { md: `calc(100% - 200px)` }, overflowX: "hidden", paddingInline: 2 }}>
      <TempPage />
      {location.pathname === "/test" && <></>}
      <Outlet />
    </Box>
  );
}

export default Test;




















