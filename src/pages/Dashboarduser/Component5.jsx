import { Card, CardContent, Typography, Box, Stack } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useState } from "react";

export default function Component5() {
  const [fileData] = useState([
    {
      id: 1,
      type: "PDF",
      size: "12.54Mb",
      title: "اساسيات البرمجة الهيكلية",
      subtitle: "محاضرة الاولى قواعد البرمجة و...",
      pages: 34,
    },
    {
      id: 2,
      type: "PDF",
      size: "10.00Mb",
      title: "مقدمة في البرمجة",
      subtitle: "محاضرة الثانية مفاهيم البرمجة...",
      pages: 25,
    },
    {
      id: 3,
      type: "PDF",
      size: "12.54Mb",
      title: "اساسيات البرمجة الهيكلية",
      subtitle: "محاضرة الاولى قواعد البرمجة و...",
      pages: 34,
    },
    {
      id: 4,
      type: "PDF",
      size: "10.00Mb",
      title: "مقدمة في البرمجة",
      subtitle: "محاضرة الثانية مفاهيم البرمجة...",
      pages: 25,
    },
  ]);

  return (
    <Box sx={{ 
      width: 'calc(100% - 240px)',
      marginRight:'240px', 
      padding: { xs: 2, md: 4 },
      direction: 'rtl'
    }}>
      {/* Component Title */}
      <Typography variant="h5" sx={{ 
        fontWeight: 'bold', 
        marginBottom: 4,
        textAlign: 'right'
      }}>
        الملفات 
      </Typography>

      {/* PDF Cards Grid */}
      <Box sx={{
        display: "grid",
        gridTemplateColumns: { 
          xs: '1fr', 
          sm: 'repeat(2, 1fr)', 
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)'
        },
        gap: 3,
        padding: 1
      }}>
        {fileData.map((file) => (
          <Card 
            key={file.id} 
            sx={{ 
              direction: "rtl",
              borderRadius: 2,
              boxShadow: 3,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)'
              }
            }}
          >
            <CardContent>
              {/* PDF Icon and Type */}
              <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                <PictureAsPdfIcon color="error" fontSize="medium" />
                <Box>
                  <Typography variant="subtitle2">{file.type}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {file.size}
                  </Typography>
                </Box>
              </Stack>

              {/* Title and Description */}
              <Box mb={2}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 'bold',
                    marginBottom: 1
                  }}
                >
                  {file.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {file.subtitle}
                </Typography>
              </Box>

              {/* Pages Count */}
              <Typography 
                variant="caption" 
                color="text.secondary"
                sx={{ display: 'block', textAlign: 'left' }}
              >
                عدد الصفحات: {file.pages}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}