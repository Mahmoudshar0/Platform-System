import { Link, useNavigate } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";
import { Box, TextField } from "@mui/material";


export default function Options(props) {
   const navigate = useNavigate();
   return (
      <Box
         sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "15px",
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
            onClick={() => navigate(props.addPage)}
         >
            {props.addWord}
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
   )
}