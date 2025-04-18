import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const PostList = ({ open, onClose, onSubmit }) => {
  const [postContent, setPostContent] = useState(""); // لتخزين نص المنشور
  const [videoFile, setVideoFile] = useState(null); // لتخزين ملف الفيديو
  const [imageFile, setImageFile] = useState(null); // لتخزين ملف الصورة

  const handleSubmit = () => {
    if (postContent) {
      // جمع البيانات وتمريرها
      const postData = {
        content: postContent,
        video: videoFile,
        image: imageFile,
      };
      onSubmit(postData);
      // إعادة تعيين الحقول بعد النشر
      setPostContent("");
      setVideoFile(null);
      setImageFile(null);
      onClose();
    } else {
      alert("يرجى كتابة وصف المنشور!");
    }
  };

  const handleVideoUpload = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handleImageUpload = (event) => {
    setImageFile(event.target.files[0]);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      dir="rtl"
      PaperProps={{
        sx: { borderRadius: "12px", m: 2 },
      }}
    >
      <DialogContent sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: "#1C1B1F" }}>
            إضافة منشور
          </Typography>
          <IconButton onClick={onClose} sx={{ color: "#1C1B1F", "&:hover": { backgroundColor: "transparent" } }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Content */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" sx={{ mb: 1, color: "#1C1B1F" }}>
            المنشور
          </Typography>
          <TextField
            multiline
            rows={4}
            fullWidth
            placeholder="وصف المنشور"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                backgroundColor: "#fff",
                "& fieldset": { borderColor: "#79747E" },
              },
            }}
          />
        </Box>

        {/* Upload Sections */}
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mb: 3 }}>
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              textAlign: "center",
              borderRadius: "12px",
              borderStyle: "dashed",
              borderColor: "#79747E",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#F7F2FA" },
            }}
          >
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoUpload}
              style={{ display: "block", margin: "0 auto" }}
            />
            <Typography sx={{ color: "#49454F" }}>
              {videoFile ? videoFile.name : "تحميل الفيديو"}
            </Typography>
          </Paper>
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              textAlign: "center",
              borderRadius: "12px",
              borderStyle: "dashed",
              borderColor: "#79747E",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#F7F2FA" },
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "block", margin: "0 auto" }}
            />
            <Typography sx={{ color: "#49454F" }}>
              {imageFile ? imageFile.name : "تحميل صور"}
            </Typography>
          </Paper>
        </Box>

        {/* Footer */}
        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#6750A4",
            color: "#fff",
            borderRadius: "100px",
            py: 1.5,
            textTransform: "none",
            "&:hover": { backgroundColor: "#6750A4" },
          }}
        >
          ارسال المقالة
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default PostList;
