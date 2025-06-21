import FilterListIcon from "@mui/icons-material/FilterList";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, TextField } from "@mui/material";
export default function Search_Filter() {
   return (
      <Box sx={{ justifyContent:{
         xs: "center",
         md: "end",
      },
      display: "flex", alignItems: "center", gap: "8px" }}>
         <TextField
         placeholder="بحث"
         variant="outlined"
         sx={{
            minWidth:"100px",
            bgcolor: "#FFF",
            borderRadius: "8px",
            width: { xs: `calc(100% - 100px)`, md: "350px" },
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
               <SearchIcon sx={{ color: "#000", fontSize: "16px" }} />
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
   )
}