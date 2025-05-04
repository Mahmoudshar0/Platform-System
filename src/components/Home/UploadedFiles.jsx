import { Card, CardContent, Typography, Box, Stack, IconButton, Menu, MenuItem } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import FilterBar from "./Header/FilterBar";
import CircularProgress from "@mui/material/CircularProgress";
const options = ["تحميل", "مشاركة", "حذف"];
const ITEM_HEIGHT = 48;

export default function UploadedFiles() {
const [fileData] = useState([
   {
      id: 1,
      type: "PDF",
      size: "12.54Mb",
      title: "اساسيات البرمجة الهيكلية",
      subtitle: "محاضرة الاولى قواعد البرمجة و...",
      status: "جاري الرفع",
      pages: 34,
   },
   {
      id: 2,
      type: "PDF",
      size: "10.00Mb",
      title: "مقدمة في البرمجة",
      subtitle: "محاضرة الثانية مفاهيم البرمجة...",
      status: "مكتمل",
      pages: 25,
   },
   {
      id: 1,
      type: "PDF",
      size: "12.54Mb",
      title: "اساسيات البرمجة الهيكلية",
      subtitle: "محاضرة الاولى قواعد البرمجة و...",
      status: "جاري الرفع",
      pages: 34,
   },
   {
      id: 2,
      type: "PDF",
      size: "10.00Mb",
      title: "مقدمة في البرمجة",
      subtitle: "محاضرة الثانية مفاهيم البرمجة...",
      status: "مكتمل",
      pages: 25,
   },
]);

const [activeFilter, setActiveFilter] = useState('all');
const [anchorEl, setAnchorEl] = useState(null);
const [selectedFileId, setSelectedFileId] = useState(null);

const handleClick = (event, id) => {
   setAnchorEl(event.currentTarget);
   setSelectedFileId(id);
};

const handleClose = () => {
   setAnchorEl(null);
   setSelectedFileId(null);
};

const filters = [
   { id: 'all', label: 'الكل' },
   { id: 'جاري الرفع', label: 'جاري الرفع' },
   { id: 'مكتمل', label: 'مكتمل' },
];

const handleFilterChange = (filter) => {
   setActiveFilter(filter);
};

  // فلترة الملفات
const filteredFiles = activeFilter === 'all'
   ? fileData
   : fileData.filter(file => file.status === activeFilter);

return (<>
   <FilterBar 
        activeFilter={activeFilter} 
        onFilterChange={handleFilterChange} 
        title="الملفات المرفوعة" 
        filters={filters}
      />

   <Box sx={{display:"grid", justifyContent: "center", gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 2, padding: 2}}>
      {filteredFiles.map((file) => (
        <Card key={file.id} sx={{ direction: "rtl", borderRadius: 3, boxShadow: 3, mb: 2 }}>
          <CardContent>
            <Stack direction="row" justifyContent="space-between">
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PictureAsPdfIcon color="error" />
                <Box sx={{ marginRight: 1 }}>
                  <Typography variant="subtitle2">{file.type}</Typography>
                  <Typography variant="caption" color="text.secondary">{file.size}</Typography>
                </Box>
              </Box>
              <IconButton
                aria-label="more"
                id={`long-button-${file.id}`}
                aria-controls={selectedFileId === file.id ? 'long-menu' : undefined}
                aria-expanded={selectedFileId === file.id ? 'true' : undefined}
                aria-haspopup="true"
                onClick={(event) => handleClick(event, file.id)}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  'aria-labelledby': `long-button-${file.id}`,
                }}
                anchorEl={anchorEl}
                open={selectedFileId === file.id}
                onClose={handleClose}
                slotProps={{
                  paper: {
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: '20ch',
                    },
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem key={option} onClick={handleClose}>
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </Stack>

            <Box mb={3}>
              <Typography variant="h6" noWrap>{file.title}</Typography>
              <Typography variant="body2" color="text.secondary" noWrap>
                {file.subtitle}
              </Typography>
            </Box>

            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Stack direction="row" alignItems="center" gap={1} spacing={2}>
                {file.status === "جاري الرفع" ? (
                  <AutorenewIcon sx={{ color: 'orange', animation: 'spin 2s linear infinite', fontSize: 18 }} />
                ) : (
                  <CircularProgress size={18} color="success" />
                )}
                <Typography variant="caption" sx={{ color: file.status === "جاري الرفع" ? 'orange' : 'green' }}>
                  {file.status}
                </Typography>
              </Stack>
              <Typography variant="caption" color="text.secondary">
                عدد الصفحات: {file.pages}
              </Typography>
            </Stack>
          </CardContent>

          <style>
            {`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
          </style>
        </Card>
      ))}
    </Box></>
  );
}

